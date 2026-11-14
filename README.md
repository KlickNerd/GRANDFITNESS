# Grand Fitness — grandfitness.ge

Website of Grand Fitness, a gym in Batumi. Astro (static) + Tailwind CSS v4, hosted on Cloudflare Workers.
Georgian at `/`, English at `/en/`, Russian at `/ru/`. Rules for editing: [`CLAUDE.md`](CLAUDE.md).

## Current state

One page (prices, coaches, the gym, FAQ, contact) plus privacy, imprint and 404, with only facts confirmed
by Grand Fitness. The full demo site is kept on the `full-site` branch (tag `v1-full-demo`) until its
details are verified; its old URLs redirect (302) to the homepage (`public/_redirects`).

## Commands

Node ≥ 22.18 (or `nix develop`).

```sh
npm install
npm run dev           # http://localhost:4321
npm run check         # type check
npm run translations  # compare Georgian and Russian with English
npm run build         # static site in dist/
```

## Deployment

Every push to `main` runs check, translations and build in GitHub Actions, then deploys with
`npx wrangler deploy`. A failing check never goes live. Needs the repository secrets
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` (`gh secret set <NAME>`).
www.grandfitness.ge redirects to grandfitness.ge (Cloudflare Redirect Rule).
