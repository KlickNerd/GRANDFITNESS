import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * coaches entries: src/content/coaches/<locale>/<slug>.md → /<locale?>/coaches/<slug>/
 * (schema is defined when the coaches pages are ported)
 */
export const coaches = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/coaches" }),
  schema: z.object({
    title: z.string(),
  }),
});
