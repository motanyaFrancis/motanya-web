'use client'

import { navItems } from '../lib/navigation'
import { useState } from 'react'

export default function Sidebar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen flex-col items-start justify-center gap-4 z-50 px-2">
      {navItems.map((item, index) => (
        <a
          href={item.href}
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className={`flex items-center h-12 rounded-full overflow-hidden
            ${
              item.label === 'Home'
                ? 'bg-emerald-600 text-white '
                : 'bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:shadow-md'
            }
            transition-all duration-300 ease-in-out`}
          style={{ width: hoverIndex === index ? '12rem' : '3rem' }}
        >
          <item.icon size={20} strokeWidth={1.25} className="flex-shrink-0 ml-3" />
          <span
            className={`ml-3 font-medium whitespace-nowrap transition-opacity duration-300 ${
              hoverIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </aside>
  )
}
