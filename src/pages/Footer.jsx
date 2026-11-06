import React from 'react'

const links = ['Shipping', 'Returns', 'Warranty', 'Contact']

function Footer() {
  return (
    <footer className="flex w-full justify-center bg-[var(--bg)] text-sm text-[var(--muted)]">
      <div className="flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-5 pb-12 pt-9 lg:px-8">
        <span>© 2026 MOHIT Time Gallery. All rights reserved.</span>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-[var(--ink)]">{l}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer