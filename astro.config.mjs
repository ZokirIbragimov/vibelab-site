import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vibelab.com.ru',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
