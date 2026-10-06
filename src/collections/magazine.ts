import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * magazine entries: src/content/magazine/<locale>/<slug>.md → /<locale?>/magazine/<slug>/
 * (schema is defined when the magazine pages are ported)
 */
export const magazine = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/magazine" }),
  schema: z.object({
    title: z.string(),
  }),
});
