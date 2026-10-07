import { localeParam, locales, type Locale } from "./config";

/**
 * getStaticPaths for a page that lives in src/pages/[...locale]/…
 * Builds one URL per language that has a copy file, e.g. { ka, en } → /pricing/ and /en/pricing/.
 */
export function staticPathsFor<T>(copies: Partial<Record<Locale, T>>) {
  return locales
    .filter((locale) => copies[locale] !== undefined)
    .map((locale) => ({
      params: { locale: localeParam(locale) },
      props: { locale, copy: copies[locale] as T },
    }));
}
