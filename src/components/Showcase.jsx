import { Play, Book, Sparkles } from 'lucide-react'

function Card({ title, subtitle, tag, icon: Icon, href }) {
  return (
    <a href={href} className="group relative block rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition overflow-hidden">
      <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/0 via-fuchsia-600/10 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition" />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-300/70">{tag}</div>
            <div className="mt-1 text-xl font-bold text-white">{title}</div>
            <div className="text-slate-300/80">{subtitle}</div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Showcase() {
  return (
    <section id="games" className="relative z-20 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-fuchsia-400" />
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">What we make</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="Immersive, moody, neon‑drenched"
          subtitle="PC/Console titles that blend story with style."
          tag="Games"
          icon={Play}
          href="#contact"
        />
        <Card
          title="Cyber pulp, analog dreams"
          subtitle="Short runs, art books, and graphic novels."
          tag="Books"
          icon={Book}
          href="#books"
        />
      </div>
    </section>
  )
}
