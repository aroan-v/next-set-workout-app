'use client'
import { devLog } from '@/lib/logger'
import { Home, Dumbbell, Trophy, BookOpen } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Dumbbell, label: 'Workout', path: '/workout' },
  { icon: Trophy, label: 'Challenges', path: '/challenges' },
  { icon: BookOpen, label: 'Articles', path: '/articles' },
]

function DockV2() {
  const router = useRouter()

  const pathname = usePathname()
  const [lastSelected, setLastSelected] = React.useState(pathname || '/home')

  devLog('Dock - pathname', pathname)

  function handleClick(path) {
    devLog('Dock - path', path)
    router.push(path)
    setLastSelected(path)
  }

  devLog('Dock lastSelected', lastSelected)

  return (
    <nav className="bg-card/90 shadow-card fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-6 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleClick(item.path)}
            className={`flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition-all duration-300 ${
              lastSelected === item.path
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden text-xs font-medium sm:block">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default DockV2
