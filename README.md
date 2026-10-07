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

- **Automatic:** GitHub Actions (`.github/workflows/check.yml`) runs `check`, `translations` and `build`
  on every pull request and push. On `main` it then deploys with `npx wrangler deploy`, so a broken
  change never goes live. Node version: `.node-version`.
- **Secrets** (repo Settings → Secrets and variables → Actions, or `gh secret set <NAME>`):
  `CLOUDFLARE_API_TOKEN` (Cloudflare API token, template "Edit Cloudflare Workers", plus Zone → DNS →
  Edit for grandfitness.ge so the custom domain can be attached) and `CLOUDFLARE_ACCOUNT_ID`.
  Without them the deploy step is skipped.
- **www:** a Cloudflare Redirect Rule ("Redirect from WWW to root") sends www.grandfitness.ge to grandfitness.ge.
- **Redeploy by hand:** Actions tab → "Check and deploy" → Run workflow, or locally `npx wrangler login`
  once, then `npm run deploy`.

Workflow: make changes on a branch, open a pull request, merge it when the check is green. Merging
to `main` publishes the site within a few minutes.

Paths keep the old site's form (`/about/`, `/coaches/mariam/`, …). Georgian is the default language at
the root; English lives under `/en/`. Old `/ka/…` links redirect permanently to the root (`public/_redirects`).
