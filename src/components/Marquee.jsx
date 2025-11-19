import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start
    let raf
    const speed = 40 // px/sec
    const step = (ts) => {
      if (!start) start = ts
      const elapsed = (ts - start) / 1000
      el.scrollLeft = (elapsed * speed) % (el.scrollWidth / 2)
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const content = [...items, ...items]

  return (
    <div ref={ref} className="relative overflow-x-scroll no-scrollbar whitespace-nowrap py-2 border-y border-white/10 bg-slate-950/60 backdrop-blur">
      {content.map((txt, i) => (
        <span key={i} className="mx-6 inline-block text-sm tracking-[0.35em] uppercase text-slate-300/80">
          {txt}
        </span>
      ))}
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
    </div>
  )
}
