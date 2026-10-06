import type { Locale } from "../config";
import en, { type UiStrings } from "./en";
import ka from "./ka";
import ru from "./ru";

const strings: Record<Locale, Partial<UiStrings>> = { en, ka, ru };

/** Interface text for a language, falling back to English key by key. */
export function useUi(locale: Locale): UiStrings {
  return { ...en, ...strings[locale] };
}

export function switchToLabel(locale: Locale): string {
  return useUi(locale).switchTo;
}
