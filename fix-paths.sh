#!/bin/bash
# Fix paths in all HTML files for GitHub Pages subdirectory

# Root level files
for f in dist/*.html; do
  [ -f "$f" ] || continue
  sed -i 's|href="/_astro/|href="./_astro/|g' "$f"
  sed -i 's|href="/favicon|href="./favicon|g' "$f"
  sed -i 's|href="/servicios/|href="./servicios/|g' "$f"
  sed -i 's|href="/contacto/|href="./contacto/|g' "$f"
  sed -i 's|href="/sobre-nosotros/|href="./sobre-nosotros/|g' "$f"
  sed -i 's|href="/"|href="./"|g' "$f"
  sed -i 's|src="/logo|src="./logo|g' "$f"
done

# First level subdirectories
for f in dist/*/*.html; do
  [ -f "$f" ] || continue
  sed -i 's|href="/_astro/|href="../_astro/|g' "$f"
  sed -i 's|href="/favicon|href="../favicon|g' "$f"
  sed -i 's|href="/servicios/|href="../servicios/|g' "$f"
  sed -i 's|href="/contacto/|href="../contacto/|g' "$f"
  sed -i 's|href="/sobre-nosotros/|href="../sobre-nosotros/|g' "$f"
  sed -i 's|href="/"|href="../"|g' "$f"
  sed -i 's|src="/logo|src="../logo|g' "$f"
done

# Second level subdirectories (services detail pages)
for f in dist/*/*/*.html; do
  [ -f "$f" ] || continue
  sed -i 's|href="/_astro/|href="../../_astro/|g' "$f"
  sed -i 's|href="/favicon|href="../../favicon|g' "$f"
  sed -i 's|href="/servicios/|href="../../servicios/|g' "$f"
  sed -i 's|href="/contacto/|href="../../contacto/|g' "$f"
  sed -i 's|href="/sobre-nosotros/|href="../../sobre-nosotros/|g' "$f"
  sed -i 's|href="/"|href="../../"|g' "$f"
  sed -i 's|src="/logo|src="../../logo|g' "$f"
done

echo "Paths fixed"
