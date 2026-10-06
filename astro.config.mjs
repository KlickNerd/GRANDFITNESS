// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { rename, rm } from "node:fs/promises";

/**
 * Astro only writes the root 404 page as 404.html; src/pages/ka/404.astro would become
 * ka/404/index.html. Cloudflare serves the nearest 404.html, so move it there.
 */
const localized404 = {
  name: "localized-404",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      for (const locale of ["ka", "ru"]) {
        try {
          await rename(new URL(`${locale}/404/index.html`, dir), new URL(`${locale}/404.html`, dir));
          await rm(new URL(`${locale}/404/`, dir), { recursive: true });
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
      }
    },
  },
};

export default defineConfig({
  site: "https://grandfitness.ge",
  // URLs keep the original site's form: /about/, /coaches/mariam/
  trailingSlash: "always",
  build: { format: "directory" },
  // Keep quotes and dashes exactly as written (no automatic curly quotes / en dashes).
  markdown: { smartypants: false },
  i18n: {
    locales: ["en", "ka", "ru"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      i18n: { defaultLocale: "en", locales: { en: "en", ka: "ka", ru: "ru" } },
    }),
    localized404,
  ],
  vite: { plugins: [tailwindcss()] },
});
