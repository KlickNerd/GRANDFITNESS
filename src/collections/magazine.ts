import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * magazine entries: src/content/magazine/<locale>/<slug>.md → /<locale?>/magazine/<slug>/
 *
 * The Markdown body is the article text. Infographics are raw HTML (<figure>, inline <svg>).
 * Smart punctuation is off (astro.config.mjs), so quotes and dashes stay exactly as written.
 *
 * The magazine index lists articles newest first (by datePublished).
 */
export const magazine = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/magazine" }),
  schema: z.object({
    /** Headline: <h1>, card title and JSON-LD headline. */
    title: z.string(),
    /** <title> / og:title. Defaults to `title` + the magazine suffix from src/i18n/pages/magazine. */
    metaTitle: z.string().optional(),
    /** Meta description / og:description. */
    description: z.string(),
    /** Teaser text on the magazine index card. */
    excerpt: z.string(),
    /** Gold label, e.g. "Recovery". */
    category: z.string(),
    /** Date as shown on the page, e.g. "February 2026". */
    date: z.string(),
    /** ISO date (YYYY-MM-DD) for JSON-LD datePublished and the index order. */
    datePublished: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /** Byline in the meta row, e.g. "Grand Fitness Coaching Team". */
    author: z.string(),
    /** Banner photo (also the index thumbnail), e.g. "mag/sauna.jpg". */
    image: z.string(),
    /** Social card image; defaults to /img/og-cover.jpg. */
    ogImage: z.string().optional(),
    /** "Keep reading" slugs; defaults to every other article in index order. */
    related: z.array(z.string()).optional(),
  }),
});
