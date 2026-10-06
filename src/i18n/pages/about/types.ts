import type { Cta, Meta } from "@/i18n/shared-types";

/** About page text. Optional sections only render in languages that have them. */
export interface Copy {
  meta: Meta;
  hero: {
    /** Background photo, e.g. "space/floor-corridor.jpg". No photo = plain dark hero. */
    image?: string;
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
  };
  /** Show the stats bar above the story section instead of below it. */
  statsFirst?: boolean;
  story: {
    eyebrow: string;
    /** html */
    title: string;
    /** html */
    paragraphs: string[];
    link?: Cta;
    image: string;
    imageAlt: string;
  };
  stats: { num: string; label: string; sub?: string }[];
  space: {
    eyebrow: string;
    /** html */
    title: string;
    photos: { image: string; alt: string }[];
    areas: { image: string; tag: string; title: string }[];
  };
  values?: {
    eyebrow: string;
    /** html */
    title: string;
    items: { title: string; text: string }[];
  };
  team: {
    eyebrow: string;
    /** html */
    title: string;
    link: Cta;
    image: string;
    imageAlt: string;
  };
  cta: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    buttons: Cta[];
  };
}
