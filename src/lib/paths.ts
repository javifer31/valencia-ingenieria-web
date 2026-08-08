// GitHub Pages sirve el sitio bajo /valencia-ingenieria-web/ (astro.config.mjs `base`).
// Todas las rutas y assets internos deben pasar por aquí para no depender de rutas absolutas rotas.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? `${base}/` : `${base}${path}`;
}
