import type { Cta, Meta } from "@/i18n/shared-types";

/** A section heading plus one short sentence under it. The title matches the section's nav label. */
interface Head {
  title: string;
  lead: string;
}

/**
 * Homepage text. The site is a single page for now: only facts confirmed by Grand Fitness
 * (prices, sauna, coaches, hours, address, contact). The full demo site lives on the
 * `full-site` branch until its details are verified.
 */
export interface Copy {
  meta: Meta;
  /** schema.org structured data (HealthClub). */
  jsonLd: Record<string, unknown>;
  hero: {
    /** html */
    title: string;
    lead: string;
    primary: Cta;
    secondary: Cta;
  };
  prices: Head & {
    /** Shown after every amount ("₾"). */
    currency: string;
    /** Regular memberships, shortest first. `amount` is a plain number ("140"). */
    plans: { name: string; amount: string }[];
    /** The solid gold "Sauna included" block. */
    sauna: { title: string; text: string };
    offersTitle: string;
    /** Discounted monthly offers. `was` is the regular price they replace. */
    offers: { name: string; amount: string; was: string; text: string }[];
    /** One-time access item bought with the first membership (not with a single visit). */
    accessItem: { title: string; text: string; options: { price: string; label: string }[] };
    note: string;
  };
  coaches: Head & {
    /** `image` is a path in src/assets/img; a missing photo shows a dark placeholder. */
    items: { image: string; name: string; alt: string }[];
  };
  /** Photo mosaic: the first photo is shown large. */
  space: Head & {
    photos: { src: string; caption: string; alt: string }[];
  };
  contact: Head & {
    /** Address, hours, phone, email; `link` adds a small gold link under the value. */
    items: { tag: string; value: string; href?: string; note?: string; link?: Cta }[];
    socialsTitle: string;
    socials: { label: string; href: string }[];
    image: { src: string; alt: string };
  };
}
