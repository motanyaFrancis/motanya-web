import Image from "next/image";

export default function CompanyPlaybook() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold leading-tight">
          Explore Our
          <span className="block text-gray-400">Company Playbook</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base">
          Our approach combines strategy, branding, UX design, and technology
          to create business solutions that scale, delight users, and drive growth.
        </p>
      </div>

      {/* Images */}
      <div className="mb-20 grid gap-6 md:grid-cols-3">
        <div className="relative h-64 md:h-full">
          <Image
            src="/mini-hero-3.jpg"
            alt="Team collaboration"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="relative h-64 md:col-span-2 md:h-[320px]">
          <Image
            src="/mini-hero-2.jpg"
            alt="Modern office"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <span className="block text-2xl font-semibold text-gray-300">
            01
          </span>
          <h3 className="mt-2 font-semibold">
            Brand with Purpose
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            We help startups and businesses craft clear, consistent, and
            meaningful brand identities that resonate with audiences and
            communicate value at every touchpoint.
          </p>
        </div>

        <div>
          <span className="block text-2xl font-semibold text-gray-300">
            02
          </span>
          <h3 className="mt-2 font-semibold">
            Empower Digital Experiences
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Our focus on user experience, interface design, and seamless
            workflows ensures that your digital presence is engaging, intuitive,
            and professional.
          </p>
        </div>

        <div>
          <span className="block text-2xl font-semibold text-gray-300">
            03
          </span>
          <h3 className="mt-2 font-semibold">
            Drive Growth with Technology
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Leveraging smart digital systems, automation, and data-driven
            insights, we optimize operations and scale businesses efficiently,
            ensuring sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
