import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * goals entries: src/content/goals/<locale>/<slug>.md → /<locale?>/goals/<slug>/
 * (schema is defined when the goals pages are ported)
 */
export const goals = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/goals" }),
  schema: z.object({
    title: z.string(),
  }),
});
