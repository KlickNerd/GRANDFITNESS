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
 *  - a different shape (keys, list lengths)
 *  - changed image paths, numbers-only values, dates, slugs and structured `href` fields
 *  - numbers inside text (prices, hours, counts) that English doesn't have — printed as warnings
 *    to double-check ("Ten years" → "10 წელი" is fine), they don't fail the run
 *  - inline links (href="…" in HTML, [text](…) in Markdown) not pointing to the same page
 *    in the translation's language (Georgian /…, Russian /ru/…), and English inline links
 *    that don't point to English pages (/en/…)
 *  - text that still looks English
 * Exit code 1 if anything is wrong.
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parse as parseYaml } from "yaml";
import { defaultLocale, locales as allLocales, localizePath, sourceLocale } from "../src/i18n/config.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOCALES = allLocales.filter((l) => l !== sourceLocale);
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
const warnings = [];
const report = (file, msg) => problems.push(`${path.relative(ROOT, file)}: ${msg}`);
const warn = (file, msg) => warnings.push(`${path.relative(ROOT, file)}: ${msg}`);

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

const isInternal = (href) => href.startsWith("/") && !href.startsWith("//");
const sourcePrefix = `/${sourceLocale}/`;

/** English "/en/contact/" → "/contact/" in Georgian, "/ru/contact/" in Russian. */
function expectedInline(enHref, locale) {
  if (!isInternal(enHref) || !enHref.startsWith(sourcePrefix)) return enHref;
  return localizePath(enHref.slice(sourcePrefix.length - 1), locale);
}

/** Inline links in English text must point to English pages: "/en/contact/", not "/contact/" (Georgian). */
function checkSourceLinks(file, value, keyPath = []) {
  if (Array.isArray(value)) return value.forEach((v, i) => checkSourceLinks(file, v, [...keyPath, i]));
  if (value && typeof value === "object") return Object.entries(value).forEach(([k, v]) => checkSourceLinks(file, v, [...keyPath, k]));
  if (typeof value !== "string") return;
  for (const href of inlineLinks(value))
    if (isInternal(href) && !href.startsWith(sourcePrefix) && defaultLocale !== sourceLocale)
      report(file, `${keyPath.join(".")}: English inline link "${href}" should be "/${sourceLocale}${href}"`);
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

/** The numbers in a text ("25 GEL, 08:00" → [25, 8, 0]); links and HTML attributes don't count. */
function numbersIn(text) {
  const plain = text.replace(/<[^>]+>/g, " ").replace(/\]\([^)]*\)/g, "]").replace(/&#?\w+;/g, " ");
  return (plain.match(/\d+/g) ?? []).map(Number);
}

function compare(file, en, tr, locale, keyPath, opts) {
  const where = keyPath.join(".") || "(root)";
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return report(file, `${where}: expected a list`);
    if (en.length !== tr.length) report(file, `${where}: ${tr.length} items, English has ${en.length}`);
    en.forEach((v, i) => tr[i] !== undefined && compare(file, v, tr[i], locale, [...keyPath, i], opts));
    return;
  }
  if (en && typeof en === "object") {
    if (!tr || typeof tr !== "object") return report(file, `${where}: expected an object`);
    for (const k of Object.keys(en)) if (!(k in tr)) report(file, `${where}: missing "${k}"`);
    for (const k of Object.keys(tr)) if (!(k in en)) report(file, `${where}: extra "${k}"`);
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
  else {
    // Only numbers the translation adds (a changed price, hour or count) — "1-on-1" may become words.
    const left = numbersIn(en);
    const extra = numbersIn(tr).filter((n) => {
      const i = left.indexOf(n);
      return i === -1 || !left.splice(i, 1);
    });
    if (extra.length) warn(file, `${where}: number(s) ${extra.join(", ")} not in English — check the fact`);
  }
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
      checkSourceLinks(enFile, { ...en.data, body: en.body });
      for (const locale of locales) {
        const trFile = path.join(contentDir, collection, locale, name);
        if (!existsSync(trFile)) {
          report(trFile, "missing translation");
          continue;
        }
        const tr = splitMarkdown(await readFile(trFile, "utf8"));
        compare(trFile, en.data, tr.data, locale, [], {});
        const a = bodyShape(en.body);
        const b = bodyShape(tr.body);
        for (const k of Object.keys(a)) if (a[k] !== b[k]) report(trFile, `body: ${b[k]} ${k}, English has ${a[k]}`);
        compare(trFile, en.body.trim(), tr.body.trim(), locale, ["body"], {});
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
    checkSourceLinks(enFile, en);
    for (const locale of locales) {
      const trFile = path.join(pagesDir, page, `${locale}.ts`);
      if (!existsSync(trFile)) {
        report(trFile, "missing translation");
        continue;
      }
      const index = await readFile(path.join(pagesDir, page, "index.ts"), "utf8");
      if (!new RegExp(`\\b${locale}\\b`).test(index.split("copies")[1] ?? "")) report(trFile, `not listed in index.ts copies`);
      const tr = (await import(pathToFileURL(trFile).href)).default;
      compare(trFile, en, tr, locale, [], {});
    }
  }
}

await checkPageTexts();
await checkCollections();

if (warnings.length) console.log(`Warnings:\n${warnings.join("\n")}\n`);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log(`All translations OK (${locales.join(", ")})`);
