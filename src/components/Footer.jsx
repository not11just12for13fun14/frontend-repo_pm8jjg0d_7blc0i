export default function Footer() {
  return (
    <footer id="contact" className="relative z-20 mt-10 border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-white font-black tracking-[0.25em] uppercase">Neo‑Noir</div>
            <p className="text-slate-400 text-sm mt-2">© {new Date().getFullYear()} Neo‑Noir Entertainment. All rights reserved.</p>
          </div>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Discord</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
