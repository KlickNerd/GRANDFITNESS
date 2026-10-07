# Page text, one file per language

Every static page keeps its text here, separate from its layout in `src/pages/[...locale]/`.

```
src/i18n/pages/pricing/
  types.ts  ← the shape of the page text (`Copy` type). Strings marked /** html */ may contain inline tags.
  en.ts     ← English, the reference.
  ka.ts     ← Georgian.
  ru.ts     ← Russian.
  index.ts  ← lists the languages: export const copies = { en, ka, ru };
```

Each language file starts with `import type { Copy } from "./types";` and ends the object with
`} satisfies Copy;`, so a missing or extra field fails `npm run check`. Every section is required:
all three languages show the same sections in the same order.

## Change text

Change the same text in **all three languages** (`en.ts`, `ka.ts`, `ru.ts`). Keep the inline HTML
tags (`<br>`, `<span class="text-gold">`) around the equivalent words.

Coach profiles, class pages, goal pages and articles work the same way with Markdown:
`src/content/<collection>/<locale>/<slug>.md`, one file per language with the same frontmatter keys.

## Add a new page or language

- New collection entry (coach, class, goal, article): add `en/<slug>.md`, then `ka/<slug>.md` and
  `ru/<slug>.md` with the same keys, translated.
- New language: add `<locale>.ts` next to every `en.ts`, list it in each `index.ts`, add
  `src/i18n/ui/<locale>.ts` and the locale in `src/i18n/config.ts` / `astro.config.mjs`.
  A language only shows up in the switcher once its homepage (`home/<locale>.ts`) exists.

## Rules for translated text

- Keep image paths, `href` fields, slugs, numbers and prices exactly as in English.
- Links written *inside* text (`href="/…"` in HTML strings, `[text](/…)` in Markdown) are written
  with the language's own prefix: `/en/contact/` in English, `/contact/` in Georgian (the default,
  no prefix), `/ru/contact/` in Russian.
  Structured `href:` fields stay unprefixed; the site adds the language itself.
- Never write "(EN)" into a label: it's added automatically when a link target isn't translated.

## Check translations

    nix develop -c npm run translations                                # everything
    nix develop -c node scripts/check-translations.mjs ru              # everything in Russian
    nix develop -c node scripts/check-translations.mjs ka coaches      # Georgian coach files only

It compares every translation with its English source: missing files, different structure,
changed images/prices/links, and text that still looks English. Numbers in a translation that
English doesn't have are printed as warnings: check the fact ("Ten years" → "10 წელი" is fine).
