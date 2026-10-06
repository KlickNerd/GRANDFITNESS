import { locales, localizePath, type Locale } from "@/i18n/config";
import { isLiveLocale, pageExists } from "@/i18n/routes";
import { switchToLabel } from "@/i18n/ui";

/**
 * Links to the other live languages: the same page when it is translated,
 * otherwise that language's homepage (the original site's behaviour).
 */
export function languageLinks(current: Locale, path: string) {
  return locales
    .filter((l) => l !== current && isLiveLocale(l))
    .map((l) => ({
      locale: l,
      href: localizePath(pageExists(path, l) ? path : "/", l),
      label: switchToLabel(l),
    }));
}
