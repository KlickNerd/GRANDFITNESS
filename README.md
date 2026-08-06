# Grand Fitness — grandfitness.ge

Static website for Grand Fitness, Batumi. Black & gold design system, Bebas Neue + DM Sans.

## Structure
- Every page lives at `<path>/index.html` so URLs match the old WordPress site exactly (`/about/`, `/coaches/mariam/`, …)
- Shared styles: `css/style.css` · Shared behaviour: `js/main.js` · Photos: `img/` (see `img/README.md`)

## Editing
All changes are made through Claude: describe the change, Claude edits the files and pushes to `main`. The host (Cloudflare Pages / GitHub Pages) deploys automatically on every push.

## Local preview
Open any `index.html` in a browser, or run `python3 -m http.server` in the repo root and visit http://localhost:8000.
