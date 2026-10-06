import type { Cta, Meta } from "@/i18n/shared-types";

/** Goals index page (/goals/) text. */
export interface Copy {
  meta: Meta;
  hero: { image: string; eyebrow: string; /** html */ title: string; lead: string };
  /** One card per goal. `href` is unprefixed ("/goals/get-stronger/"). */
  goals: {
    href: string;
    image: string;
    alt: string;
    tag: string;
    title: string;
    text: string;
    linkLabel: string;
  }[];
  /** html: line under the grid ("Not sure which one fits? …"). */
  note: string;
  cta: {
    eyebrow: string;
    /** html */
    title: string;
    lead: string;
    buttons: Cta[];
  };
}
