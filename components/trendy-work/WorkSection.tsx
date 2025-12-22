import WorkItem from "./WorkItem";

const works = [
  {
    index: "01",
    title: "PRODUCT STRATEGY & EXPERIENCE DESIGN",
    description:
      "Designing meaningful digital experiences that connect users to value. From concept to execution, we craft products that are intuitive, goal-driven, and ready to scale.",
    highlight: "User-centric design • Product clarity • Strategic alignment",
    image: "/images/work1.jpg",
    layout: "image-left" as const,
  },
  {
    index: "02",
    title: "SCALABLE SOFTWARE & DIGITAL SYSTEMS",
    description:
      "Engineering robust, secure and high-performing platforms that enable businesses to operate smarter, integrate seamlessly, and grow confidently.",
    highlight: "Performance • Reliability • Future-ready architecture",
    image: "/images/work2.jpg",
    layout: "image-right" as const,
  },
  {
    index: "03",
    title: "AI-POWERED INTELLIGENCE & AUTOMATION",
    description:
      "Integrating AI to unlock smarter decision-making, predictive analytics, and automated workflows—helping businesses respond faster and deliver enhanced customer experiences.",
    highlight: "Predictive insights • Automation • Enhanced experience",
    image: "/images/work3.jpg",
    layout: "image-left" as const,
  },
  {
    index: "04",
    title: "CONNECTED DIGITAL ECOSYSTEMS",
    description:
      "Building unified, interoperable digital environments where platforms, tools, and data work together to power seamless business operations.",
    highlight: "System integration • Unified platforms • Business enablement",
    image: "/images/work4.jpg",
    layout: "image-right" as const,
  },
];

export default function WorkSection() {
  return (
    <section id="services" className="py-16 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">
          Building Digital Experiences That Drive Real Impact
        </h2>
      </div>

      {works.map((work, i) => (
        <WorkItem key={i} {...work} />
      ))}
    </section>
  );
}
