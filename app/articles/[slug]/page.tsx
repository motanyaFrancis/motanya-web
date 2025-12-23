import Image from "next/image";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Metadata } from "next";
import Link from "next/link";

interface ArticleDetailsProps {
  params: Promise<{ slug: string }>;
}

// Optional: Dynamic Metadata for the article
export async function generateMetadata({ params }: ArticleDetailsProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.content.slice(0, 160), // first 160 chars
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160),
      images: [article.image],
    },
  };
}

export default async function ArticleDetails({ params }: ArticleDetailsProps) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) return notFound();

  return (
    <section className="w-full">

      {/* Full Width Hero */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end px-6 md:px-12 pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-7xl mx-auto">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mt-4 text-sm text-gray-200 max-w-7xl mx-auto">
            <span>Motanya</span>
            <span>3 Mins Read</span>
            <span>{article.tag}</span>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-3 py-3 text-gray-600 text-sm">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:underline">Articles</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800 hidden md:inline">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 mt-6 px-6 md:px-3">

        {/* Left Column */}
        <article className="flex-1 prose prose-lg max-w-none text-gray-800 space-y-8">
          {article.content
            .split("\n\n")
            .map(p => p.trim())
            .filter(p => p.length)
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
        </article>

        {/* Right Column */}
        <aside className="w-full lg:w-64 flex flex-col gap-6 sticky top-24">

          {/* TOC */}
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

          {/* Share */}
          <div className="flex gap-3">
            <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition">
              <FaFacebookF size={18} />
            </button>

            <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition">
              <FaXTwitter size={18} />
            </button>

            <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition">
              <FaLinkedinIn size={18} />
            </button>

            <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition">
              <FaYoutube size={18} />
            </button>
          </div>

        </aside>

      </div>
    </section>
  );
}
