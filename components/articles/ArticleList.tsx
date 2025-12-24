"use client";

import { useState } from "react";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import Footer from "../Footer";
import type { Article } from "@/lib/articles";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(recentArticles.length / articlesPerPage);

  const paginatedArticles = recentArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <>
      <section className="py-20 max-w-6xl mx-auto px-6">
        {/* Featured Article */}
        <div className="grid md:grid-cols-2 gap-0 mb-16 items-center">
          <div className="relative rounded-xl p-4 bg-gray-50 shadow-lg">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-b md:bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-b-lg md:rounded-r-lg shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-100 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full">
                {featuredArticle.tag}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
            <p className="text-gray-700 mb-4">
              {featuredArticle.content.slice(0, 200).trim()}...
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
        <h3 className="text-2xl font-bold">Latest insights</h3>
        <p className="text-gray-500 mb-8">
          {`Stay informed with our latest insights on ${Array.from(
            new Set(recentArticles.map((a) => a.tag))
          ).join(", ")}`}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
