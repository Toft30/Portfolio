import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-xl font-bold tracking-tight text-blue-400 hover:text-blue-300">
              ToftPortfolio<span className="text-slate-400">.no</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#about"
                className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Om meg
              </a>
              <a
                href="#projects"
                className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Prosjekt
              </a>
              <a
                href="#skills"
                className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Ferdigheiter
              </a>
              <a
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Opne meny</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900 px-2 pt-2 pb-3 space-y-1 sm:px-3" id="mobile-menu">
          <a
            href="#about"
            onClick={closeMenu}
            className="block hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Om meg
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Prosjekt
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="block hover:bg-slate-800 hover:text-emerald-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Ferdigheiter
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
