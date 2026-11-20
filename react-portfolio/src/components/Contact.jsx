import { useState } from 'react'
import SectionHeader from './SectionHeader'

// Hent gratis nøkkel på https://web3forms.com (skriv inn e-posten din, nøkkelen kjem på mail).
// Nøkkelen er laga for å ligge i frontend-kode, så han er trygg å committe.
const WEB3FORMS_KEY = '526c31ff-5c24-4001-8e17-595ff8e66fe4'

const lenker = [
  {
    navn: 'E-post',
    verdi: 'simtoft30@gmail.com',
    href: 'mailto:simtoft30@gmail.com',
    ikon: (
      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    navn: 'GitHub',
    verdi: 'github.com/Toft30',
    href: 'https://github.com/Toft30',
    ikon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    navn: 'LinkedIn',
    verdi: 'simon-sverre-toft',
    href: 'https://www.linkedin.com/in/simon-sverre-toft-5a0183395',
    ikon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
]

const feltKlasse =
  'peer w-full bg-transparent border-0 border-b border-slate-700 px-0 pt-6 pb-2 text-slate-100 placeholder-transparent focus:outline-none focus:border-emerald-400 transition'
const labelKlasse =
  'absolute left-0 top-0 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 peer-focus:text-emerald-400 transition'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Ny melding frå portefølja: ${formData.name}`,
          from_name: 'Portefølje',
          ...formData,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SectionHeader nummer="04 — Kontakt" tittel="La oss snakke" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
        <div className="md:col-span-5 space-y-10">
          <p className="text-lg text-slate-300 leading-relaxed">
            Vil du samarbeide eller slå av ein prat om dataingeniørfag? Ta gjerne kontakt!
          </p>

          <ul className="border-t border-slate-800">
            {lenker.map((l) => (
              <li key={l.navn}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-4 border-b border-slate-800 text-slate-300 hover:text-white transition"
                >
                  <span className="text-emerald-400">{l.ikon}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 w-20">{l.navn}</span>
                  <span className="flex-1 truncate">{l.verdi}</span>
                  <span
                    className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          {status === 'sent' ? (
            <div className="border-l-2 border-emerald-400 pl-6 py-4">
              <p className="font-display text-2xl text-white">Takk for meldinga!</p>
              <p className="mt-2 text-slate-400">Eg svarar så fort som råd.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Namn"
                    className={feltKlasse}
                  />
                  <label htmlFor="name" className={labelKlasse}>
                    Namn
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E-post"
                    className={feltKlasse}
                  />
                  <label htmlFor="email" className={labelKlasse}>
                    E-post
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Melding"
                  className={`${feltKlasse} resize-none`}
                ></textarea>
                <label htmlFor="message" className={labelKlasse}>
                  Melding
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-semibold transition"
                >
                  {status === 'sending' ? 'Sender…' : 'Send melding'}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-400">Noko gjekk gale. Prøv igjen, eller send ein e-post direkte.</p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
