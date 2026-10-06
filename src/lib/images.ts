import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/img/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

/**
 * Looks up a photo in src/assets/img by its path, e.g. img("space/sauna.jpg").
 * A leading "/img/" (the old public URL) is accepted too. Unknown paths fail the
 * build instead of shipping a broken image.
 */
export function img(path: string): ImageMetadata {
  const key = `/src/assets/img/${path.replace(/^\/?(img\/)?/, "")}`;
  const found = images[key];
  if (!found) {
    throw new Error(`Image not found: "${path}" (looked for ${key}). Add it to src/assets/img/.`);
  }
  return found.default;
}

/** Like img(), but returns undefined for photos that are not uploaded yet (e.g. a new coach). */
export function optionalImg(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  return images[`/src/assets/img/${path.replace(/^\/?(img\/)?/, "")}`]?.default;
}
