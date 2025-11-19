import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle starry/scanline background */}
      <div className="pointer-events-none fixed inset-0 mix-blend-screen opacity-25" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_3px]" />
      </div>

      <Navbar />
      <Hero />

      <Marquee items={[
        'Rebellious Y2K energy',
        'Grunge soundscapes',
        'Neon rain city',
        'Games · Books · Multimedia',
        'Cosmic glitch aesthetic',
        'Futuristic noir vibes',
      ]} />

      <Showcase />

      {/* Callout */}
      <section id="books" className="relative z-20 mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur">
          <h3 className="text-xl font-bold">Sound + Atmosphere</h3>
          <p className="mt-2 text-slate-300 max-w-2xl">Plug in your headphones. We layer rain‑washed ambience with gritty Y2K‑era textures and sub‑bass pulses to pull you into the city.</p>
          <audio className="mt-4 w-full" controls>
            <source src="/grunge-track.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
