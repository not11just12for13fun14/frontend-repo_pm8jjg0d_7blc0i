import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group">
            <div className="text-2xl font-extrabold tracking-[0.2em] uppercase">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(255,0,255,0.25)]">
                Neo‑Noir
              </span>
              <span className="ml-2 text-slate-200/90">Entertainment</span>
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#games" className="text-slate-200 hover:text-white transition">Games</a>
            <a href="#books" className="text-slate-200 hover:text-white transition">Books</a>
            <a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a>
          </nav>

          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            <a href="#games" className="text-slate-200">Games</a>
            <a href="#books" className="text-slate-200">Books</a>
            <a href="#contact" className="text-slate-200">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
