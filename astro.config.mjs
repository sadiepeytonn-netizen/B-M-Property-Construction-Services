import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` when the final domain is chosen (also in src/data/site.ts).
export default defineConfig({
  site: 'https://www.bmconstructionsvc.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thanks/') && !page.includes('/404') }),
  ],
});
