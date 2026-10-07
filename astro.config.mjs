// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { rename, rm } from "node:fs/promises";

/**
 * Astro only writes the root 404 page as 404.html; src/pages/en/404.astro would become
 * en/404/index.html. Cloudflare serves the nearest 404.html, so move it there.
 */
/** @type {import("astro").AstroIntegration} */
const localized404 = {
  name: "localized-404",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      for (const locale of ["en", "ru"]) {
        try {
          await rename(
            new URL(`${locale}/404/index.html`, dir),
            new URL(`${locale}/404.html`, dir),
          );
          await rm(new URL(`${locale}/404/`, dir), { recursive: true });
        } catch (error) {
          if (/** @type {NodeJS.ErrnoException} */ (error).code !== "ENOENT") throw error;
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
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) },
  i18n: {
    locales: ["ka", "en", "ru"],
    defaultLocale: "ka",
    routing: { prefixDefaultLocale: false },
  },
  // Fonts are downloaded at build time and served from grandfitness.ge (no requests to Google).
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bebas Neue",
      cssVariable: "--font-bebas-neue",
      weights: [400],
      subsets: ["latin", "latin-ext"],
      // No built-in fallbacks: global.css chains the families so Georgian falls through to Noto.
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      weights: ["300 700"],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      // No built-in fallbacks: global.css chains the families so Georgian falls through to Noto.
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Georgian",
      cssVariable: "--font-noto-sans-georgian",
      weights: ["300 800"],
      subsets: ["georgian", "latin"],
      // No built-in fallbacks: global.css chains the families so Georgian falls through to Noto.
      fallbacks: [],
    },
    // Bebas Neue and DM Sans have no Cyrillic: Russian letters use these look-alikes.
    {
      provider: fontProviders.google(),
      name: "Oswald",
      cssVariable: "--font-oswald",
      weights: ["400 600"],
      subsets: ["cyrillic", "cyrillic-ext"],
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      weights: ["300 700"],
      subsets: ["cyrillic", "cyrillic-ext"],
      fallbacks: [],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      i18n: { defaultLocale: "ka", locales: { ka: "ka", en: "en", ru: "ru" } },
    }),
    localized404,
  ],
  vite: { plugins: [tailwindcss()] },
});
