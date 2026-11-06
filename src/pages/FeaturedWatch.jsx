import React, { useState, useEffect, useRef } from 'react'
import Watch from '../commponets/Watch'

const INTERVAL = 5000 // 5 second

const watches = [
  { name: 'The Meridian', price: '₹89,000', desc: 'Our most requested dress watch. A 40 mm steel case, a deep blue dial and a slim profile that sits easily under a cuff.', dial: '#10202C', face: '#F2EDE5', casec: '#CDB68A', strap: '#3A2A1E' },
  { name: 'The Opaline', price: '₹96,500', desc: 'An ultra-thin 38 mm automatic with an ivory dial. Quiet, light and made for formal evenings.', dial: '#ECE7DB', face: '#1B1613', casec: '#C4C8CF', strap: '#5A3B28' },
  { name: 'The Regatta', price: '₹1,38,000', desc: 'A 43 mm automatic chronograph with a deep navy dial, built for people who like a bolder wrist.', dial: '#1D3556', face: '#F4F2EC', casec: '#B2B9C4', strap: '#142238' },
  { name: 'The Aperture', price: '₹1,85,000', desc: 'A hand-wound skeleton in gold PVD. You can watch the movement work through a double sapphire crystal.', dial: '#17120F', face: '#E6CB84', casec: '#D6B56C', strap: '#2B1D14' },
  { name: 'The Lumen', price: '₹2,10,000', desc: 'A 41 mm titanium skeleton, light on the wrist, with ice-blue hands that stand out on a dark dial.', dial: '#10151C', face: '#9FC3E8', casec: '#8E97A7', strap: '#1A1F27' },
]

function FeaturedWatches({ onView }) {
  const n = watches.length
  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)
  const [stopped, setStopped] = useState(false)
  const touchX = useRef(null)

  const go = (k) => setI((k + n) % n)

  // auto slide (i dependency: manual change par timer dobara shuru hota hai)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (hover || stopped || reduce) return
    const id = setInterval(() => setI((p) => (p + 1) % n), INTERVAL)
    return () => clearInterval(id)
  }, [hover, stopped, i, n])

  // touch swipe
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section
      id="featured"
      aria-roledescription="carousel"
      aria-label="Featured watches"
      className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
    >
      <div
        className="relative m-3 overflow-hidden border border-[#CDAE68]/35 bg-[var(--cab)] text-[var(--cab-ink)] outline outline-1 outline-offset-8 outline-[#CDAE68]/20"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* slides */}
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {watches.map((w, k) => (
            <article
              key={w.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${k + 1} of ${n}`}
              aria-hidden={k !== i}
              className="grid w-full shrink-0 grid-cols-1 pb-20 lg:grid-cols-2"
            >
              {/* watch */}
              <div className="grid place-items-center bg-[radial-gradient(circle_at_50%_45%,#3C2B1C,transparent_70%)] p-10 lg:p-14">
                <Watch
                  dial={w.dial}
                  face={w.face}
                  casec={w.casec}
                  strap={w.strap}
                  className="w-[62%] max-w-[300px] drop-shadow-[0_36px_36px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* text */}
              <div className="flex flex-col justify-center gap-4 p-10 lg:p-14">
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none">{w.name}</h2>
                <p className="font-display text-3xl text-[var(--gl)]">{w.price}</p>
                <p className="max-w-[42ch] opacity-75">{w.desc}</p>
                <div>
                  <button
                    tabIndex={k === i ? 0 : -1}
                    onClick={() => onView?.(w)}
                    className="border border-[var(--gold)] bg-[var(--gold)] px-8 py-3.5 font-medium tracking-wide text-white transition hover:bg-transparent hover:text-[var(--gl)]"
                  >
                    View details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* controls */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
          <button
            aria-label="Previous watch"
            onClick={() => go(i - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#CDAE68]/50 text-xl transition hover:bg-[var(--gl)] hover:text-[var(--cab)]"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {watches.map((w, k) => (
              <button
                key={w.name}
                aria-label={`Go to ${w.name}`}
                aria-current={k === i}
                onClick={() => go(k)}
                className={`h-2 rounded-full transition-all duration-300 ${k === i ? 'w-8 bg-[var(--gl)]' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>

          <button
            aria-label="Next watch"
            onClick={() => go(i + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#CDAE68]/50 text-xl transition hover:bg-[var(--gl)] hover:text-[var(--cab)]"
          >
            ›
          </button>

          <button
            onClick={() => setStopped((s) => !s)}
            className="ml-2 text-xs opacity-70 hover:opacity-100"
            aria-label={stopped ? 'Play slideshow' : 'Pause slideshow'}
          >
            {stopped ? 'Play' : 'Pause'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWatches