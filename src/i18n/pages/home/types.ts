import type { Cta, Meta } from "@/i18n/shared-types";

/** A section heading: small gold label above a big display title. */
interface Head {
  label: string;
  /** html */
  title: string;
}

/**
 * Homepage text. The teaser grids (goals, coaches, classes, magazine) keep their own
 * short texts here on purpose (article teasers take only their title, category and date
 * from the articles, so headlines always match).
 */
export interface Copy {
  meta: Meta;
  /** schema.org structured data (HealthClub). */
  jsonLd: Record<string, unknown>;
  hero: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    primary: Cta;
    secondary: Cta;
    /** Vertical "Scroll" hint in the bottom-right corner. */
    scroll: string;
  };
  /** Gold strip of key numbers under the hero; an item with `href` is a link. */
  usp: { num: string; label: string; desc: string; href?: string }[];
  welcome: {
    eyebrow: string;
    /** html */
    title: string;
    paragraphs: string[];
    lead: string;
  };
  goals: Head & {
    items: { href: string; image: string; kicker: string; title: string; text: string; link: string }[];
  };
  about: Head & {
    /** Vertical caption next to the photo, e.g. "Est. 2026 · Batumi". */
    caption: string;
    mainImage: { src: string; alt: string };
    accentImage: { src: string; alt: string };
    paragraphs: string[];
    values: { title: string; desc: string }[];
    cta: Cta;
  };
  firstDay: Head & {
    lead: string;
    steps: {
      image: string;
      /** Photo focus; default is centred. */
      position?: "center 25%";
      num: string;
      title: string;
      text: string;
    }[];
    cta: Cta;
    outro: string;
  };
  coaches: Head & {
    lead: string;
    all: Cta;
    /** `image` defaults to the coach's profile photo. */
    items: { href: string; image?: string; alt: string; specialty: string; name: string; link: string }[];
  };
  classes: Head & {
    paragraphs: string[];
    tags: string[];
    all: Cta;
    items: { href: string; num: string; name: string; text: string; tags: string[] }[];
  };
  /** Gold "No contract. No pressure." band. */
  band: { title: string; text: string; cta: Cta };
  testimonials: Head & {
    lead: string;
    items: { quote: string; author: string; featured?: boolean }[];
  };
  magazine: Head & {
    lead: string;
    all: Cta;
    /** Title, category and date come from the article itself (src/content/magazine/). */
    items: {
      href: string;
      image: string;
      excerpt: string;
      featured?: boolean;
    }[];
  };
  cta: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    /** First = gold button, second = outline button. */
    buttons: [Cta, Cta];
    /** html: address · hours · phone link */
    info: string;
  };
}
