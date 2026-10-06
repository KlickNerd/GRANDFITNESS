import type { Cta, Faq, Meta } from "@/i18n/shared-types";

/** Pricing page text. Every language has every section (a missing one fails `npm run check`). */
export interface Copy {
  meta: Meta;
  hero: { image: string; eyebrow: string; /** html */ title: string; lead: string };
  /** Gold monthly-membership strip under the hero. */
  banner: { title: string; details: string; amount: string; cta: Cta };
  plansHead: { eyebrow: string; /** html */ title: string };
  plans: {
    code: string;
    name: string;
    amount: string;
    currency: string;
    /** html */
    perDay: string;
    features?: string[];
    /** Gold corner label, e.g. "Most Popular". */
    badge?: string;
    featured?: boolean;
    cta: Cta;
  }[];
  accessItem: {
    tag: string;
    title: string;
    /** html */
    text: string;
    options: { price: string; label: string }[];
  };
  note: string;
  includes: {
    eyebrow: string;
    /** html */
    title: string;
    items: { image: string; title: string; text: string }[];
  };
  faq: Faq;
  cta: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    buttons: Cta[];
  };
}
