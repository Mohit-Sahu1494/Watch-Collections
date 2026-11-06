const facts = [
  { value: '120+', label: 'Watches on display' },
  { value: '100%', label: 'Authenticity guaranteed' },
  { value: '5 years', label: 'Service warranty' },
  { value: 'Free', label: 'Insured delivery' },
]

function State() {
  return (
    <div className="mx-auto max-w-7xl border-b border-[var(--line)] px-5 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`px-5 py-8 text-center lg:py-9 ${i > 0 ? 'lg:border-l border-[var(--line)]' : ''} ${i % 2 === 1 ? 'border-l border-[var(--line)] lg:border-l' : ''}`}
          >
            <b className="block font-number text-[30px] font-medium leading-tight text-[var(--ink)] lg:text-[38px]">
              {f.value}
            </b>
            <span className="text-sm font-light text-[var(--muted)]">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default State