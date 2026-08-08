import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dominio provisional — se cambia también en src/consts.ts (SITE.url)
export default defineConfig({
  site: 'https://www.valenciaingenieria.es',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' },
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
