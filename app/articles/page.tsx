import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-10">Articles</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <ArticleCard key={i} {...a} />
        ))}
      </div>
    </section>
  );
}
