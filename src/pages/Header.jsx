import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../commponets/Button'

const items = [
  { path: '/collection', label: 'Collection' },
  { path: '/showroom', label: 'The Showroom' },
  { path: '/visit', label: 'Visit us' },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full h-20 flex items-center justify-center px-5 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-7xl w-full h-10 flex items-center justify-between gap-2">

        {/* left: menu */}
        <nav className="flex-1 flex items-center justify-start gap-5">
          {items.map((item) => (
            <a  key={item.label} to={item.path} className="links p-2 text-[var(--muted)] hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        {/* center: logo */}
        <div className="logo flex-1 flex items-center justify-center text-[var(--ink)]">
          MOHIT
        </div>

        {/* right: button */}
        <div className="flex-1 flex items-center justify-end">
          <Button text="Book A Viewing" className="text-white sm px-4 py-2" />
        </div>

      </div>
    </header>
  )
}

export default Header