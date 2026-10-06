/**
 * Languages of the site.
 *
 * English lives at the root (/pricing/), every other language under its prefix
 * (/ka/pricing/, /ru/pricing/). A page only exists in a language when that
 * language has a copy file for it — see src/i18n/pages/README.md.
 */
export const locales = ["en", "ka", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { name: string; ogLocale: string }> = {
  en: { name: "English", ogLocale: "en_US" },
  ka: { name: "ქართული", ogLocale: "ka_GE" },
  ru: { name: "Русский", ogLocale: "ru_RU" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** "/pricing/" + "ka" → "/ka/pricing/"; English stays unprefixed. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean === "/" ? "/" : clean}`;
}

/** Route param for src/pages/[...locale]/ — undefined means English (no prefix). */
export function localeParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

/** Reads the locale back from the [...locale] route param. */
export function localeFromParam(param: string | undefined): Locale {
  return isLocale(param) ? param : defaultLocale;
}
