import type { Cta, Meta } from "@/i18n/shared-types";

/** A section heading: one word, the same as the section's nav link, followed on the page by a gold rule. */
interface Head {
  title: string;
}

/**
 * Homepage text. The site is a single page for now: only facts confirmed by Grand Fitness
 * (prices, sauna, coaches, hours, address, contact). The full demo site lives on the
 * `full-site` branch until its details are verified.
 */
export interface Copy {
  meta: Meta;
  hero: {
    /** The page's <h1>: what and where, in the words people search with ("Gym and sauna in Batumi"). */
    heading: string;
    /** html (line breaks only): the big slogan under the heading. */
    slogan: string;
  };
  /** The strip under the hero: hours, address, cheapest way in, phone. A fact with `href` is one big link. */
  facts: {
    /** The first item is the opening hours: its note is replaced by `status` when the page knows the time. */
    items: { tag: string; value: string; note: string; href?: string }[];
    /** Shown instead of the hours note, by Batumi time (open 08:00–24:00 every day). */
    status: { open: string; closed: string };
  };
  prices: Head & {
    /** Shown after every amount ("₾"). */
    currency: string;
    /** Regular memberships, shortest first. `amount` is a plain number ("140"); `note` is the price per month of longer plans. */
    plans: { name: string; amount: string; note?: string }[];
    /** The solid gold "Sauna included" cell that closes the price board. */
    sauna: { title: string; text: string };
    offersTitle: string;
    /** Discounted monthly offers. `was` is the regular price they replace. */
    offers: { name: string; amount: string; was: string; text: string }[];
    /** One-time access item bought with the first membership (not with a single visit). */
    accessItem: { title: string; text: string; options: { price: string; label: string }[] };
  };
  coaches: Head & {
    /** `image` is a path in src/assets/img; a missing photo shows a dark placeholder. */
    items: { image: string; name: string; alt: string }[];
  };
  /** Gym photos: a swipe gallery on phones and tablets, a mosaic on desktop (first two large, then four). */
  space: Head & {
    /** Label of the button that closes an enlarged photo. */
    close: string;
    /** `caption` names only the rooms that need it (sauna, cardio zone, locker rooms); `alt` describes every photo. */
    photos: { src: string; caption?: string; alt: string }[];
  };
  /** Questions people search for; also published as FAQPage structured data. */
  faq: Head & {
    items: { q: string; a: string }[];
  };
  contact: Head & {
    /** Address, hours, phone, email; `link` adds a small gold link under the value. */
    items: { tag: string; value: string; href?: string; note?: string; link?: Cta }[];
    socialsTitle: string;
    socials: { label: string; href: string }[];
    image: { src: string; alt: string };
  };
}
