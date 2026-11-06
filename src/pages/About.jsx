import React from 'react'

const points = [
  { label: 'Movements', value: 'Swiss and Japanese automatic' },
  { label: 'Service', value: 'In-house workshop' },
  { label: 'Paperwork', value: 'Warranty card and invoice with every watch' },
  { label: 'Payment', value: 'UPI, cards, bank transfer, EMI' },
]

function About() {
  return (
    <section id="about" className="flex w-full justify-center">
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:pb-24">

        {/* left: heading + text */}
        <div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none">
            Every watch, checked by hand.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[var(--muted)]">
            Our watchmakers inspect, regulate and photograph each piece before it enters the cabinet.
            What you see here is what you will wear.
          </p>
        </div>

        {/* right: points */}
        <dl className="border-t border-[var(--ink)]">
          {points.map((p) => (
            <div
              key={p.label}
              className="flex justify-between gap-4 border-b border-[var(--line)] py-5"
            >
              <dt className="text-[var(--muted)]">{p.label}</dt>
              <dd className="text-right">{p.value}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}

export default About