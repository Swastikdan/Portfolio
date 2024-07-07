import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://swastikdan.in',
  integrations: [tailwind(), mdx(), sitemap()],
  // output: "server",
  // adapter: vercel()
});