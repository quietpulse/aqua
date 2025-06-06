// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import path from 'path';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://aquakun.vercel.app/",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },
    vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});

