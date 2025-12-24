import { articles } from "@/lib/articles";
import type { Metadata } from "next";
import ArticleList from "@/components/articles/ArticleList";

// Sort articles by date (latest first)
const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Generate a snippet for description
const descriptionSnippet =
  sortedArticles
    .slice(0, 3)
    .map((a) => a.content.trim().split(".")[0])
    .join(". ") + ".";

// Metadata (server-only)
export const metadata: Metadata = {
  title: `Articles — Motanya`,
  description: descriptionSnippet,
  authors: [{ name: "Motanya Nyabanga" }],
  keywords: Array.from(
    new Set(sortedArticles.map((a) => a.tag).concat(["Branding", "Digital", "Startup"]))
  ),
  openGraph: {
    title: `Articles — Motanya`,
    description: descriptionSnippet,
    type: "website",
    url: "https://motanya.co.ke/articles",
    images: sortedArticles.map((article) => ({
      url: `https://motanya.co.ke${article.image}`,
      width: 1200,
      height: 630,
      alt: article.title,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: `Articles — Motanya`,
    description: descriptionSnippet,
    images: sortedArticles.map((article) => `https://motanya.co.ke${article.image}`),
  },
};

export default function ArticlesPage() {
  // Pass sorted articles to client component
  return <ArticleList articles={sortedArticles} />;
}
