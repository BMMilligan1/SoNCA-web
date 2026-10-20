// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://naturalcapitalaccounting.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/technical-working-group/': '/working-groups/',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
