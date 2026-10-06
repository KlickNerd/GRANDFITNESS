import { getCollection } from "astro:content";
import { pageExists } from "@/i18n/routes";

/**
 * Teaser grids (homepage, index pages) keep their own wording per page and language,
 * but the collections decide *which* entries exist: a card whose coach / class / goal /
 * article was removed from src/content/ disappears everywhere automatically.
 */
export function existing<T>(items: T[], href: (item: T) => string = (item) => (item as { href: string }).href): T[] {
  return items.filter((item) => {
    const target = href(item);
    return !/^\/(coaches|classes|goals|magazine)\/[^/]+\/$/.test(target) || pageExists(target, "en");
  });
}

const coaches = await getCollection("coaches");

/** A coach's photo, set once in their profile (src/content/coaches/en/<slug>.md → photo). */
export function coachPhoto(href: string): string | undefined {
  const slug = href.match(/^\/coaches\/([^/]+)\/$/)?.[1];
  return coaches.find((entry) => entry.id === `en/${slug}`)?.data.photo;
}
