import React from 'react'

/* ---------- Watch illustration (SVG) ---------- */
function Watch({ dial = '#11222F', face = '#F2EDE5', casec = '#CDB68A', strap = '#3A2A1E', className = '' }) {
  return (
    <svg viewBox="0 0 120 200" className={className} role="img" aria-label="Featured watch">
      <defs>
        <linearGradient id="mt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" />
          <stop offset=".42" stopColor="#fff" stopOpacity="0" />
          <stop offset=".62" stopColor="#000" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <radialGradient id="sh" cx=".3" cy=".25" r=".95">
          <stop offset="0" stopColor="#fff" stopOpacity=".3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vg" cx=".5" cy=".5" r=".5">
          <stop offset=".55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </radialGradient>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".4" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".14" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </linearGradient>
      </defs>

      {/* strap */}
      <rect x="38" y="0" width="44" height="64" rx="5" fill={strap} />
      <rect x="38" y="136" width="44" height="64" rx="5" fill={strap} />
      <rect x="38" y="0" width="44" height="64" rx="5" fill="url(#sg)" />
      <rect x="38" y="136" width="44" height="64" rx="5" fill="url(#sg)" />
      <path d="M43 5V58M77 5V58M43 142V195M77 142V195" stroke="#E6D3A3" strokeOpacity=".55" strokeWidth=".8" strokeDasharray="2 2" />

      {/* crown + case + bezel */}
      <rect x="108" y="93" width="9" height="14" rx="2" fill={casec} stroke="#000" strokeOpacity=".4" strokeWidth=".6" />
      <circle cx="60" cy="100" r="53" fill={casec} />
      <circle cx="60" cy="100" r="53" fill="url(#mt)" />
      <circle cx="60" cy="100" r="46.5" fill={casec} />
      <circle cx="60" cy="100" r="46.5" fill="url(#mt)" opacity=".7" transform="rotate(180 60 100)" />

      {/* dial */}
      <circle cx="60" cy="100" r="43" fill={dial} />
      <circle cx="60" cy="100" r="43" fill="url(#sh)" />
      <circle cx="60" cy="100" r="43" fill="url(#vg)" />
      <circle cx="60" cy="100" r="39" fill="none" stroke={face} strokeWidth="2" strokeDasharray=".5 3.53" opacity=".6" transform="rotate(-90 60 100)" />
      <circle cx="60" cy="100" r="35.5" fill="none" stroke={face} strokeWidth="6" strokeDasharray="1.6 16.99" strokeDashoffset=".8" transform="rotate(-90 60 100)" />
      <text x="60" y="81" textAnchor="middle" fontSize="5" letterSpacing="1.3" fill={face} fontFamily="Italiana, Georgia, serif">MOHIT</text>

      {/* date window */}
      <rect x="76" y="96.5" width="9" height="7" fill="#F4F2EC" stroke="#000" strokeOpacity=".4" strokeWidth=".4" />
      <text x="80.5" y="102.2" textAnchor="middle" fontSize="5" fill="#16120F">12</text>

      {/* hands */}
      <path d="M60 104L56.5 78L60 67L63.5 78Z" fill={face} stroke="#000" strokeOpacity=".3" strokeWidth=".4" transform="rotate(-55 60 100)" />
      <path d="M60 106L58.7 72L60 59L61.3 72Z" fill={face} stroke="#000" strokeOpacity=".3" strokeWidth=".4" transform="rotate(60 60 100)" />
     <line className="second-hand" x1="60" y1="111" x2="60" y2="62" stroke="#C0463A" strokeWidth=".7" transform="rotate(150 60 100)"
      style={{
      transformOrigin: '60px 100px',
      animation: 'clock-tick 60s linear infinite'}}/>
      <circle cx="60" cy="100" r="2.6" fill={face} />
      <circle cx="60" cy="100" r="1" fill="#C0463A" />
      {/* glass reflection */}
      <path d="M28 76A42 42 0 0 1 80 60L40 112Z" fill="#fff" opacity=".07" />
    </svg>
  )
}

/* ---------- Callout label ---------- */
function Callout({ text, className = '', reverse = false }) {
  return (
    <div className={`absolute z-10 hidden lg:flex items-center gap-2.5 text-[13px] opacity-80 ${reverse ? 'flex-row-reverse' : ''} ${className}`}>
      <span className="block h-px w-14 bg-[var(--gl)]" />
      {text}
    </div>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-20 text-[var(--cab-ink)] bg-[radial-gradient(ellipse_at_72%_50%,#3A2A1C_0,var(--cab)_62%)]"
    >
      {/* thin gold frame */}
      <div className="pointer-events-none absolute inset-3 md:inset-6 border border-[#CDAE68]/30" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">

        {/* left: text */}
        <div className="order-2 lg:order-1">
          <h1 className="font-display text-[clamp(3.2rem,7.4vw,6.8rem)] leading-none tracking-tight">
            Fine watches, viewed in person.
          </h1>
          <p className="mt-7 mb-9 max-w-[40ch] text-lg opacity-75">
            A private showroom for mechanical and complication watches. Try each piece on, ask anything, and take your time.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#collection" className="bg-[var(--gold)] border border-[var(--gold)] text-white px-8 py-3.5 font-medium tracking-wide transition hover:bg-transparent hover:text-[var(--gl)]">
              View the collection
            </a>
            <a href="#visit" className="border border-[#F2EDE5]/50 px-8 py-3.5 font-medium tracking-wide transition hover:bg-[var(--cab-ink)] hover:text-[var(--cab)]">
              Book a viewing
            </a>
          </div>
        </div>

        {/* right: watch */}
        <div className="relative order-1 mx-auto grid aspect-square w-full max-w-[420px] place-items-center lg:order-2 lg:max-w-none">
          <div className="absolute aspect-square w-[78%] rounded-full border border-[#CDAE68]/25" />
          <Watch className="relative z-[1] w-[66%] max-w-[360px] drop-shadow-[0_50px_50px_rgba(0,0,0,0.65)]" />
          <div className="glint pointer-events-none absolute inset-0 z-[2]" />

          <Callout text="Sapphire crystal" className="top-[20%] left-0" />
          <Callout text="Swiss automatic" className="top-1/2 right-0" reverse />
          <Callout text="40 mm steel case" className="bottom-[16%] left-[2%]" />
        </div>

      </div>
    </section>
  )
}

export default Hero