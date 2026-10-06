# Grand Fitness website — rules for Claude

Static marketing site for Grand Fitness, Batumi. Astro + Tailwind CSS v4 + Starwind UI,
deployed to Cloudflare Workers (static assets). English at `/`, Georgian at `/ka/`, Russian at `/ru/`.

## Commands

Run everything inside the Nix dev shell (Node 22): `nix develop -c <command>`.
Without Nix, use Node ≥ 22.12 directly.

- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — must pass before every commit
- `npm run check` — type check (catches missing translation fields)
- `npm run deploy` — build and upload to Cloudflare

## Hard rules

1. **No React, Vue, Svelte or any UI framework.** Only `.astro` components. Do not copy shadcn/ui
   examples: they are React and silently break here.
2. **Interactivity uses native HTML first:** `popover` for menus, `<dialog>` for modals and the
   consent banner, `<details name="…">` for FAQs/accordions. Small `<script>` blocks are fine.
   No `<ClientRouter />` — page transitions are native CSS (`@view-transition` in global.css).
3. **Styling is Tailwind utilities only.** No `style=""` attributes, no `<style>` blocks, no new
   CSS files. Brand tokens live in `src/styles/global.css`:
   `bg-black` `bg-dark` `bg-card` `bg-card-hover` `border-line` `text-gold` `bg-gold-soft`
   `text-white` `text-muted-foreground` `text-body` `font-display` (Bebas Neue) `font-sans` (DM Sans).
   Use `wrap` for the 1200px container. Breakpoints: `md` = 761px, `lg` = 1001px, `xl` = 1201px.
4. **Dark only.** There is no light theme; never add `dark:` variants or a theme toggle.
5. **Never hardcode text in page templates.** All visible text lives in
   `src/i18n/pages/<page>/<locale>.ts` (static pages), `src/content/<collection>/<locale>/*.md`
   (coaches, classes, goals, magazine) or `src/i18n/ui/<locale>.ts` (nav, footer, consent).
6. **Links are written unprefixed** (`/contact/`). Render them through `localizeHref(href, locale)`
   or `<CtaButton>`: they become `/ka/contact/` on Georgian pages when that page exists.
7. **Photos** live in `src/assets/img/` and are referenced by path (`"space/sauna.jpg"`) through
   `img()` / `optionalImg()` from `@/lib/images`, `<Photo>` or `<Image>`. Never use `/img/...`
   URLs or CSS background images.
8. Georgian has no capital letters: `uppercase` is switched off on `/ka/` pages automatically. Keep it that way.
9. **Fonts are self-hosted** through `fonts` in `astro.config.mjs` (no Google Fonts `<link>`s, ever).
   The stacks in `global.css` list Bebas Neue / DM Sans first, then Oswald / Manrope (Cyrillic) and
   Noto Sans Georgian, so Latin text looks identical in every language and only Georgian or Russian
   letters use the fallback fonts. Never name a font directly (`font-family="DM Sans"`, `font-['Bebas_Neue']`):
   self-hosted fonts get generated names, so that silently falls back to a system font. Use the
   `font-display` / `font-sans` / `font-brand` classes, also on SVG `<text>` elements.
10. **Never write "(EN)" into a link label.** Links to pages that aren't translated get " (EN)"
    automatically (`untranslatedLabel` in `src/i18n/routes.ts`), and lose it once the page is translated.

## Where things are

```
src/pages/[...locale]/…        page templates (one file serves every language)
src/i18n/pages/<page>/         page text: types.ts (shape), en.ts, ka.ts, index.ts (languages)
src/i18n/ui/                   nav, footer, consent text per language
src/content/<collection>/      coaches, classes, goals, magazine — Markdown per language
src/collections/               collection schemas
src/components/site/           Nav, Footer, Consent (used by BaseLayout)
src/components/ui/             shared blocks: Section, SectionHead, PageHero, Card, CtaButton,
                               CtaSection, Faq, Photo, Stats, QuoteCard, Pill, Tag, …
src/components/<section>/      blocks used by one section: home, coaches, classes, goals, magazine, pages
src/components/starwind/       Starwind UI components (copied into the repo, ours to edit)
src/layouts/BaseLayout.astro   <head>, SEO, hreflang, skip link, <main>, nav, footer
```

## Common tasks

- **Change a price or text:** edit the matching `src/i18n/pages/<page>/<locale>.ts`. Change every
  language that has the page (`index.ts` lists them).
- **Translate a page:** see `src/i18n/pages/README.md`. Every page exists in en, ka and ru: when you
  change text in one language, change the other two as well, then run
  `nix develop -c node scripts/check-translations.mjs`.
- **Add a coach / class / article:** add a Markdown file to `src/content/<collection>/en/`, copying
  an existing one's frontmatter, then add its teaser card to the homepage / index copy files.
- **Remove a coach / class / goal / article:** delete its Markdown file. Teaser cards pointing to it
  disappear from the homepage and index pages automatically (`existing()` in `src/collections/teasers.ts`).
- **Coach photos** are set once, in the profile (`photo:` in `src/content/coaches/en/<slug>.md`);
  teaser cards use it. A coach without a photo shows a dark placeholder.
- **Scroll fade-in:** add the `data-reveal` attribute to an element.
- Strings that may contain inline HTML (`<br>`, `<span class="text-gold">`) are marked `html` in
  the page's `types.ts` and rendered with `set:html`.

## Deploying

Cloudflare Workers serves `./dist` (see `wrangler.jsonc`). Unknown URLs get the nearest `404.html`.
