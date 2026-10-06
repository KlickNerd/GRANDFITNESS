import type { CollectionEntry, CollectionKey } from "astro:content";
import { localeParam, isLocale, type Locale } from "@/i18n/config";

/** Collection entry ids look like "en/rezo": split into language + slug. */
export function splitId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split("/");
  if (!isLocale(locale)) throw new Error(`Entry "${id}" must live in a language folder (en/, ka/, ru/).`);
  return { locale, slug: rest.join("/") };
}

/** getStaticPaths for src/pages/[...locale]/<collection>/[slug].astro */
export function entryPaths<C extends CollectionKey>(entries: CollectionEntry<C>[]) {
  return entries.map((entry) => {
    const { locale, slug } = splitId(entry.id);
    return { params: { locale: localeParam(locale), slug }, props: { entry, locale } };
  });
}

/** Entries of one language, e.g. for an index page. */
export function inLocale<C extends CollectionKey>(entries: CollectionEntry<C>[], locale: Locale) {
  return entries.filter((e) => splitId(e.id).locale === locale);
}
