function Hero() {
  return (
    <section id="hero" className="py-20 md:py-28 text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Dataingeniør & Utviklar
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hei, eg bygger <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">skalerbare datastrukturar</span> og moderne løsningar.
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed" id="about">
            Som dataingeniør har eg fokus på å transformere rådata til innsikt gjennom robuste pipelines, effektiv datamodellering, og rein systemarkitektur. Eg brenn for effektiv databehandling, ETL/ELT, skyteknologi og skalerbar programvare.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition shadow-lg shadow-emerald-500/25"
            >
              Sjå prosjekta mine
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition"
            >
              Ta kontakt
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-full max-w-xs bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 shadow-xl backdrop-blur-sm">
            <div className="text-xs font-mono text-emerald-400 mb-2">// DataEngineer.java</div>
            <pre className="text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
{`DataEngineer engineer = new DataEngineer(
    "Simon",
    List.of(
        "Python", "Java", "SQL",
        "PySpark", "Apache Kafka",
        "Apache Airflow", "dbt",
        "PostgreSQL", "Snowflake",
        "Docker", "AWS", "React"
    ),
    "Klar for utfordringar!"
);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
