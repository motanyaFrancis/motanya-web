import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/articles";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticlesSection() {
  // Sort articles by date descending (latest first) and take top 3
  const displayedArticles: Article[] = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold">Insights & Thought Leadership</h2>
        <Link
          href="/articles"
          className="text-emerald-600 font-semibold hover:underline ml-auto"
        >
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {displayedArticles.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>
    </section>
  );
}
