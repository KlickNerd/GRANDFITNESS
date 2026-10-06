import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * classes entries: src/content/classes/<locale>/<slug>.md → /<locale?>/classes/<slug>/
 * (schema is defined when the classes pages are ported)
 */
export const classes = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/classes" }),
  schema: z.object({
    title: z.string(),
  }),
});
