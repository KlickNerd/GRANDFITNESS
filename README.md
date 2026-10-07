# Grand Fitness — grandfitness.ge

Website for Grand Fitness, Batumi. Black & gold design, Bebas Neue + DM Sans (+ Noto Sans Georgian, Oswald and Manrope for Cyrillic).

Built with [Astro](https://astro.build) (static output), [Tailwind CSS v4](https://tailwindcss.com) and
[Starwind UI](https://starwind.dev), hosted on Cloudflare Workers. No UI framework, almost no JavaScript:
menus, dialogs and FAQs use native HTML (`popover`, `<dialog>`, `<details>`).

## Languages

| Language | URL | Status |
|---|---|---|
| Georgian (default) | `/` | all pages |
| English | `/en/` | all pages (the source every translation is checked against) |
| Russian | `/ru/` | all pages |

Translations are checked against English with `npm run translations` (`scripts/check-translations.mjs`).
Each page's text lives in one file per language (`src/i18n/pages/<page>/<locale>.ts`), separate from the
layout. Adding a translation is described in [`src/i18n/pages/README.md`](src/i18n/pages/README.md).
hreflang tags, the sitemap and the language switcher update themselves.

## Editing

Changes are made through Claude: describe the change, Claude edits the files and pushes.
The rules Claude follows are in [`CLAUDE.md`](CLAUDE.md).

## Local development

With Nix: `nix develop` opens a shell with Node 22. Without Nix: install Node ≥ 22.18.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run check     # type check (missing translation fields fail here)
npm run translations  # compare every translation with English
npm run preview   # serve dist/ locally the way Cloudflare does (wrangler dev)
```

## Deployment

The site runs on Cloudflare Workers (static assets only, see `wrangler.jsonc`) at grandfitness.ge.

- **Automatic:** Cloudflare Workers Builds is connected to this GitHub repo. Every push to `main` builds
  and deploys the site (build command `npm run build`, deploy command `npx wrangler deploy`); other
  branches get a preview URL. Node version: `.node-version`.
- **Checks:** GitHub Actions (`.github/workflows/check.yml`) runs `check`, `translations` and `build`
  on every pull request and push, so a broken change shows a red ✗ before it's merged.
- **By hand:** `npx wrangler login` once, then `npm run deploy`.

Workflow: make changes on a branch, open a pull request, merge it when the check is green. Merging
to `main` publishes the site within a few minutes.

Paths keep the old site's form (`/about/`, `/coaches/mariam/`, …). Georgian is the default language at
the root; English lives under `/en/`. Old `/ka/…` links redirect permanently to the root (`public/_redirects`).
