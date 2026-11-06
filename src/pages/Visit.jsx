import React, { useState } from 'react'

const watchNames = ['Meridian', 'Tachyon', 'Aperture', 'Opaline', 'Regatta', 'Lumen']

const info = [
  { label: 'Showroom', value: 'Civil Lines Road, Sagar, India' },
  { label: 'Hours', value: 'Monday to Saturday, 11 am to 8 pm' },
  { label: 'Phone', value: '+91 9039149403' },
]

const empty = { name: '', phone: '', date: '', watch: 'Not sure yet' }

const field =
  'w-full border-0 border-b border-[#F2EDE5]/35 bg-transparent py-2.5 text-[var(--cab-ink)] focus:border-[var(--gl)] focus:outline-none'

function Visit() {
  const [form, setForm] = useState(empty)
  const [done, setDone] = useState(null)
  const today = new Date().toISOString().slice(0, 10)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // yahan apna API / email / Google Sheet ka call laga sakte ho
    setDone(`Thank you, ${form.name.trim()}. We will call you on ${form.phone.trim()} to confirm your viewing on ${form.date}.`)
    setForm(empty)
  }

  return (
    <section id="visit" className="flex w-full justify-center bg-[var(--cab)] text-[var(--cab-ink)]">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

        {/* left: info */}
        <div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-none">
            Book a private viewing.
          </h2>
          <div className="mt-8 grid gap-5 opacity-85">
            {info.map((i) => (
              <div key={i.label}>
                <b className="block font-medium text-[var(--gl)]">{i.label}</b>
                {i.value}
              </div>
            ))}
          </div>
        </div>

        {/* right: form */}
        <form onSubmit={submit} className="grid content-start gap-5">
          <label className="grid gap-1 text-sm opacity-90">
            Full name
            <input required autoComplete="name" value={form.name} onChange={set('name')} className={field} />
          </label>

          <label className="grid gap-1 text-sm opacity-90">
            Phone number
            <input
              required type="tel" autoComplete="tel" inputMode="numeric"
              pattern="[0-9+ ]{10,15}" title="10 digit phone number"
              value={form.phone} onChange={set('phone')} className={field}
            />
          </label>

          <label className="grid gap-1 text-sm opacity-90">
            Preferred date
            <input required type="date" min={today} value={form.date} onChange={set('date')} className={`${field} [color-scheme:dark]`} />
          </label>

          <label className="grid gap-1 text-sm opacity-90">
            Watch you want to see
            <select value={form.watch} onChange={set('watch')} className={field}>
              <option className="text-[#16120F]">Not sure yet</option>
              {watchNames.map((n) => (
                <option key={n} className="text-[#16120F]">{n}</option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="border border-[var(--gold)] bg-[var(--gold)] px-8 py-3.5 font-medium tracking-wide text-white transition hover:bg-transparent hover:text-[var(--gl)]"
          >
            Request a viewing
          </button>

          {done && (
            <div role="status" className="border border-[var(--gl)] p-4">
              {done}
            </div>
          )}
        </form>

      </div>
    </section>
  )
}

export default Visit