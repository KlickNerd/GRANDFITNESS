import { getCollection } from "astro:content";
import { sourceLocale, type Locale } from "@/i18n/config";
import { pageExists } from "@/i18n/routes";

/**
 * Teaser grids (homepage, index pages) keep their own wording per page and language,
 * but the collections decide *which* entries exist: a card whose coach / class / goal /
 * article was removed from src/content/ disappears everywhere automatically.
 */
export function existing<T>(items: T[], href: (item: T) => string = (item) => (item as { href: string }).href): T[] {
  return items.filter((item) => {
    const target = href(item);
    return !/^\/(coaches|classes|goals|magazine)\/[^/]+\/$/.test(target) || pageExists(target, sourceLocale);
  });
}

const coaches = await getCollection("coaches");

/** A coach's photo, set once in their profile (src/content/coaches/en/<slug>.md → photo). */
export function coachPhoto(href: string): string | undefined {
  const slug = href.match(/^\/coaches\/([^/]+)\/$/)?.[1];
  return coaches.find((entry) => entry.id === `en/${slug}`)?.data.photo;
}

const articles = await getCollection("magazine");

/** An article's title, category and date in `locale` (src/content/magazine/<locale>/<slug>.md). */
export function articleHead(href: string, locale: Locale) {
  const slug = href.match(/^\/magazine\/([^/]+)\/$/)?.[1];
  const entry = articles.find((a) => a.id === `${locale}/${slug}`) ?? articles.find((a) => a.id === `en/${slug}`);
  const { title, category, date } = entry!.data;
  return { title, category, date };
}
