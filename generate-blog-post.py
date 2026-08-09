#!/usr/bin/env python3
"""
Genera un artículo de blog para Licenza Ingenieros.
- Lee la siguiente keyword de seo-keywords-queue.txt
- Genera el contenido del post como JSON
- Lo inserta en blog.ts
- Build + commit + push

Uso: python3 generate-blog-post.py '{"slug":"...","title":"...","metaTitle":"...","description":"...","keywords":["..."],"intro":"...","sections":[{"heading":"...","paragraphs":["..."]}],"relatedServices":["..."]}'
"""
import json
import sys
import subprocess
import re
from datetime import date
from pathlib import Path

PROJECT = Path("/home/javi/valencia-ingenieria-web")
BLOG_TS = PROJECT / "src" / "data" / "blog.ts"
QUEUE = PROJECT / "seo-keywords-queue.txt"


def mark_keyword_done(keyword: str):
    """Comment out the used keyword line."""
    lines = QUEUE.read_text().splitlines()
    new_lines = []
    for line in lines:
        stripped = line.strip()
        if not stripped.startswith('#') and keyword.lower() in stripped.lower():
            new_lines.append(f"# DONE {line}")
        else:
            new_lines.append(line)
    QUEUE.write_text('\n'.join(new_lines) + '\n')


def get_next_keyword() -> tuple[str, list[str]]:
    """Return (keyword, [related_service_slugs]) from the queue."""
    for line in QUEUE.read_text().splitlines():
        stripped = line.strip()
        if stripped and not stripped.startswith('#'):
            parts = stripped.split('|')
            kw = parts[0].strip()
            services = [s.strip() for s in parts[1].split(',')] if len(parts) > 1 else []
            return kw, services
    return "", []


def insert_post(post_data: dict):
    """Insert the new post into blog.ts before the closing ];"""
    post_data['publishDate'] = date.today().isoformat()

    # Build the TS object string
    def ts_str(s):
        escaped = s.replace("'", "\\'")
        return f"'{escaped}'"

    def ts_arr(items):
        inner = ', '.join(ts_str(i) for i in items)
        return f'[{inner}]'

    sections_parts = []
    for sec in post_data['sections']:
        paras = ',\n          '.join(ts_str(p) for p in sec['paragraphs'])
        sections_parts.append(
            f"      {{\n"
            f"        heading: {ts_str(sec['heading'])},\n"
            f"        paragraphs: [\n"
            f"          {paras},\n"
            f"        ],\n"
            f"      }}"
        )
    sections_str = ',\n'.join(sections_parts)

    ts_obj = (
        f"  {{\n"
        f"    slug: {ts_str(post_data['slug'])},\n"
        f"    title: {ts_str(post_data['title'])},\n"
        f"    metaTitle: {ts_str(post_data['metaTitle'])},\n"
        f"    description:\n"
        f"      {ts_str(post_data['description'])},\n"
        f"    publishDate: {ts_str(post_data['publishDate'])},\n"
        f"    keywords: {ts_arr(post_data['keywords'])},\n"
        f"    intro:\n"
        f"      {ts_str(post_data['intro'])},\n"
        f"    sections: [\n"
        f"{sections_str},\n"
        f"    ],\n"
        f"    relatedServices: {ts_arr(post_data['relatedServices'])},\n"
        f"  }}"
    )

    content = BLOG_TS.read_text()
    # Insert before the final ];  — the last entry ends with "},\n];"
    content = re.sub(
        r'(\n  },)\n\];\n',
        rf'\1\n{ts_obj},\n];\n',
        content,
        count=1,
    )
    BLOG_TS.write_text(content)


def build_and_deploy(title: str) -> bool:
    """Build, commit and push."""
    # Build
    result = subprocess.run(['npm', 'run', 'build'], cwd=PROJECT, capture_output=True, text=True, timeout=120)
    if result.returncode != 0:
        print(f"BUILD FAILED:\n{result.stderr}", file=sys.stderr)
        return False

    # Git add, commit, push
    subprocess.run(['git', 'add', 'src/data/blog.ts', 'seo-keywords-queue.txt'], cwd=PROJECT)
    short_title = title[:60] if len(title) > 60 else title
    subprocess.run(['git', 'commit', '-m', f'blog: {short_title}'], cwd=PROJECT)
    result = subprocess.run(['git', 'push', 'origin', 'master'], cwd=PROJECT, capture_output=True, text=True, timeout=60)
    if result.returncode != 0:
        print(f"PUSH FAILED:\n{result.stderr}", file=sys.stderr)
        return False
    return True


if __name__ == '__main__':
    if len(sys.argv) < 2:
        # Just print the next keyword info
        kw, services = get_next_keyword()
        print(json.dumps({"keyword": kw, "services": services}))
        sys.exit(0)

    post_json = sys.argv[1]
    post_data = json.loads(post_json)

    # Get keyword to mark as done
    kw, _ = get_next_keyword()

    # Insert post
    insert_post(post_data)
    print(f"✓ Post inserted: {post_data['slug']}")

    # Build and deploy — only mark keyword done if build succeeds
    if build_and_deploy(post_data['title']):
        if kw:
            mark_keyword_done(kw)
            print(f"✓ Keyword marked done: {kw}")
        print(f"✓ Deployed: https://javifer31.github.io/valencia-ingenieria-web/blog/{post_data['slug']}/")
    else:
        # Revert blog.ts on build failure
        subprocess.run(['git', 'checkout', '--', 'src/data/blog.ts'], cwd=PROJECT)
        print("✗ Deploy failed — blog.ts reverted", file=sys.stderr)
        sys.exit(1)
