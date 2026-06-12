// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://goldwhite.co.uk',
  redirects: {
    '/vision': { status: 301, destination: '/services' },
    '/about': { status: 301, destination: '/team' },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});