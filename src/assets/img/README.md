# Photos

Photos here are optimized automatically at build time (WebP, several sizes), so upload the originals
(JPG, ~1600–2000px wide is plenty).

Pages refer to photos by their path inside this folder, e.g. `"space/sauna.jpg"` or `"coaches/rezo.jpg"`.
A typo fails the build with a clear message instead of shipping a broken image.

| Folder | Content |
|---|---|
| `coaches/<name>.jpg` | Coach portraits (~3:4). A coach without a photo shows a dark placeholder until the file exists. |
| `space/` | Facility photos |
| `classes/` | Class photos |
| `mag/` | Magazine article photos |

The social-sharing image (`og-cover.jpg`, 1200×630) lives in `public/img/`, because it needs a fixed URL.
Missing: `public/favicon.png` (browser tab icon). The old site referenced `/img/favicon.png`, which never existed.
