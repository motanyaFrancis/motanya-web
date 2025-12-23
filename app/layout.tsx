import { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: "Motanya",
  description: "Innovation, with a Twist",
  icons: {
    icon: "/favicon.ico",
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
          <div className="bg-white px-6 py-4 rounded-l-full shadow-lg border border-0 border-r-16 border-emerald-600">
            <Logo className="w-40 h-9"/>
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
