import type { Cta, Faq, Meta } from "@/i18n/shared-types";

/** One numbered class row on the classes index (original .class-block). */
export interface ClassRow {
  /** Anchor id, e.g. "boxing" (the hero pills link to #boxing). */
  id: string;
  num: string;
  category: string;
  title: string;
  text: string;
  pills: string[];
  /** Link to the class deep-dive page, unprefixed ("/classes/boxing/"). */
  link: { label: string; href: string };
  coachLabel: string;
  /** Without href the coach name is plain text (e.g. "Coaching Team"). */
  coach: { name: string; href?: string };
  /** Photo path, e.g. "classes/boxing.jpg". */
  image: string;
}

/** Classes index page text. Every language has every section (a missing one fails `npm run check`). */
export interface Copy {
  meta: Meta;
  hero: {
    image: string;
    eyebrow: string;
    /** html */
    title: string;
    lead?: string;
    /** Category pills under the title, linking to the class rows (#boxing …). */
    pills: { label: string; href: string }[];
  };
  classes: ClassRow[];
  /** Weekly timetable (original .schedule grid). */
  schedule: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    days: { day: string; slots: { time: string; name: string; who: string }[] }[];
    note: string;
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
