function SectionHeader({ nummer, tittel, undertekst }) {
  return (
    <header className="mb-14">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        <span className="text-emerald-400">{nummer}</span>
        <span className="h-px flex-1 bg-slate-800" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-12 md:items-end">
        <h2 className="md:col-span-7 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          {tittel}
        </h2>
        {undertekst && (
          <p className="md:col-span-5 text-slate-400 leading-relaxed md:text-right">{undertekst}</p>
        )}
      </div>
    </header>
  )
}

export default SectionHeader
