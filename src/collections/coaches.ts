import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** A link styled as a button (same shape as Cta in src/i18n/shared-types.ts). */
const cta = z.object({
  label: z.string(),
  /** Unprefixed internal link, e.g. "/contact/". */
  href: z.string(),
  style: z.enum(["solid", "outline"]).optional(),
});

/** Eyebrow + heading. `title` may contain inline HTML (<br>, <span class="text-gold">). */
const head = { eyebrow: z.string(), title: z.string() };

/**
 * Coach profiles: src/content/coaches/<locale>/<slug>.md → /<locale?>/coaches/<slug>/
 *
 * The Markdown body is the "about" text (left column under the hero); everything else is frontmatter.
 *
 * Page order: hero · about | numbers-or-qualifications · specialties · qualities? · process? ·
 * options (own section, or next to the qualifications when `numbers` takes the about column) ·
 * testimonials? · closing call to action.
 */
export const coaches = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/coaches" }),
  schema: z.object({
    /** <title> and og:title */
    title: z.string(),
    /** meta description */
    description: z.string(),

    /** Portrait in src/assets/img, e.g. "coaches/rezo.jpg". Missing files show the dark placeholder. */
    photo: z.string().optional(),
    photoAlt: z.string(),
    eyebrow: z.string(),
    name: z.string(),
    /** Shown in gold after the first name. */
    surname: z.string().optional(),
    role: z.string(),
    quote: z.string(),
    stats: z.array(z.object({ num: z.string(), label: z.string() })),
    buttons: z.array(cta),

    about: z.object({
      ...head,
      /** Gold pills under the about text. */
      traits: z.array(z.string()).optional(),
    }),
    /** Star list. Right of the about text, or beside the options when `numbers` is set. */
    qualifications: z.object({ ...head, items: z.array(z.string()) }),
    /** Personal-record cards; when present they take the right column of the about section. */
    numbers: z
      .object({
        ...head,
        items: z.array(z.object({ value: z.string(), label: z.string(), sub: z.string().optional() })),
        note: z.string().optional(),
      })
      .optional(),

    specialties: z.object({
      ...head,
      /** Smaller card titles (for longer lists). */
      compact: z.boolean().optional(),
      items: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    /** Two-column star list, e.g. personal qualities. */
    qualities: z.object({ ...head, items: z.array(z.string()) }).optional(),
    /** Numbered steps (01, 02, …). */
    process: z
      .object({
        ...head,
        steps: z.array(z.object({ eyebrow: z.string(), title: z.string(), text: z.string() })),
      })
      .optional(),
    options: z.object({
      ...head,
      items: z.array(z.object({ tag: z.string(), title: z.string(), text: z.string() })),
    }),
    /** Client quotes; the first one is highlighted. */
    testimonials: z
      .object({ ...head, items: z.array(z.object({ quote: z.string(), who: z.string() })) })
      .optional(),
    cta: z.object({ ...head, lead: z.string(), buttons: z.array(cta) }),
  }),
});
