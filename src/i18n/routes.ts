import { defaultLocale, locales, localizePath, type Locale } from "./config";

/**
 * Which page exists in which language — derived from the files, never hand-maintained.
 *
 *  - Static pages:      src/i18n/pages/<key>/<locale>.ts      → /<key>/      ("home" → "/")
 *  - Collection pages:  src/content/<collection>/<locale>/<slug>.md → /<collection>/<slug>/
 */
const pageCopyFiles = Object.keys(import.meta.glob("/src/i18n/pages/*/*.ts"));
const collectionFiles = Object.keys(
  import.meta.glob("/src/content/*/*/*.{md,mdx,yaml,yml,json}"),
);

const available = new Map<string, Set<Locale>>();

function register(path: string, locale: string) {
  if (!(locales as readonly string[]).includes(locale)) return;
  if (!available.has(path)) available.set(path, new Set());
  available.get(path)!.add(locale as Locale);
}

for (const file of pageCopyFiles) {
  const [, , , , key, name] = file.split("/"); // "", src, i18n, pages, key, en.ts
  const locale = name.replace(/\.ts$/, "");
  register(key === "home" ? "/" : `/${key.replaceAll("__", "/")}/`, locale);
}

for (const file of collectionFiles) {
  const [, , , collection, locale, name] = file.split("/"); // "", src, content, coll, en, slug.md
  register(`/${collection}/${name.replace(/\.[a-z]+$/, "")}/`, locale);
}

function normalize(path: string): string {
  const [pathname] = path.split(/[?#]/);
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/** Languages in which the page at `path` (unprefixed, e.g. "/pricing/") exists. */
export function localesFor(path: string): Locale[] {
  const set = available.get(normalize(path));
  return locales.filter((l) => set?.has(l));
}

export function pageExists(path: string, locale: Locale): boolean {
  return available.get(normalize(path))?.has(locale) ?? false;
}

/** A language is "live" once it has a homepage. Only live languages appear in the switcher. */
export function isLiveLocale(locale: Locale): boolean {
  return pageExists("/", locale);
}

/**
 * Turns an unprefixed internal link into the right one for `locale`:
 * the translated page when it exists, otherwise the English page.
 * External links, anchors, mailto: and tel: pass through untouched.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale || !href.startsWith("/") || href.startsWith("//")) return href;
  const suffix = href.slice(href.split(/[?#]/)[0].length);
  return pageExists(href, locale) ? localizePath(href.split(/[?#]/)[0], locale) + suffix : href;
}

/** Strips the language prefix: "/ka/pricing/" → "/pricing/". */
export function unlocalizePath(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
