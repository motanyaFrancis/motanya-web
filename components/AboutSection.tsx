'use client'

interface FashionCard {
    title: string
    description: string
    image: string
    alt: string
    size?: 'large' | 'normal'
}

const fashionShowcase: FashionCard[] = [
    {
        title: 'Innovation in Focus',
        description: 'Elevating Business Through Technology.',
        image: '/mini-hero.jpg',
        alt: 'Innovation in Focus',
        size: 'normal',
    },
    {
        title: 'Digital Solution Edit',
        description: 'Custom Platforms. Powerful Performance.',
        image: '/mini-hero-2.jpg',
        alt: 'Digital Solution Edit',
        size: 'large',
    },
    {
        title: 'Tech in Motion',
        description: 'Where Strategy Meets Execution.',
        image: '/mini-hero-3.jpg',
        alt: 'Tech in Motion',
        size: 'normal',
    },
]
// {
//   "section": "showcase",
//   "title": "Technology Showcase",
//   "cta": "View All",
//   "cards": [
//     {
//       "title": "INNOVATION IN FOCUS",
//       "subtitle": "Elevating Business Through Technology.",
//       "image": "/images/service-1.jpg"
//     },
//     {
//       "title": "DIGITAL SOLUTION EDIT",
//       "subtitle": "Custom Platforms. Powerful Performance.",
//       "image": "/images/service-2.jpg"
//     },
//     {
//       "title": "TECH IN MOTION",
//       "subtitle": "Where Strategy Meets Execution.",
//       "image": "/images/service-3.jpg"
//     }
//   ]
// }

export default function AboutSection() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-12 lg:px-0 py-24 text-black relative" >

            <p className="text-xs tracking-widest uppercase text-black/60">
                About Me
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold uppercase leading-tight max-w-3xl my-12">
                Engineering Digital Harmony and Business Efficiency
            </h2>
            {/* ABOUT HEADER */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">

                {/* LEFT TEXT */}
                <div className="space-y-8">

                    <p className="text-base text-black/70 max-w-lg">
                        We specialize in designing scalable systems, secure platforms, and visually compelling digital experiences that drive growth, efficiency, and innovation for modern businesses.
                    </p>

                    {/* STATS */}
                    <div className="flex gap-16 pt-8">
                        <div>
                            <p className="text-3xl font-bold">10+</p>
                            <p className="text-sm text-black/60 mt-1">
                                Projects Delivered
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold">+85%</p>
                            <p className="text-sm text-black/60 mt-1">
                                Client ROI Increase
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-end">
                    <img
                        src="/mini-hero-2.jpg"
                        alt="About portrait"
                        className="aspect-[16/10] object-cover bg-top"
                    />
                </div>
            </div>

            <div>
                {/* FASHION SHOWCASE HEADER */}
                <div className="flex items-center justify-between md:lg:mb-28">
                    <h3 className="text-3xl font-semibold uppercase">TECH SHOWCASE</h3>
                    <button className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition">
                        View All
                    </button>
                </div>

                {/* SHOWCASE GRID */}
                <div className="grid md:grid-cols-3 gap-12 mt-8 ">
                    {fashionShowcase.map((card, index) => (
                        <div
                            key={index}
                            className={`space-y-4 ${card.size === 'large' ? '-mt-5' : ''}`}
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className={`w-full object-cover aspect-[3/4] ${card.size === 'large' ? 'aspect-[9/16]' : 'aspect-[3/4]'
                                    }`}
                            />
                            <div className="space-y-1">
                                <h4 className="font-semibold uppercase">{card.title}</h4>
                                <p className="text-sm text-black/60">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
