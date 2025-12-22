import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  tag: string;
  image: string;
  slug: string; // add slug for linking
}

export default function ArticleCard({ title, date, tag, image, slug }: Props) {
  return (
    <Link href={`/articles/${slug}`} className="block hover:opacity-90 transition-opacity">
      <div>
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="w-full object-cover rounded-lg"
        />

        <div className="mt-3 text-sm text-gray-500">{date} — {tag}</div>
        <h3 className="font-semibold mt-1">{title}</h3>
      </div>
    </Link>
  );
}
