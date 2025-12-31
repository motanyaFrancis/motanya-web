import { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Logo from '@/components/Logo'


export const metadata: Metadata = {
  title: "Motanya – Branding, UX & Digital Solutions",
  description: "Motanya helps startups and businesses craft meaningful brands, design digital experiences, and scale through technology-driven solutions.",
  keywords: [
    "Motanya",
    "Branding",
    "Digital Strategy",
    "UX Design",
    "Enterprise Solutions",
    "Startups",
    "Digital Presence",
    "Technology",
    "Innovation",
  ],
  authors: [
    {
      name: "Motanya Nyabanga",
      url: "https://www.motanya.co.ke",
    },
  ],
  creator: "Motanya Nyabanga",
  publisher: "Motanya",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Motanya – Branding, UX & Digital Solutions",
    description: "Empowering startups and enterprises with strategy, branding, UX design, and tech-enabled growth.",
    url: "https://www.motanya.co.ke",
    siteName: "Motanya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Motanya Branding & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motanya – Branding, UX & Digital Solutions",
    description: "Empowering startups and enterprises with strategy, branding, UX design, and tech-enabled growth.",
    site: "@motanyaFrancis",
    creator: "@motanyaFrancis",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.motanya.co.ke",
    languages: {
      "en-US": "https://www.motanya.co.ke",
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex relative min-h-screen bg-gray-50">

        {/* Desktop / Tablet Logo */}
        <div className="hidden md:flex fixed top-6 right-0 z-[999] max-w-6xl mx-auto">
          <div className="bg-white px-6 pl-8 py-4 rounded-l-full shadow-lg border border-0 border-r-16 border-emerald-600">
            <Logo className="w-40 h-10"/>
          </div>
        </div>

        <main className="flex-1 ml-0">

          {/* Sidebar (Desktop/Tablet) */}
          <Sidebar />

          {/* Mobile Header */}
          <header className="flex md:hidden items-center justify-between px-4 py-4 sticky top-0 bg-white z-[999]">
            <Logo className='w-32 h-9' />
            <MobileNav />
          </header>

          {/* Page Content */}
          <div className="md:pt-0">
            {children}
          </div>

        </main>
      </body>
    </html>
  )
}
