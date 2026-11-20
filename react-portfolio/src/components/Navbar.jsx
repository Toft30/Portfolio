import { useState } from 'react'

const lenker = [
  { href: '#about', nr: '01', tekst: 'Om meg' },
  { href: '#projects', nr: '02', tekst: 'Prosjekt' },
  { href: '#skills', nr: '03', tekst: 'Ferdigheiter' },
  { href: '#contact', nr: '04', tekst: 'Kontakt' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="group flex items-center gap-2.5 font-mono text-sm">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-emerald-500 text-slate-950 font-bold transition group-hover:rotate-6">
              ST
            </span>
            <span className="text-slate-300 group-hover:text-white transition">
              toft<span className="text-emerald-400">/</span>folio
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 font-mono text-[13px]">
            {lenker.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group px-3 py-2 text-slate-400 hover:text-white transition-colors"
              >
                <span className="text-emerald-500/70 group-hover:text-emerald-400 mr-1.5">{l.nr}</span>
                {l.tekst}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Opne meny</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h10" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 font-mono" id="mobile-menu">
          {lenker.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-3 py-3 border-b border-slate-800/70 last:border-0 text-slate-300 hover:text-emerald-400"
            >
              <span className="text-xs text-emerald-500">{l.nr}</span>
              <span className="text-lg">{l.tekst}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
