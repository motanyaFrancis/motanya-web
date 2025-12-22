'use client'

import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const slides = [
    "/mini-hero.jpg",
    "/mini-hero-2.jpg",
    "/mini-hero-3.jpg",
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    // autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen max-w-8xl mx-auto text-white overflow-hidden lg:px-24">

            {/* Background image */}
            <img
                src="/hero.jpg"
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/30 to-emerald-900/60 -z-5" />

            <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">

                {/* LEFT COLUMN */}
                <div className="min-h-screen inline-grid gap-3 place-content-center mx-auto lg:w-1/2 px-6 lg:px-20 py-12 lg:py-28">

                    {/* MOBILE HEADLINE */}
                    <div className="order-1 lg:hidden mb-10 mt-24">
                        <h1 className="text-left font-extrabold leading-[0.95] text-4xl space-y-1">
                            <span className="block">BUILDING DIGITAL SOLUTIONS THAT CONNECT AND SCALE</span>
                        </h1>
                    </div>

                    {/* SUPPORTING TEXT */}
                    <p className="order-2 max-w-md text-base leading-relaxed text-white mb-12">
                        Through intelligent engineering and strategic thinking, we develop digital products and platforms that ignite growth, inspire users, and elevate your brand.
                    </p>

                    {/* MINI CAROUSEL */}
                    <div className="order-3 mb-10 mx-auto md:mx-0">
                        <div className="relative w-60">

                            {/* OUTLINE WRAPPER (NO overflow-hidden) */}
                            <div className="relative outline outline-2 outline-dashed outline-white/50 outline-offset-8">

                                {/* IMAGE MASK */}
                                <div className="relative h-60 overflow-hidden">
                                    {slides.map((src, index) => (
                                        <img
                                            key={src}
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            className={`
                                    absolute inset-0 w-full h-full object-cover
                                    transition-all duration-700 ease-out
                                    ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                                    `}
                                        />
                                    ))}

                                    {/* PLAY BUTTON */}
                                    <button
                                        onClick={() => setCurrent((current + 1) % slides.length)}
                                        className="absolute inset-0 flex items-center justify-center group"
                                    >
                                        <span className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center text-xs font-bold group-hover:scale-110 transition">
                                            ▶
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* INDICATORS (OUTSIDE OUTLINE) */}
                            <div className="mt-5 flex items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`h-[2px] transition-all duration-300
                                    ${index === current ? "w-6 bg-white" : "w-3 bg-white/40"}
                                `}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>



                    {/* CTA BUTTON */}
                    <button className="absolute uppercase bottom-8 left-6 mt-auto inline-flex w-fit items-center gap-2 bg-white text-black px-5 py-3 text-xs font-semibold hover:bg-white/90 transition">
                        Let's Connect
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                    </button>
                </div>

                {/* DESKTOP HEADLINE */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-end px-6 lg:px-20">
                    <h1 className="text-right font-extrabold leading-[0.95] text-7xl space-y-1">
                        <span className="block">BUILDING DIGITAL SOLUTIONS THAT CONNECT AND SCALE</span>
                    </h1>
                </div>
            </div>

            {/* SOCIALS */}
            <div className="absolute bottom-8 right-6 lg:right-20 flex gap-4 text-white">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedinIn />
                <FaXTwitter />
            </div>
        </section>
    );
}
