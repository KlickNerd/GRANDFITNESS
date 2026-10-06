# Grand Fitness — grandfitness.ge

Website for Grand Fitness, Batumi. Black & gold design, Bebas Neue + DM Sans (+ Noto Sans Georgian).

Built with [Astro](https://astro.build) (static output), [Tailwind CSS v4](https://tailwindcss.com) and
[Starwind UI](https://starwind.dev), hosted on Cloudflare Workers. No UI framework, almost no JavaScript:
menus, dialogs and FAQs use native HTML (`popover`, `<dialog>`, `<details>`).

## Languages

| Language | URL | Status |
|---|---|---|
| English | `/` | all pages |
| Georgian | `/ka/` | all pages |
| Russian | `/ru/` | all pages |

Translations are checked against English with `node scripts/check-translations.mjs`.
Each page's text lives in one file per language (`src/i18n/pages/<page>/<locale>.ts`), separate from the
layout. Adding a translation is described in [`src/i18n/pages/README.md`](src/i18n/pages/README.md).
hreflang tags, the sitemap and the language switcher update themselves.

## Editing

Changes are made through Claude: describe the change, Claude edits the files and pushes.
The rules Claude follows are in [`CLAUDE.md`](CLAUDE.md).

## Local development

With Nix: `nix develop` opens a shell with Node 22. Without Nix: install Node ≥ 22.12.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run check     # type check (missing translation fields fail here)
```

## Deployment

`npm run deploy` builds the site and uploads `dist/` to Cloudflare Workers (static assets, see
`wrangler.jsonc`). Connect the GitHub repo in the Cloudflare dashboard (Workers → Import a repository,
build command `npm run build`, deploy command `npx wrangler deploy`) to deploy on every push to `main`.

URLs are identical to the old site (`/about/`, `/coaches/mariam/`, `/ka/pricing/`, …).
