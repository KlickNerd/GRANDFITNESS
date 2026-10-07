import { defaultLocale, locales, localizePath, sourceLocale, type Locale } from "./config";

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
 * the translated page when it exists, otherwise the English (source) page.
 * External links, anchors, mailto: and tel: pass through untouched.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [pathname] = href.split(/[?#]/);
  const suffix = href.slice(pathname.length);
  if (pageExists(pathname, locale)) return localizePath(pathname, locale) + suffix;
  if (pageExists(pathname, sourceLocale)) return localizePath(pathname, sourceLocale) + suffix;
  return href; // not a page (a file in public/)
}

/**
 * Marks a link label with " (EN)" when its target isn't translated into `locale`,
 * e.g. "პროფილი →" → "პროფილი (EN) →". The marker disappears by itself once the page is translated.
 */
export function untranslatedLabel(label: string, href: string, locale: Locale): string {
  if (locale === sourceLocale || !href.startsWith("/") || pageExists(href, locale)) return label;
  const [, text, arrow = ""] = label.match(/^(.*?)(\s*[→↓]\s*)?$/)!;
  return `${text} (EN)${arrow}`;
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
