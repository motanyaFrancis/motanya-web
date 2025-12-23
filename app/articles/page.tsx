import Image from "next/image";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/lib/articles";
import type { Article } from "@/lib/articles";

export default function ArticlesPage() {
  // Sort articles by date descending to get the latest first
  const sortedArticles: Article[] = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredArticle = sortedArticles[0];
  const recentArticles = sortedArticles.slice(1);

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      {/* Featured Article */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={featuredArticle.image}
            alt={featuredArticle.title}
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-100 text-emerald-600 text-xs font-semibold px-2 py-1 rounded">
              News!
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
          <p className="text-gray-700 mb-4">
            {featuredArticle.content.slice(0, 200)}...
          </p>
          <a
            href={`/articles/${featuredArticle.slug}`}
            className="text-emerald-600 font-semibold flex items-center gap-1"
          >
            Read More →
          </a>
        </div>
      </div>

      {/* Recent Articles */}
      <h3 className="text-2xl font-bold">Our Recent Thoughts</h3>
      <p className="text-gray-500 mb-8">Stay Informed with Our Latest Insights</p>
      <div className="grid md:grid-cols-3 gap-8">
        {recentArticles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </div>
    </section>
  );
}
