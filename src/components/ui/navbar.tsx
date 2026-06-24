import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems, siteLogo } from '@/data/site-content'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="relative z-20">
          <img
            src={siteLogo}
            alt="Confluential Films"
            className="h-8 w-auto md:h-10"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] tracking-[0.22em] text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="relative z-20 rounded-full border border-white/25 bg-black/15 text-white backdrop-blur md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {menuOpen && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/15 bg-black/90 p-6 text-white shadow-2xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-[0.22em]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
