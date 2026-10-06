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
and the language switcher links to it. Russian only shows up in the switcher once
`src/i18n/pages/home/ru.ts` exists.

Strings marked `// html` in `en.ts` are rendered with `set:html` and may contain inline tags.
