import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full">
      {/* HERO */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/mini-hero.jpg"
          alt="Branding & Digital Strategy"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content Layer */}
        <div className="relative z-10 flex h-full items-center">
          {/* Text container ONLY */}
          <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
            <div className="max-w-xl text-white">
              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
                Crafting Brands That Connect, Engage & Inspire in a Digital-First World
              </h1>

              <p className="mb-8 text-sm leading-relaxed text-gray-200 md:text-base">
                We help startups and businesses build meaningful digital presences, 
                combining strategic branding, user experience, and smart technology 
                to create unforgettable experiences that resonate with audiences.
              </p>

              <div className="flex items-center gap-4">
                {/* Play Button */}
                <button
                  aria-label="Play introduction"
                  className="flex h-10 w-12 md:h-12 md:w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg outline outline-1 outline-offset-6 transition hover:bg-orange-600"
                >
                  ▶
                </button>

                <div>
                  <p className="text-base font-semibold">Learn More About Our Approach</p>
                  <p className="text-sm text-gray-300">
                    Insights on Branding, UX, and Technology by Motanya Nyabanga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Our Mission
            <span className="block text-gray-400">Empowering Startups & Brands</span>
          </h2>
        </div>

        <div className="space-y-6 text-gray-600">
          <p>
            We believe that a strong brand is more than a logo or design—it’s a
            purposeful experience. By integrating digital strategy, user-centered
            design, and innovative technology, we ensure your brand connects with
            your audience meaningfully.
          </p>

          <p>
            Every project begins with understanding your vision, your audience,
            and your goals. From ideation to digital presence, we guide startups
            to communicate their value clearly and consistently.
          </p>

          <p>
            Our team combines expertise in branding, UX design, and tech-driven
            solutions to help businesses scale and create memorable experiences
            for their customers.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium text-black hover:underline"
          >
            Read Our Insights <span aria-hidden>↗</span>
          </a>

          <div className="flex items-center gap-3 pt-6">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="text-sm">
              <p className="font-medium text-black">Motanya Nyabanga</p>
              <p className="text-gray-500">Founder & Branding Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
