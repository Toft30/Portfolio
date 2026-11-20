const meta = [
  { label: 'Rolle', verdi: 'Dataingeniørstudent' },
  { label: 'Base', verdi: 'Bergen, NO' },
  { label: 'Fokus', verdi: 'Backend & data' },
  { label: 'Status', verdi: 'Open for jobb', aktiv: true },
]

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-left">
        <p className="font-mono text-sm text-emerald-400">
          <span className="text-slate-500">~/portfolio $</span> whoami
        </p>

        <h1 className="mt-6 font-display font-bold tracking-tight text-white leading-[0.95] text-[clamp(3rem,10vw,7.5rem)]">
          Simon Sverre
          <br />
          <span className="text-slate-500">Toft</span>
          <span className="text-emerald-400">.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 max-w-2xl space-y-5">
            <p className="text-2xl text-slate-200 leading-snug">
              Hei, eg bygger <span className="text-emerald-400">skalerbare datastrukturar</span> og{' '}
              <span className="caret">moderne løysingar</span>
            </p>
            <p className="text-slate-400 leading-relaxed">
              Eg er ein lidenskapeleg dataingeniør og utviklar med erfaring innan både frontend og backend. Eg har ein
              sterk interesse for å skape effektive, skalerbare og moderne løysingar som kan gjere ein forskjell, og er
              alltid på utkikk etter nye utfordringar og moglegheiter til å lære.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition"
            >
              Sjå prosjekta
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 rounded-md border border-slate-700 hover:border-emerald-500/60 text-slate-200 font-medium transition"
            >
              Ta kontakt
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-slate-800">
          {meta.map((m, i) => (
            <div
              key={m.label}
              className={`py-5 pr-4 ${i % 2 === 1 ? 'pl-4 border-l border-slate-800' : ''} ${
                i > 0 ? 'md:pl-4 md:border-l md:border-slate-800' : ''
              } ${i > 1 ? 'border-t border-slate-800 md:border-t-0' : ''}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{m.label}</dt>
              <dd className="mt-1.5 flex items-center gap-2 text-slate-200">
                {m.aktiv && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                )}
                {m.verdi}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
