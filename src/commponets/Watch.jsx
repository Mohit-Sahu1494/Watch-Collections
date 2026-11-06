import React, { useId } from 'react'

/**
 * Props
 * variant : 'dress' | 'chrono' | 'skeleton'
 * dial    : dial ka color
 * face    : hands, markers aur text ka color
 * casec   : case ka color (steel / gold)
 * strap   : strap ka color
 * brand   : dial par likha naam
 */
function Watch({
  variant = 'dress',
  dial = '#11222F',
  face = '#F2EDE5',
  casec = '#CDB68A',
  strap = '#3A2A1E',
  brand = 'Mohit',
  className = '',
}) {
  // har watch ke gradient ids alag rakhne ke liye (ek page par kai watches ho to bhi sahi chalega)
  const uid = useId().replace(/:/g, '')
  const id = (name) => `${name}-${uid}`

  return (
    <svg viewBox="0 0 120 200" className={className} role="img" aria-label={`${brand} watch`}>
      <defs>
        {/* case ki metal chamak */}
        <linearGradient id={id('mt')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" />
          <stop offset=".42" stopColor="#fff" stopOpacity="0" />
          <stop offset=".62" stopColor="#000" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        {/* dial ki roshni */}
        <radialGradient id={id('sh')} cx=".3" cy=".25" r=".95">
          <stop offset="0" stopColor="#fff" stopOpacity=".3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        {/* dial ke kinaron ka andhera */}
        <radialGradient id={id('vg')} cx=".5" cy=".5" r=".5">
          <stop offset=".55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </radialGradient>
        {/* strap ki shading */}
        <linearGradient id={id('sg')} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".4" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".14" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </linearGradient>
      </defs>

      {/* ---------- Strap ---------- */}
      <rect x="38" y="0" width="44" height="64" rx="5" fill={strap} />
      <rect x="38" y="136" width="44" height="64" rx="5" fill={strap} />
      <rect x="38" y="0" width="44" height="64" rx="5" fill={`url(#${id('sg')})`} />
      <rect x="38" y="136" width="44" height="64" rx="5" fill={`url(#${id('sg')})`} />
      {/* stitching */}
      <path
        d="M43 5V58M77 5V58M43 142V195M77 142V195"
        stroke="#E6D3A3" strokeOpacity=".55" strokeWidth=".8" strokeDasharray="2 2"
      />

      {/* ---------- Crown, case, bezel ---------- */}
      <rect x="108" y="93" width="9" height="14" rx="2" fill={casec} stroke="#000" strokeOpacity=".4" strokeWidth=".6" />
      <circle cx="60" cy="100" r="53" fill={casec} />
      <circle cx="60" cy="100" r="53" fill={`url(#${id('mt')})`} />
      <circle cx="60" cy="100" r="46.5" fill={casec} />
      <circle cx="60" cy="100" r="46.5" fill={`url(#${id('mt')})`} opacity=".7" transform="rotate(180 60 100)" />

      {/* ---------- Dial ---------- */}
      <circle cx="60" cy="100" r="43" fill={dial} />
      <circle cx="60" cy="100" r="43" fill={`url(#${id('sh')})`} />
      <circle cx="60" cy="100" r="43" fill={`url(#${id('vg')})`} />

      {/* minute ticks (60) */}
      <circle
        cx="60" cy="100" r="39" fill="none" stroke={face} strokeWidth="2"
        strokeDasharray=".5 3.53" opacity=".6" transform="rotate(-90 60 100)"
      />
      {/* hour markers (12) */}
      <circle
        cx="60" cy="100" r="35.5" fill="none" stroke={face} strokeWidth="6"
        strokeDasharray="1.6 16.99" strokeDashoffset=".8" transform="rotate(-90 60 100)"
      />

      {/* brand name */}
      <text x="60" y="81" textAnchor="middle" fontSize="5" letterSpacing="1.3" fill={face} fontFamily="Italiana, Georgia, serif">
        {brand}
      </text>

      {/* ---------- Variant details ---------- */}
      {variant === 'dress' && (
        <>
          {/* date window */}
          <rect x="76" y="96.5" width="9" height="7" fill="#F4F2EC" stroke="#000" strokeOpacity=".4" strokeWidth=".4" />
          <text x="80.5" y="102.2" textAnchor="middle" fontSize="5" fill="#16120F" fontFamily="Jost, sans-serif">12</text>
        </>
      )}

      {variant === 'chrono' && (
        <>
          {/* 3 chhote dials */}
          <g fill="#000" fillOpacity=".22" stroke={face} strokeWidth=".7">
            <circle cx="60" cy="118" r="7.5" />
            <circle cx="45" cy="97" r="7.5" />
            <circle cx="75" cy="97" r="7.5" />
          </g>
          <g stroke={face} strokeWidth=".8" strokeLinecap="round">
            <path d="M60 118L60 112.5M45 97L49 94M75 97L72 101" />
          </g>
        </>
      )}

      {variant === 'skeleton' && (
        <>
          {/* andar ke gears */}
          <circle cx="60" cy="100" r="30" fill={dial} opacity=".55" />
          <circle cx="48" cy="112" r="11" fill="none" stroke={face} strokeWidth="3" strokeDasharray="1.4 1.4" opacity=".9" />
          <circle cx="72" cy="90" r="9" fill="none" stroke={face} strokeWidth="3" strokeDasharray="1.4 1.4" opacity=".9" />
          <circle cx="60" cy="100" r="20" fill="none" stroke={face} strokeWidth=".8" opacity=".7" />
          <path d="M60 80L60 120M40 100L80 100" stroke={face} strokeWidth=".6" opacity=".6" />
        </>
      )}

      {/* ---------- Hands (10:10 ka time) ---------- */}
      <path d="M60 104L56.5 78L60 67L63.5 78Z" fill={face} stroke="#000" strokeOpacity=".3" strokeWidth=".4" transform="rotate(-55 60 100)" />
      <path d="M60 106L58.7 72L60 59L61.3 72Z" fill={face} stroke="#000" strokeOpacity=".3" strokeWidth=".4" transform="rotate(60 60 100)" />
      <line x1="60" y1="111" x2="60" y2="62" stroke="#C0463A" strokeWidth=".7" transform="rotate(150 60 100)" />
      <circle cx="60" cy="100" r="2.6" fill={face} />
      <circle cx="60" cy="100" r="1" fill="#C0463A" />

      {/* glass reflection */}
      <path d="M28 76A42 42 0 0 1 80 60L40 112Z" fill="#fff" opacity=".07" />
    </svg>
  )
}

export default Watch