import React from 'react'

const reviews = [
  { quote: 'I tried six watches on before I chose. Nobody rushed me.', name: 'Rohit M.', owns: 'Meridian owner' },
  { quote: 'The watch matched the photos exactly, and the paperwork was complete.', name: 'Ananya S.', owns: 'Opaline owner' },
  { quote: 'Their workshop serviced my old watch like it was new.', name: 'Vikram T.', owns: 'Tachyon owner' },
]

function Reviews() {
  return (
    <section id="reviews" className="flex w-full justify-center">
      <div className="w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
        <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none">
          What our clients say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {reviews.map((r) => (
            <blockquote key={r.name} className="m-0 border-t border-[var(--gold)] pt-6">
              <p className="mb-4 font-display text-[26px] leading-[1.3]">{r.quote}</p>
              <cite className="text-sm not-italic text-[var(--muted)]">
                {r.name}, {r.owns}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews