import type { Cta, Meta } from "@/i18n/shared-types";

/** One teaser card in the coach grid (src/components/coaches/CoachCard.astro). */
export interface CoachCard {
  /** Unprefixed link, e.g. "/coaches/mariam/". */
  href: string;
  /** Photo path, e.g. "coaches/mariam.jpg". Missing photos show the dark placeholder. */
  image?: string;
  alt?: string;
  /** Large gold character shown instead of a photo (the "find my coach" card). */
  symbol?: string;
  tag: string;
  name: string;
  role?: string;
  text: string;
  /** e.g. "Full Profile →" */
  linkLabel: string;
}

/** Coaches index page text. Optional sections only render in languages that have them. */
export interface Copy {
  meta: Meta;
  hero: { image: string; eyebrow: string; /** html */ title: string; lead: string };
  /** Head coach spotlight under the hero. */
  headCoach?: {
    image: string;
    alt: string;
    eyebrow: string;
    name: string;
    role: string;
    quote: string;
    lead: string;
    stats: { num: string; label: string }[];
    link: Cta;
  };
  /** Heading and quote above the coach grid. */
  team?: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    quote: { text: string; who: string };
  };
  coaches: CoachCard[];
  /** Small print under the grid. */
  note?: string;
  cta: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    /** Narrower lead paragraph (560px instead of 640px), as on the original Georgian page. */
    narrowLead?: boolean;
    buttons: Cta[];
  };
}
