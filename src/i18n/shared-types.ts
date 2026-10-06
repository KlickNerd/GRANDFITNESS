/** Building blocks shared by the page copy types (src/i18n/pages/<page>/types.ts). */

export interface Meta {
  /** <title> and og:title */
  title: string;
  /** meta description and og:description */
  description: string;
}

/** A link styled as a button. `href` is unprefixed ("/contact/"); the language prefix is added automatically. */
export interface Cta {
  label: string;
  href: string;
  /** "solid" = filled gold (default), "outline" = gold border. */
  style?: "solid" | "outline";
}

export interface Faq {
  eyebrow: string;
  /** html */
  title: string;
  /** Answers may contain inline HTML. */
  items: { q: string; a: string }[];
}
