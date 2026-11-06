import React, { useState, useEffect, useRef } from 'react'
import Watch from '../commponets/Watch'

const filters = ['All', 'Dress', 'Chronograph', 'Skeleton']

const watches = [
  { name: 'Meridian', type: 'Dress', variant: 'dress', price: '₹89,000', dial: '#10202C', face: '#F2EDE5', casec: '#CDB68A', strap: '#3A2A1E', movement: 'Automatic, 40-hour reserve', size: '40 mm steel', glass: 'Domed sapphire' },
  { name: 'Tachyon', type: 'Chronograph', variant: 'chrono', price: '₹1,24,000', dial: '#1C2B22', face: '#EDE7D3', casec: '#BCC1C9', strap: '#171412', movement: 'Automatic chronograph', size: '42 mm steel', glass: 'Flat sapphire' },
  { name: 'Aperture', type: 'Skeleton', variant: 'skeleton', price: '₹1,85,000', dial: '#17120F', face: '#E6CB84', casec: '#D6B56C', strap: '#2B1D14', movement: 'Hand-wound skeleton', size: '41 mm gold PVD', glass: 'Double sapphire' },
  { name: 'Opaline', type: 'Dress', variant: 'dress', price: '₹96,500', dial: '#ECE7DB', face: '#1B1613', casec: '#C4C8CF', strap: '#5A3B28', movement: 'Ultra-thin automatic', size: '38 mm steel', glass: 'Domed sapphire' },
  { name: 'Regatta', type: 'Chronograph', variant: 'chrono', price: '₹1,38,000', dial: '#1D3556', face: '#F4F2EC', casec: '#B2B9C4', strap: '#142238', movement: 'Automatic chronograph', size: '43 mm steel', glass: 'Flat sapphire' },
  { name: 'Lumen', type: 'Skeleton', variant: 'skeleton', price: '₹2,10,000', dial: '#10151C', face: '#9FC3E8', casec: '#8E97A7', strap: '#1A1F27', movement: 'Hand-wound skeleton', size: '41 mm titanium', glass: 'Double sapphire' },
  { name: 'Meridian', type: 'Dress', variant: 'dress', price: '₹89,000', dial: '#10202C', face: '#F2EDE5', casec: '#CDB68A', strap: '#3A2A1E', movement: 'Automatic, 40-hour reserve', size: '40 mm steel', glass: 'Domed sapphire' },
  { name: 'Tachyon', type: 'Chronograph', variant: 'chrono', price: '₹1,24,000', dial: '#1C2B22', face: '#EDE7D3', casec: '#BCC1C9', strap: '#171412', movement: 'Automatic chronograph', size: '42 mm steel', glass: 'Flat sapphire' },
  { name: 'Aperture', type: 'Skeleton', variant: 'skeleton', price: '₹1,85,000', dial: '#17120F', face: '#E6CB84', casec: '#D6B56C', strap: '#2B1D14', movement: 'Hand-wound skeleton', size: '41 mm gold PVD', glass: 'Double sapphire' },
  { name: 'Opaline', type: 'Dress', variant: 'dress', price: '₹96,500', dial: '#ECE7DB', face: '#1B1613', casec: '#C4C8CF', strap: '#5A3B28', movement: 'Ultra-thin automatic', size: '38 mm steel', glass: 'Domed sapphire' },
  { name: 'Regatta', type: 'Chronograph', variant: 'chrono', price: '₹1,38,000', dial: '#1D3556', face: '#F4F2EC', casec: '#B2B9C4', strap: '#142238', movement: 'Automatic chronograph', size: '43 mm steel', glass: 'Flat sapphire' },
  { name: 'Lumen', type: 'Skeleton', variant: 'skeleton', price: '₹2,10,000', dial: '#10151C', face: '#9FC3E8', casec: '#8E97A7', strap: '#1A1F27', movement: 'Hand-wound skeleton', size: '41 mm titanium', glass: 'Double sapphire' },
]

