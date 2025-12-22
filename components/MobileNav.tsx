'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems } from '@/lib/navigation' 
const links = navItems.map((item) => item.label)

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-emerald-600 text-white p-2 rounded-full"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[90%] bg-white z-50 p-6 transition-transform
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-emerald-600 text-white p-2 rounded-full"
        >
          <X size={18} />
        </button>

        <nav className="h-full inline-grid gap-3 place-content-center mx-auto">
          {navItems.map((item, index) => (
            <a href={item.href}
              key={index}
              className={`w-full py-3 px-4 rounded-full text-left
                ${
                  item.label === 'Home'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
            >
                <span className='flex gap-2 items-center'>

              <item.icon size={18} strokeWidth={1.25} /> {item.label}
                </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
