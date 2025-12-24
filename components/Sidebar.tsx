'use client'

import { navItems } from '../lib/navigation'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen flex-col items-start justify-center gap-4 z-50 px-2">
      {navItems.map((item, index) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <a
            href={item.href}
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`flex items-center h-12 rounded-full overflow-hidden transition-all duration-300 ease-in-out
              ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:shadow-md'
              }
            `}
            style={{
              width: hoverIndex === index ? '12rem' : '3rem'
            }}
          >
            <item.icon
              size={20}
              strokeWidth={1.25}
              className="flex-shrink-0 ml-3"
            />

            {/* Text only shows on hover, not on active */}
            <span
              className={`ml-3 font-medium whitespace-nowrap transition-opacity duration-300
                ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {item.label}
            </span>
          </a>
        )
      })}
    </aside>
  )
}