/* ---------- Details popup ---------- */
function WatchDialog({ watch, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const d = ref.current
    if (watch && d && !d.open) d.showModal()
  }, [watch])

  if (!watch) return null

  const msg = encodeURIComponent(`Hello, I would like to enquire about the ${watch.name} (${watch.price}).`)
  const rows = [
    ['Collection', watch.type],
    ['Movement', watch.movement],
    ['Case', watch.size],
    ['Glass', watch.glass],
  ]

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-label={`${watch.name} details`}
      className="m-auto w-[min(880px,calc(100%-28px))] max-h-[calc(100%-28px)] overflow-auto border border-[var(--gold)] bg-[var(--surface)] p-0 text-[var(--ink)] backdrop:bg-black/75"
    >
      <button
        onClick={() => ref.current.close()}
        aria-label="Close"
        className="absolute cursor-pointer hover:border-[var(--line)] right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-xl leading-none"
      >
        ×
      </button>

      <div className="grid md:grid-cols-2">
        <div className="grid place-items-center bg-[radial-gradient(circle_at_50%_38%,#3C2B1C,var(--cab)_72%)] p-10">
          <Watch variant={watch.variant} dial={watch.dial} face={watch.face} casec={watch.casec} strap={watch.strap}
            className="w-[68%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)]" />
        </div>

        <div className="flex flex-col gap-2.5 p-8 md:p-10">
          <h3 className="font-display text-5xl leading-none">{watch.name}</h3>
          <p className="text-xl font-medium text-[var(--gold)]">{watch.price}</p>

          <dl className="my-3">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-[var(--line)] py-2.5 text-[15px]">
                <dt className="text-[var(--muted)]">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href={`https://wa.me/910000000000?text=${msg}`}
            target="_blank" rel="noopener noreferrer"
            className="border border-[var(--gold)] bg-[var(--gold)] px-8 py-3.5 text-center font-medium tracking-wide text-white transition hover:bg-transparent hover:text-[var(--gold)]"
          >
            Enquire on WhatsApp
          </a>
          <a
            href="#visit"
            onClick={() => ref.current.close()}
            className="border border-[var(--ink)] px-8 py-3.5 text-center font-medium tracking-wide transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          >
            Book a viewing
          </a>
        </div>
      </div>
    </dialog>
  )
}

/* ---------- Collections ---------- */
function Collections() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const list = active === 'All' ? watches : watches.filter((w) => w.type === active)

  return (
    <section id="collection" className="flex h-auto w-full justify-center">
      <div className="h-full w-full max-w-7xl p-3 lg:px-8 py-16 lg:py-24">

        {/* heading */}
        <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none">The collection</h2>

        <div className="mt-4 flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[44ch] text-[var(--muted)]">
            Select a watch to see its details, then enquire or book a viewing.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 md:justify-end" role="group" aria-label="Filter watches">
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={active === item}
                onClick={() => setActive(item)}
                className={`cursor-pointer rounded-full border px-5 py-2 text-sm transition ${
                  active === item
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]'
                    : 'border-[var(--line)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* cabinet: brass frame */}
        <div className="mt-10 bg-[linear-gradient(135deg,#6B5428,#E0C98C_40%,#7A6030_70%,#C9A862)] p-3 md:p-3.5">
          <div className="relative grid grid-cols-2 bg-gradient-to-b from-[#221A14] to-[var(--cab)] text-[var(--cab-ink)] lg:grid-cols-3">

            {list.map((w) => (
              <button
                key={w.name}
                onClick={() => setSelected(w)}
                aria-label={`View ${w.name}`}
                className="group relative cursor-pointer flex flex-col items-center border-r border-white/[0.07] px-3 pt-8 text-center md:px-4 md:pt-10"
              >
                {/* spotlight */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(ellipse_at_50%_0,rgba(255,224,160,0.34),transparent_68%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

                <Watch
                  variant={w.variant} dial={w.dial} face={w.face} casec={w.casec} strap={w.strap}
                  className="relative mt-3 w-[56%] md:w-[48%] drop-shadow-[0_22px_20px_rgba(0,0,0,0.6)]"
                />

                {/* nameplate */}
                <span className="relative mt-7 w-full border-t-2 border-[#C9A862] bg-gradient-to-b from-[#2B2018] to-[#18110D] px-2 pb-6 pt-5">
                  <span className="block font-display text-2xl md:text-[28px] leading-tight">{w.name}</span>
                  <span className="block text-sm opacity-70">{w.type}</span>
                  <span className="mt-0.5 block text-[var(--gl)]">{w.price}</span>
                </span>
              </button>
            ))}

            {/* glass reflection */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.06),transparent_28%,transparent_70%,rgba(255,255,255,0.04))]" />
          </div>
        </div>
      </div>

      <WatchDialog watch={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Collections