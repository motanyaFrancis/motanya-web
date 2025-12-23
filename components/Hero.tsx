'use client'

import { useEffect, useState, useRef } from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

type Slide = {
    type: "video" | "image"
    src: string
    title: string
    description: string
}

const slides: Slide[] = [
    {
        type: "image",
        src: "/mini-hero.jpg",
        title: "Innovation In Focus",
        description: "A look at forward-thinking digital creativity powering modern brands."
    },
    {
        type: "video",
        src: "/hero-video.mp4",
        title: "Technology In Motion",
        description: "Immersive storytelling showing technology in real-world experiences."
    },
    {
        type: "image",
        src: "/mini-hero-3.jpg",
        title: "Future Driven Solutions",
        description: "Building meaningful tools that support business growth and scalability."
    },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)
    const [openOverlay, setOpenOverlay] = useState(false)
    const overlayRef = useRef<HTMLDivElement | null>(null)

    const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({})

    const handleNext = () => {
        setCurrent(prev => (prev + 1) % slides.length)
    }

    const handlePrev = () => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length)
    }

    /** ========= AUTO PLAY ========= **/
    useEffect(() => {
        if (openOverlay) return

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [openOverlay])

    /** ========= VIDEO THUMBNAIL GENERATION ========= **/
    async function generateVideoThumbnail(videoUrl: string) {
        return new Promise<string>((resolve) => {
            const video = document.createElement("video")
            video.src = videoUrl
            video.crossOrigin = "anonymous"
            video.currentTime = 1

            video.addEventListener("loadeddata", () => {
                const canvas = document.createElement("canvas")
                canvas.width = video.videoWidth
                canvas.height = video.videoHeight
                const ctx = canvas.getContext("2d")
                ctx?.drawImage(video, 0, 0)
                resolve(canvas.toDataURL("image/jpeg"))
            })
        })
    }

    useEffect(() => {
        slides.forEach(async slide => {
            if (slide.type === "video" && !thumbnails[slide.src]) {
                const thumb = await generateVideoThumbnail(slide.src)
                setThumbnails(prev => ({ ...prev, [slide.src]: thumb }))
            }
        })
    }, [])

    /** ========= CLICK OUTSIDE CLOSE ========= **/
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
                setOpenOverlay(false)
            }
        }

        if (openOverlay) document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [openOverlay])

    /** ========= ESC CLOSE ========= **/
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenOverlay(false)
        }
        document.addEventListener("keydown", handleEsc)
        return () => document.removeEventListener("keydown", handleEsc)
    }, [])

    const active = slides[current]

    return (
        <section className="relative min-h-screen max-w-8xl mx-auto text-white overflow-hidden lg:px-24">

            {/* Background */}
            <img src="/hero.jpg" className="absolute inset-0 w-full h-full object-cover -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/30 to-emerald-900/60 -z-5" />

            <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">

                {/* LEFT */}
                <div className="min-h-screen inline-grid gap-3 place-content-center mx-auto lg:w-1/2 px-6 lg:px-20 py-12 lg:py-28">

                    <div className="order-1 lg:hidden mb-10 mt-24">
                        <h1 className="text-4xl font-extrabold leading-[0.95]">
                            BUILDING DIGITAL SOLUTIONS THAT CONNECT AND SCALE
                        </h1>
                    </div>

                    <p className="order-2 max-w-md text-base leading-relaxed text-white mb-12">
                        Through intelligent engineering and strategic thinking, we develop digital products and platforms
                        that ignite growth, inspire users, and elevate your brand.
                    </p>

                    {/* MINI CAROUSEL */}
                    <div className="order-3 mb-10 mx-auto md:mx-0">
                        <div
                            className="relative w-60 cursor-pointer"
                            onClick={() => setOpenOverlay(true)}
                        >
                            <div className="relative outline outline-2 outline-dashed outline-white/50 outline-offset-8">
                                <div className="relative h-60 overflow-hidden">

                                    {slides.map((slide, index) => (
                                        <img
                                            key={index}
                                            src={
                                                slide.type === "image"
                                                    ? slide.src
                                                    : thumbnails[slide.src] || "/fallback-thumbnail.jpg"
                                            }
                                            className={`
                        absolute inset-0 w-full h-full object-cover
                        transition-all duration-700 ease-out
                        ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                      `}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* INDICATORS */}
                            <div className="mt-5 flex items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrent(index)
                                        }}
                                        className={`h-[2px] transition-all duration-300 ${index === current ? "w-6 bg-white" : "w-3 bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <button className="absolute uppercase bottom-8 left-6 mt-auto inline-flex w-fit items-center gap-2 bg-white text-black px-5 py-3 text-xs font-semibold hover:bg-white/90 transition">
                        Let's Connect
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                    </button>
                </div>

                {/* DESKTOP HEADING */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-end px-6 lg:px-20">
                    <h1 className="text-right font-extrabold leading-[0.95] text-7xl">
                        BUILDING DIGITAL SOLUTIONS THAT CONNECT AND SCALE
                    </h1>
                </div>
            </div>

            {/* SOCIAL */}
            <div className="absolute bottom-8 right-6 lg:right-20 flex gap-4 text-white">
                <FaFacebook /><FaInstagram /><FaLinkedinIn /><FaXTwitter />
            </div>

            {/* ========= OVERLAY ========= */}
            {openOverlay && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-fadeIn">

                    <div
                        ref={overlayRef}
                        className="bg-black/90 border border-white/20 rounded-xl shadow-2xl w-full max-w-5xl h-[70vh] grid grid-cols-1 lg:grid-cols-10 overflow-hidden animate-slideUp"
                    >

                        {/* MEDIA */}
                        <div className="lg:col-span-7 relative bg-black flex items-center justify-center">

                            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={handlePrev}>
                                ‹
                            </button>

                            <div className="w-full h-full aspect-video bg-black">
                                {active.type === "video" ? (
                                    <video src={active.src} controls autoPlay className="w-full h-full object-cover" />
                                ) : (
                                    <img src={active.src} className="w-full h-full object-cover" />
                                )}
                            </div>

                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={handleNext}>
                                ›
                            </button>

                        </div>

                        {/* TEXT */}
                        <div className="lg:col-span-3 p-6 flex flex-col justify-center items-start">
                            <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                {active.description}
                            </p>

                            <button
                                onClick={() => setOpenOverlay(false)}
                                className="uppercase text-xs bg-white text-black px-5 py-2 mt-6 hover:bg-white/80 transition rounded-full cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </section>
    )
}
