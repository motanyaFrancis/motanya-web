
import { navItems } from '../lib/navigation'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[90px] flex-col items-center justify-center gap-4 z-50">
      {navItems.map((item, index) => (
        <a href={item.href}
          key={index}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-full
            ${
              item.label === 'Home'
                ? 'bg-emerald-600 text-white '
                : 'bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-300 hover:shadow-md'
            }`}
        >
          <item.icon size={20} strokeWidth={1.25} />
        </a>
      ))}
    </aside>
  )
}
