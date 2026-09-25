// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ghdagency.ai',
  integrations: [sitemap()],
  redirects: {
    // The old site linked to /home from its nav — keep those links working.
    '/home': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
