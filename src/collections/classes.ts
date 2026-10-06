import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * classes entries: src/content/classes/<locale>/<slug>.md → /<locale?>/classes/<slug>/
 *
 * The Markdown body is the prose of the "What this class is" section (one paragraph per
 * blank-line-separated block). Everything else lives in frontmatter. Fields marked "html" are rendered
 * with set:html and may contain <br> / <span class="text-gold">; all other text is plain
 * (write "&", not "&amp;"). Links are unprefixed ("/contact/", "#session").
 * Photos are paths inside src/assets/img ("classes/boxing.jpg").
 */

const cta = z.object({
  label: z.string(),
  href: z.string(),
  style: z.enum(["solid", "outline"]).optional(),
});

const photo = z.object({ src: z.string(), alt: z.string() });

const head = z.object({
  eyebrow: z.string(),
  /** html */
  title: z.string(),
  lead: z.string().optional(),
});

export const classes = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/classes" }),
  schema: z.object({
    /** Class name, e.g. "Boxing" (for listings). */
    title: z.string(),
    meta: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      image: z.string(),
      /** html */
      eyebrow: z.string(),
      /** html */
      title: z.string(),
      lead: z.string(),
      buttons: z.array(cta),
    }),
    /** Stats bar under the hero. */
    stats: z.array(z.object({ num: z.string(), label: z.string(), sub: z.string().optional() })),
    /** "What this class is": heading + gold pills + photo; its text is the Markdown body. */
    intro: head.extend({
      pills: z.array(z.string()).optional(),
      image: photo,
    }),
    /** "Inside a session": the timed blocks of one class (section id="session"). */
    session: head.extend({
      steps: z.array(z.object({ time: z.string(), title: z.string(), text: z.string() })),
    }),
    /** "What you'll build": benefit cards. */
    benefits: head.extend({
      items: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    /** "Who it's for" checklist, shown next to the schedule. */
    fit: head.extend({ items: z.array(z.string()) }),
    /** The class's weekly slots as cards. */
    schedule: head.extend({
      slots: z.array(z.object({ day: z.string(), time: z.string(), detail: z.string() })),
      note: z.string().optional(),
    }),
    coach: z.object({
      image: photo,
      eyebrow: z.string(),
      name: z.string(),
      role: z.string(),
      quote: z.string(),
      bio: z.string(),
      /** Numbers row (original .profile-stats); not every class has one. */
      stats: z.array(z.object({ num: z.string(), label: z.string() })).optional(),
      buttons: z.array(cta),
    }),
    faq: head
      .extend({ items: z.array(z.object({ q: z.string(), a: z.string() })) })
      .optional(),
    /** "Pairs well with": cards linking to other classes. */
    pairs: head
      .extend({
        allLink: z.object({ label: z.string(), href: z.string() }),
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
      })
      .optional(),
    /** "From the Magazine" banner linking to an article. */
    magazine: z
      .object({ tag: z.string(), title: z.string(), href: z.string(), linkLabel: z.string() })
      .optional(),
    cta: head.extend({ buttons: z.array(cta) }),
  }),
});
