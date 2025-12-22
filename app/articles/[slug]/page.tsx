import Image from "next/image";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

interface ArticleDetailsProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetails({ params }: ArticleDetailsProps) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) return notFound();

  return (
    <section className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl flex flex-col justify-end p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{article.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-200">
            <span>Revo Admin</span>
            <span>3 Mins Read</span>
            <span>{article.tag}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12 px-6 md:px-0">
        {/* Left Column - Article */}
        <article className="flex-1 prose prose-lg max-w-none text-gray-800">
          {article.content?.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        {/* Right Column - TOC + Share */}
        <aside className="w-full lg:w-64 flex flex-col gap-6 sticky top-24">
          {/* Table of Contents */}
          <div className="border-l-2 border-gray-300 pl-4">
            <h4 className="font-semibold mb-2">On This Page</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#defining">Defining Agentic AI</a></li>
              <li><a href="#why-matters">Why Agentic AI Matters</a></li>
              <li><a href="#core-benefits">The Core Benefits of Agentic AI</a></li>
              <li><a href="#in-action">Agentic AI in Action</a></li>
              <li><a href="#future">Embracing the Future</a></li>
            </ul>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-3">
            <button className="bg-gray-200 p-2 rounded">FB</button>
            <button className="bg-gray-200 p-2 rounded">TW</button>
            <button className="bg-gray-200 p-2 rounded">LI</button>
            <button className="bg-gray-200 p-2 rounded">YT</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
