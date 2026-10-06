# Page text, one file per language

Every static page keeps its text here, separate from its layout in `src/pages/[...locale]/`.

```
src/i18n/pages/pricing/
  en.ts     ← English, the reference. Defines the shape (`Copy` type).
  ka.ts     ← Georgian. `satisfies Copy`, so a missing or extra field is a build error.
  index.ts  ← lists the languages that exist: export const copies = { en, ka };
```

## Add a translation (e.g. Russian pricing)

1. Copy `en.ts` to `ru.ts`, change the first line to `import type { Copy } from "./en";`
   and end the object with `satisfies Copy`.
2. Translate the strings. Keep the inline HTML tags (`<br>`, `<span class="text-gold">`) as they are.
3. Add it to `index.ts`: `export const copies = { en, ka, ru };`

That's all: `/ru/pricing/` is built, hreflang tags appear on all language versions,
and the language switcher links to it. A language only shows up in the switcher once its
homepage (`src/i18n/pages/home/<locale>.ts`) exists.

Coach profiles, class pages, goal pages and articles work the same way with Markdown:
copy `src/content/<collection>/en/<slug>.md` to `src/content/<collection>/<locale>/<slug>.md`
and translate the text values and the body.

## Rules for translated text

- Keep image paths, `href` fields, slugs, numbers and prices exactly as in English.
- Links written *inside* text (`href="/…"` in HTML strings, `[text](/…)` in Markdown) point to
  the translated page: `/contact/` becomes `/ka/contact/` or `/ru/contact/`.
- Never write "(EN)" into a label: it's added automatically when a link target isn't translated.

## Check a translation

    nix develop -c node scripts/check-translations.mjs ru            # everything in Russian
    nix develop -c node scripts/check-translations.mjs ka coaches    # Georgian coach files only

It compares every translation with its English source: missing files, different structure,
changed images/prices/links, and text that still looks English.

Strings marked `// html` in `en.ts` are rendered with `set:html` and may contain inline tags.
