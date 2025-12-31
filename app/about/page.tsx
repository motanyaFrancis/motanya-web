import React from "react";
import AboutHero from "@/components/about/AboutHero";
import Footer from "@/components/Footer";
import CompanyPlaybook from "@/components/about/CompanyPlaybook";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Motanya",
    description:
        "Get in touch to collaborate on campaigns, creative direction, photography, film, or digital projects. Let's talk!"
}

const AboutMe: React.FC = () => {
    return (
        <>
            <section className="bg-gray-50">
                <AboutHero />
                {/* <BusinessStructureSection /> */}
                <CompanyPlaybook />
                {/* Final CTA Section */}
                <div
                    className="relative w-full bg-cover bg-center py-24 flex flex-col items-center justify-center"
                    style={{ backgroundImage: "url('/mini-hero-3.jpg')" }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Content */}
                    <div className="relative max-w-3xl text-center px-4">
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-lg leading-relaxed">
                            Together, we'll craft strategies, design impactful digital experiences,
                            and build a brand that connects with your audience. By the end, you'll
                            feel confident in your business vision, ready to grow, and equipped to
                            stand out in a digital-first world.
                        </p>

                        <a
                            href="/contact"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xl font-semibold px-8 sm:px-12 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>


            </section>
            <Footer />
        </>
    );
};

export default AboutMe;
