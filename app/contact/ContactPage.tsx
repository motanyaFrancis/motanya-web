'use client'

import { useState } from "react"

const services = [
    "web Development",
    "Branding & Identity",
    "UI/UX Design",
    "Consulting",
    "Newsletter Creation",
    "network Management",
    "Other"
]

const budgets = [
    "Under Ksh 5K",
    "Ksh 5K–Ksh 10K",
    "Ksh 10K–Ksh 25K",
    "Ksh 25K–Ksh 50K",
    "Ksh 50K+"
]

const contactInfo = [
    { label: "Email", value: "francismotanya@outlook.com", href: "mailto:francismotanya@outlook.com" },
    { label: "LinkedIn", value: "motanyaFrancis", href: "https://www.linkedin.com/in/motanyaFrancis" },
    { label: "Instagram", value: "@motanyaFrancis", href: "https://instagram.com/motanyaFrancis" },
    { label: "X", value: "Motanya Nyabanga", href: "https://x.com/motanyafrancis" }
]


export default function ContactPage() {
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null)

    return (
        <section className="relative max-w-7xl mx-auto py-16 md:py-24 w-full bg-[repeating-linear-gradient( to right, transparent, transparent 24.5%, #e5e5e5 25%, transparent 25.5%)]">
            {/* Padding wrapper */}
            <div className="px-6 md:px-10">

                {/* Responsive grid — stacks on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

                    {/* Title */}
                    <div className="md:col-span-4">
                        <h1 className="text-5xl md:text-7xl font-black leading-none">
                            LET’S TALK
                        </h1>
                    </div>

                    {/* Intro + Contacts */}
                    <div className="md:col-span-2 space-y-6 pt-4 md:pt-6 flex flex-col justify-between max-w-[500px]">
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            Every great project begins with a conversation. Whether
                            you’re looking to collaborate on a campaign, bring a
                            concept to life on screen, or simply exchange ideas,
                            I’d love to hear from you.
                        </p>

                        {/* Contact info */}
                        <div className="pt-6 space-y-2 text-[14px] md:text-[15px]">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="grid grid-cols-2">
                                    <span className="uppercase">{item.label}</span>

                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-500 font-base text-right hover:underline"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Form Section */}
                    <div className="md:col-span-2 space-y-10 md:space-y-12">

                        {/* Service */}
                        <div>
                            <p className="uppercase text-sm mb-2">Service</p>
                            <div className="flex flex-wrap gap-3">
                                {services.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedService(s)}
                                        className={`
                                        px-4 py-2 rounded-full border text-sm
                                        ${selectedService === s
                                                ? "bg-black text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }
                                        `}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Budget */}
                        <div>
                            <p className="uppercase text-sm mb-2">Budget</p>
                            <div className="flex flex-wrap gap-3">
                                {budgets.map(b => (
                                    <button
                                        key={b}
                                        onClick={() => setSelectedBudget(b)}
                                        className={`
                                            px-4 py-2 rounded-full border text-sm
                                            ${selectedBudget === b
                                                ? "bg-black text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }
                                        `}>
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            <div>
                                <p className="uppercase text-sm mb-2">Name</p>
                                <input className="w-full border-b outline-none pb-1" />
                            </div>

                            <div>
                                <p className="uppercase text-sm mb-2">Email</p>
                                <input className="w-full border-b outline-none pb-1" />
                            </div>
                        </div>

                        {/* Textarea */}
                        <div>
                            <p className="uppercase text-sm mb-2">
                                Project Details (Optional)
                            </p>
                            <textarea
                                rows={4}
                                className="w-full border-b outline-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end">
                            <button className="uppercase text-emerald-500 font-semibold">
                                Submit →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
