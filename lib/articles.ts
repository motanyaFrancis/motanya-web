export type Article = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  content: string;
};

export const articles = [
  {
    title: "HOW DIGITAL SYSTEMS TRANSFORM BUSINESSES",
    slug: "how-digital-systems-transform-businesses",
    tag: "Technology",
    date: "January 10, 2025",
    image: "/images/article1.jpg",
    content: `
      Digital transformation is reshaping how businesses operate...
      (add full content here)
    `,
  },
  {
    title: "BUILDING SOLUTIONS THAT SCALE",
    slug: "building-solutions-that-scale",
    tag: "Innovation",
    date: "April 21, 2025",
    image: "/images/article2.jpg",
    content: `
      Scaling digital solutions requires thinking about architecture...
    `,
  },
  {
    title: "UNLOCKING YOUR DIGITAL POTENTIAL",
    slug: "unlocking-your-digital-potential",
    tag: "Strategy",
    date: "August 16, 2025",
    image: "/images/article3.jpg",
    content: `
      Every business has untapped digital potential...
    `,
  },
];
