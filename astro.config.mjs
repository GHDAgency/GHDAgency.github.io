// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ghdagency.ai',
  integrations: [
    // The /v1 to /v5 design directions (and their index) are review pages: keep them out of the sitemap.
    sitemap({ filter: (page) => !/\/confirm\/?$/.test(page) }),
  ],
  redirects: {
    '/home': '/',
    '/about-us': '/about/',
    '/our-solutions': '/solutions/',
    '/pricing': '/services/',
    '/contact-us': '/apply/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
