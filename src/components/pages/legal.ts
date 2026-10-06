import type { Meta } from "@/i18n/shared-types";

/** Text of a legal page (privacy policy, imprint), rendered by LegalPage.astro. */
export interface LegalCopy {
  meta: Meta;
  hero: { eyebrow: string; /** html */ title: string; lead: string };
  /** "Last updated: …" line above the first section. */
  updated?: string;
  sections: {
    title: string;
    /** html: paragraphs, <h3> sub-headings, lists */
    body: string;
  }[];
}
