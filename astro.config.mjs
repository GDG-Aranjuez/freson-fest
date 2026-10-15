// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import react from "@astrojs/react";

const site = "https://fresonfest.gdg-aranjuez.com";
const base = "/";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [...tailwindcss()],
    resolve: {
      alias: [
        {
          // The package browser field points at the CDN stub, which does not export initForm.
          find: /^@formspree\/ajax$/,
          replacement: fileURLToPath(
            new URL(
              "./node_modules/@formspree/ajax/dist/index.mjs",
              import.meta.url
            )
          ),
        },
      ],
    },
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
