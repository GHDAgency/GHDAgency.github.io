// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ghdagency.ai',
  integrations: [
    // The /v1 to /v5 design directions (and their index) are review pages: keep them out of the sitemap.
    sitemap({ filter: (page) => !/^\/(v[1-5][a-z]?|v4-[a-z]+|v4\/[a-z]+|w[1-5]|directions)\/?$/.test(new URL(page).pathname) }),
  ],
  redirects: {
    // The old site linked to /home from its nav — keep those links working.
    '/home': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
