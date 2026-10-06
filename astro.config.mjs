// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

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
  ],
  vite: { plugins: [tailwindcss()] },
});
