import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dark neon glass overlay for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,0,255,0.15),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(0,255,255,0.12),transparent_40%)]" />

      {/* content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-[0_0_40px_rgba(0,255,255,0.25)]">
            Neo‑Noir Entertainment
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            A rebellious Y2K-era studio shaping games and books with a glitchy cosmic twist. We mix neon grit, rain-soaked skylines, and underground beats.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#games" className="px-5 py-3 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_25px_rgba(255,0,255,0.35)] transition">Explore Games</a>
            <a href="#books" className="px-5 py-3 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 font-semibold border border-cyan-400/30 backdrop-blur transition">Browse Books</a>
          </div>
        </div>
      </div>

      {/* gradient edge for depth; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.9),transparent_35%)]" />
    </section>
  )
}
