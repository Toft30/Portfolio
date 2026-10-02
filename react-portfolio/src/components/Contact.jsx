import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Kontaktinformasjon</h2>
        <p className="mt-2 text-slate-400">
          Vil du samarbeide eller slå av ein prat om dataingeniørfag? Ta gjerne kontakt!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Direct Contact Links */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-2">Direkte kontakt</h3>

            <a
              href="mailto:simtoft30@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
            >
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">E-post</div>
                <div className="text-sm font-medium">simtoft30@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/Toft30"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition"
            >
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">GitHub</div>
                <div className="text-sm font-medium">github.com</div>
              </div>
            </a>

            <a
              href="www.linkedin.com/in/simon-sverre-toft-5a0183395"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition"
            >
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">LinkedIn</div>
                <div className="text-sm font-medium">linkedin.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* Simple Contact Form */}
        <div className="md:col-span-7">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Send ein bodskap</h3>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-4 rounded-lg">
                Takk for meldinga! Eg svarar så fort som råd.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ditt namn"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="din.epost@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Kva kan eg hjelpe deg med?"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-md shadow-emerald-500/20"
                >
                  Send melding
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
