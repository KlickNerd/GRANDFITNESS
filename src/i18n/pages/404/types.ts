import type { Cta, Meta } from "@/i18n/shared-types";

/** "Page not found" text (src/pages/404.astro, en/404.astro, ru/404.astro). */
export interface Copy {
  meta: Meta;
  eyebrow: string;
  /** html */
  title: string;
  lead: string;
  buttons: Cta[];
}
