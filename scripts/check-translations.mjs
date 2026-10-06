#!/usr/bin/env node
/**
 * Checks every translation against its English source.
 *
 *   node scripts/check-translations.mjs            # all languages
 *   node scripts/check-translations.mjs ru         # one language
 *   node scripts/check-translations.mjs ru coaches # one language, files whose path contains "coaches"
 *
 * For each English page text (src/i18n/pages/<page>/en.ts) and collection entry
 * (src/content/<collection>/en/<slug>.md) it reports, per language:
 *  - a missing translation file
 *  - a different shape (keys, list lengths) — skipped for page texts marked `// own layout`
 *  - changed image paths, numbers-only values, dates, slugs and structured `href` fields
 *  - inline links (href="…" in HTML, [text](…) in Markdown) not pointing to the same page
 *    in the translation's language (/ka/…, /ru/…)
 *  - text that still looks English
 * Exit code 1 if anything is wrong.
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parse as parseYaml } from "yaml";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const LOCALES = ["ka", "ru"];
const [onlyLocale, filter] = process.argv.slice(2);
const locales = onlyLocale ? [onlyLocale] : LOCALES;

// Words that legitimately stay in Latin script in every language.
const ALLOWED_LATIN = new Set(
  `grand fitness grandfitness better than yesterday crossfit wod amrap emom hiit gel batumi bagrationi
   instagram facebook google maps formsubmit cloudflare inc ltd napr https http www html tls
   info grandfitness.ge pdps.ge tyson ali rocky rpe pr prs bcaa kg km min max vs ok id llc
   mobility dm sans bebas neue noto`.split(/\s+/).filter(Boolean),
);

const problems = [];
const report = (file, msg) => problems.push(`${path.relative(ROOT, file)}: ${msg}`);

const isImage = (v) => typeof v === "string" && /\.(jpe?g|png|webp|avif|svg)$/i.test(v);
const isNumberish = (v) => typeof v === "string" && /^[\d\s.,:–—+%₾x×/-]+$/.test(v) && /\d/.test(v);
const isIsoDate = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v);
const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);
// Values that must stay identical: links, media, ids, schema.org types.
const STRUCTURED_KEYS = new Set(["@type", "href", "image", "photo", "src", "slug", "id", "datePublished", "related", "style", "featured", "order", "symbol"]);

function inlineLinks(text) {
  const links = [];
  for (const m of text.matchAll(/href=["']([^"']+)["']/g)) links.push(m[1]);
  for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) links.push(m[1]);
  return links;
}

function expectedInline(enHref, locale) {
  if (!enHref.startsWith("/") || enHref.startsWith("//")) return enHref;
  return `/${locale}${enHref}`;
}

function englishLeftovers(text) {
  const plain = text
    .replace(/<[^>]+>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/&[a-z]+;/g, " ");
  const words = plain.match(/[A-Za-z][A-Za-z'’-]{2,}/g) ?? [];
  const allowed = (w) => ALLOWED_LATIN.has(w.toLowerCase().replace(/['’]s$/, ""));
  // A brand split by a line break ("Cross<br>Fit") counts as the joined word.
  return words.filter((w, i) => !allowed(w) && !allowed(w + (words[i + 1] ?? "")) && !allowed((words[i - 1] ?? "") + w));
}

function compare(file, en, tr, locale, keyPath, opts) {
  const where = keyPath.join(".") || "(root)";
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return report(file, `${where}: expected a list`);
    if (!opts.ownLayout && en.length !== tr.length) report(file, `${where}: ${tr.length} items, English has ${en.length}`);
    en.forEach((v, i) => tr[i] !== undefined && compare(file, v, tr[i], locale, [...keyPath, i], opts));
    return;
  }
  if (en && typeof en === "object") {
    if (!tr || typeof tr !== "object") return report(file, `${where}: expected an object`);
    if (!opts.ownLayout) {
      for (const k of Object.keys(en)) if (!(k in tr)) report(file, `${where}: missing "${k}"`);
      for (const k of Object.keys(tr)) if (!(k in en)) report(file, `${where}: extra "${k}"`);
    }
    for (const k of Object.keys(en)) if (k in tr) compare(file, en[k], tr[k], locale, [...keyPath, k], opts);
    return;
  }
  const key = keyPath.at(-1);
  if (typeof en !== typeof tr) return report(file, `${where}: type ${typeof tr}, English is ${typeof en}`);
  if (typeof en !== "string") {
    if (en !== tr && key !== "lang") report(file, `${where}: ${JSON.stringify(tr)} ≠ English ${JSON.stringify(en)}`);
    return;
  }
  if (STRUCTURED_KEYS.has(String(key)) || isImage(en) || isIsoDate(en) || isEmail(en)) {
    if (en !== tr) report(file, `${where}: "${tr}" must stay "${en}"`);
    return;
  }
  if (isNumberish(en) && en !== tr) report(file, `${where}: "${tr}" ≠ English "${en}" (numbers must match)`);
  const enLinks = inlineLinks(en);
  const trLinks = inlineLinks(tr);
  if (enLinks.length !== trLinks.length) report(file, `${where}: ${trLinks.length} links, English has ${enLinks.length}`);
  enLinks.forEach((h, i) => {
    const want = expectedInline(h, locale);
    if (trLinks[i] !== undefined && trLinks[i] !== want) report(file, `${where}: link "${trLinks[i]}" should be "${want}"`);
  });
  if (en.length > 12 && tr === en && englishLeftovers(en).length) report(file, `${where}: not translated`);
  else {
    const left = englishLeftovers(tr);
    if (left.length >= 3 && left.length / Math.max(1, tr.split(/\s+/).length) > 0.3)
      report(file, `${where}: looks English (${left.slice(0, 6).join(" ")})`);
  }
}

function splitMarkdown(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  return { data: parseYaml(m[1]) ?? {}, body: m[2] };
}

function bodyShape(body) {
  return {
    headings: (body.match(/^#{1,6} /gm) ?? []).length,
    listItems: (body.match(/^\s*([-*]|\d+\.) /gm) ?? []).length,
    htmlTags: (body.match(/<[a-z][^>]*>/gi) ?? []).length,
  };
}

async function checkCollections() {
  const contentDir = path.join(ROOT, "src/content");
  for (const collection of await readdir(contentDir)) {
    const enDir = path.join(contentDir, collection, "en");
    if (!existsSync(enDir)) continue;
    for (const name of (await readdir(enDir)).filter((n) => n.endsWith(".md"))) {
      const enFile = path.join(enDir, name);
      if (filter && !enFile.includes(filter)) continue;
      const en = splitMarkdown(await readFile(enFile, "utf8"));
      for (const locale of locales) {
        const trFile = path.join(contentDir, collection, locale, name);
        if (!existsSync(trFile)) {
          report(trFile, "missing translation");
          continue;
        }
        const tr = splitMarkdown(await readFile(trFile, "utf8"));
        compare(trFile, en.data, tr.data, locale, [], { ownLayout: false });
        const a = bodyShape(en.body);
        const b = bodyShape(tr.body);
        for (const k of Object.keys(a)) if (a[k] !== b[k]) report(trFile, `body: ${b[k]} ${k}, English has ${a[k]}`);
        compare(trFile, en.body.trim(), tr.body.trim(), locale, ["body"], { ownLayout: false });
      }
    }
  }
}

async function checkPageTexts() {
  const pagesDir = path.join(ROOT, "src/i18n/pages");
  for (const page of await readdir(pagesDir)) {
    const enFile = path.join(pagesDir, page, "en.ts");
    if (!existsSync(enFile) || (filter && !enFile.includes(filter))) continue;
    const en = (await import(pathToFileURL(enFile).href)).default;
    for (const locale of locales) {
      const trFile = path.join(pagesDir, page, `${locale}.ts`);
      if (!existsSync(trFile)) {
        report(trFile, "missing translation");
        continue;
      }
      const source = await readFile(trFile, "utf8");
      const index = await readFile(path.join(pagesDir, page, "index.ts"), "utf8");
      if (!new RegExp(`\\b${locale}\\b`).test(index.split("copies")[1] ?? "")) report(trFile, `not listed in index.ts copies`);
      const tr = (await import(pathToFileURL(trFile).href)).default;
      // Pages whose Georgian text was written for its own layout opt out of the shape check.
      compare(trFile, en, tr, locale, [], { ownLayout: /\/\/ own layout/.test(source) });
    }
  }
}

await checkPageTexts();
await checkCollections();

if (problems.length) {
  console.log(problems.join("\n"));
  console.log(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log(`All translations OK (${locales.join(", ")})`);
