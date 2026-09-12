// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const site = "https://devfest2026.gdg-aranjuez.com";
const base = "/";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [...tailwindcss()],
  },
  site,
  base,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404"),
    }),
    react(),
  ],
});
