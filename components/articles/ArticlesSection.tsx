import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/articles";

export default function ArticlesSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">LATEST ARTICLES</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>
    </section>
  );
}
