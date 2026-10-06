import { getCollection, type CollectionEntry } from "astro:content";
import { inLocale, splitId } from "@/collections/entries";
import type { Locale } from "@/i18n/config";

export type Article = CollectionEntry<"magazine">;

/** Articles of one language, newest first (the order of the magazine index). */
export async function articlesFor(locale: Locale): Promise<Article[]> {
  const all = inLocale<"magazine">(await getCollection("magazine"), locale);
  return all.sort((a, b) => b.data.datePublished.localeCompare(a.data.datePublished));
}

export function articleHref(article: Article): string {
  return `/magazine/${splitId(article.id).slug}/`;
}

/** "Keep reading" list: the article's `related` slugs, or every other article in index order. */
export function relatedArticles(article: Article, articles: Article[]): Article[] {
  if (!article.data.related) return articles.filter((a) => a.id !== article.id);
  const bySlug = new Map(articles.map((a) => [splitId(a.id).slug, a]));
  return article.data.related.map((s) => {
    const found = bySlug.get(s);
    if (!found) throw new Error(`Article "${article.id}": related article "${s}" does not exist.`);
    return found;
  });
}
