import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://swastikdan.in',
  integrations: [tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date('2023-11-08'),
    }),
  ]
});