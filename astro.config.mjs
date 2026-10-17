import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
const data = JSON.parse(readFileSync(new URL('./src/data/tools.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: 'https://viberanked.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
    serialize(item) { item.lastmod = new Date(data.lastVerified).toISOString(); return item; },
  })],
});
