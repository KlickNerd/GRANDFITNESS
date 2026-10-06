import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * goals entries: src/content/goals/<locale>/<slug>.md → /<locale?>/goals/<slug>/
 *
 * Everything lives in the frontmatter (the Markdown body is unused). Fields marked "html" may
 * contain inline HTML (<br>, <span class="text-gold">) and are rendered with set:html; all other
 * strings are plain text. Links are unprefixed ("/contact/"); the language prefix is added on render.
 * All six original goal pages have every section, so only the class grid width is optional.
 */
const cta = z.object({
  label: z.string(),
  href: z.string(),
  /** "solid" = filled gold (default), "outline" = gold border. */
  style: z.enum(["solid", "outline"]).optional(),
});

/** Section heading: eyebrow, title (html) and an optional lead paragraph. */
const head = {
  eyebrow: z.string(),
  /** html */
  title: z.string(),
  lead: z.string().optional(),
};

export const goals = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/goals" }),
  schema: z.object({
    /** <title> and og:title */
    title: z.string(),
    /** meta description */
    description: z.string(),
    hero: z.object({
      /** Background photo, e.g. "space/studio.jpg" */
      image: z.string(),
      eyebrow: z.string(),
      /** html */
      title: z.string(),
      lead: z.string(),
      buttons: z.array(cta),
    }),
    /** Stats bar under the hero (4 items). */
    stats: z.array(z.object({ num: z.string(), label: z.string(), sub: z.string().optional() })),
    /** "Why …" block: text left, photo right. */
    intro: z.object({
      eyebrow: z.string(),
      /** html */
      title: z.string(),
      paragraphs: z.array(z.string()),
      pills: z.array(z.string()),
      image: z.string(),
      alt: z.string(),
    }),
    /** The four-phase method (anchor #method). */
    method: z.object({
      ...head,
      phases: z.array(z.object({ when: z.string(), title: z.string(), text: z.string() })),
    }),
    /** Six principle cards. */
    principles: z.object({ ...head, items: z.array(z.object({ title: z.string(), text: z.string() })) }),
    /** "Inside a session": time-boxed cards. */
    session: z.object({
      ...head,
      items: z.array(z.object({ time: z.string(), title: z.string(), text: z.string() })),
    }),
    /** Photo cards of the gym areas used for this goal. */
    spaces: z.object({
      ...head,
      items: z.array(z.object({ image: z.string(), title: z.string(), text: z.string() })),
    }),
    /** Recommended coach. */
    coach: z.object({
      eyebrow: z.string(),
      name: z.string(),
      role: z.string(),
      quote: z.string(),
      bio: z.string(),
      image: z.string(),
      alt: z.string(),
      stats: z.array(z.object({ num: z.string(), label: z.string() })),
      buttons: z.array(cta),
    }),
    /** Recommended classes. */
    classes: z.object({
      ...head,
      /** "All classes →" link next to the heading. */
      all: z.object({ label: z.string(), href: z.string() }),
      /** Grid width on desktop: 3 (narrower 16/10 photos) or 2 (wider 16/9 photos, default). */
      columns: z.union([z.literal(2), z.literal(3)]).default(2),
      items: z.array(
        z.object({
          href: z.string(),
          image: z.string(),
          tag: z.string(),
          title: z.string(),
          text: z.string(),
          linkLabel: z.string(),
        }),
      ),
    }),
    testimonials: z.object({
      ...head,
      items: z.array(z.object({ quote: z.string(), who: z.string(), featured: z.boolean().optional() })),
    }),
    faq: z.object({ ...head, items: z.array(z.object({ q: z.string(), a: z.string() })) }),
    /** "From the Magazine" banner linking to an article. */
    magazine: z.object({ href: z.string(), tag: z.string(), title: z.string(), linkLabel: z.string() }),
    cta: z.object({
      eyebrow: z.string(),
      /** html */
      title: z.string(),
      lead: z.string(),
      buttons: z.array(cta),
    }),
  }),
});
