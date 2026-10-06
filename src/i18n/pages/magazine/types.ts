import type { Cta, Meta } from "@/i18n/shared-types";

interface CtaBlock {
  eyebrow: string;
  /** html */
  title: string;
  lead: string;
  buttons: Cta[];
}

/**
 * Magazine text: the index page (/magazine/) and the frame around every article
 * (/magazine/<slug>/). The articles themselves live in src/content/magazine/.
 */
export interface Copy {
  meta: Meta;
  hero: { image: string; eyebrow: string; /** html */ title: string; lead: string };
  /** Link label on every article card. */
  readMore: string;
  /** html — note under the article grid. */
  note: string;
  cta: CtaBlock;

  /** Shared by all article pages. */
  article: {
    /** Appended to the article title for <title>. */
    titleSuffix: string;
    /** Back link under the article. */
    allArticles: string;
    keepReading: { eyebrow: string; /** html */ title: string };
    cta: CtaBlock;
    /** JSON-LD (schema.org Article) author and publisher. */
    jsonLd: { author: string; publisher: string; publisherUrl: string };
  };
}
