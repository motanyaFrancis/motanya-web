import WorkItem from "./WorkItem";

const works = [
  {
    index: "01",
    title: "SMART BUSINESS PLATFORM",
    description:
      "A cloud-powered system enabling businesses to automate workflows, improve efficiency, and scale effortlessly.",
    image: "/images/work1.jpg",
    layout: "image-left" as const,
  },
  {
    index: "02",
    title: "AI-POWERED EXPERIENCE",
    description:
      "Delivering predictive analytics and customer insights through advanced AI integrations.",
    image: "/images/work2.jpg",
    layout: "image-right" as const,
  },
  {
    index: "03",
    title: "FUTURE-READY SOLUTIONS",
    description:
      "Building modern digital ecosystems designed for performance, reliability, and security.",
    image: "/images/work3.jpg",
    layout: "image-left" as const,
  },
];

// {
//   "section": "projects",
//   "title": "OUR INNOVATIVE PROJECTS",
//   "cta": "View All",
//   "projects": [
//     {
//       "id": "01",
//       "title": "SMART BUSINESS PLATFORM",
//       "description": "A cloud-powered system enabling businesses to automate workflows, improve efficiency, and scale effortlessly.",
//       "image": "/images/project-1.jpg"
//     },
//     {
//       "id": "02",
//       "title": "AI-POWERED EXPERIENCE",
//       "description": "Delivering predictive analytics and customer insights through advanced AI integrations.",
//       "image": "/images/project-2.jpg"
//     },
//     {
//       "id": "03",
//       "title": "FUTURE-READY SOLUTIONS",
//       "description": "Building modern digital ecosystems designed for performance, reliability, and security.",
//       "image": "/images/project-3.jpg"
//     }
//   ]
// }


export default function WorkSection() {
  return (
    <section id="services" className="py-16 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-semibold">OUR INNOVATIVE PROJECTS</h2>
        <button className="text-sm">VIEW ALL</button>
      </div>

      {/* Items */}
      {works.map((work, i) => (
        <WorkItem key={i} {...work} />
      ))}
    </section>
  );
}
