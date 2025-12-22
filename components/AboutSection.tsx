'use client'

import { motion } from 'framer-motion'

interface ShowcaseCard {
  title: string
  description: string
  image: string
  alt: string
  size?: 'large' | 'normal'
}

const showcase: ShowcaseCard[] = [
  {
    title: 'Innovation in Focus',
    description: 'Transforming business challenges into purposeful digital experiences.',
    image: '/mini-hero.jpg',
    alt: 'Innovation in Focus',
    size: 'normal',
  },
  {
    title: 'Digital Solution Edit',
    description: 'Designing custom platforms built for reliability, scale and performance.',
    image: '/mini-hero-2.jpg',
    alt: 'Digital Solution Edit',
    size: 'large',
  },
  {
    title: 'Tech in Motion',
    description: 'Where strategy, design and engineering come together seamlessly.',
    image: '/mini-hero-3.jpg',
    alt: 'Tech in Motion',
    size: 'normal',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 lg:px-0 py-24 text-black relative"
    >
      {/* Section Marker */}
      <p className="text-xs tracking-widest uppercase text-black/60">
        About Me
      </p>

      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-semibold leading-tight max-w-3xl my-12">
        Why work with me?
      </h2>

      {/* ABOUT GRID */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-base text-black/70 max-w-lg leading-relaxed">
            I help businesses design, build, and scale powerful digital systems.
            Every solution is guided by strategy, user experience, and measurable business impact—
            ensuring technology doesn’t just work, it works with purpose.
          </p>

          {/* VALUE POINTS */}
          <ul className="space-y-4 text-black/80">
            <li className="flex gap-3">
              <span className="text-lg">✔</span>
              Experience designing scalable, future-ready systems
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✔</span>
              Solutions built around real business ROI & efficiency
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✔</span>
              Alignment between technology, brand, and user experience
            </li>
          </ul>

          {/* STATS */}
          <div className="flex gap-16 pt-8">
            <div>
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm text-black/60 mt-1">
                Projects Delivered
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">85%</p>
              <p className="text-sm text-black/60 mt-1">
                Measured Growth & ROI
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <img
            src="/images/about.jpg"
            alt="About portrait"
            className="aspect-[16/10] object-cover bg-top rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* SHOWCASE */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl font-semibold uppercase tracking-tight">
            Showcase
          </h3>

          {/* <button className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition">
            View All
          </button> */}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          {showcase.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`space-y-4 ${card.size === 'large' ? '-mt-5' : ''}`}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={card.image}
                  alt={card.alt}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-105 
                  ${card.size === 'large' ? 'aspect-[9/16]' : 'aspect-[3/4]'}`}
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold uppercase">{card.title}</h4>
                <p className="text-sm text-black/60">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
