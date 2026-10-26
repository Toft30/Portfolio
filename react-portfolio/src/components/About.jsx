// Legg biletet i public/ (t.d. public/profil.jpg) og set stien her, t.d. './profil.jpg'.
// Så lenge den er null, blir det vist ein plasshaldar med initialar.
const bilete = './Profilbilde.jpg'

const avsnitt = [
  'Eg er Simon, dataingeniørstudent ved Høgskulen på Vestlandet (HVL). Eg har erfaring med programmering, maskinlæring og webutvikling.',
  'Eg held også på å ta sertifiseringar innanfor dataingeniørfeltet, som Azure Fundamentals (AZ-900).',
  'Designet på denne sida og demosidene mine er laga med hjelp av AI, slik at eg kan bruke tida mi på det eg likar best: data og backend.',
]

const fakta = [
  { label: 'Studium', verdi: 'Dataingeniør, HVL' },
  { label: 'Ferdig', verdi: '2027' },
  { label: 'Stad', verdi: 'Bergen' },
  { label: 'Ser etter', verdi: 'Jobb' },
]

function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Om meg</h2>
        <p className="mt-2 text-slate-400">
          Litt om kven eg er og kva eg held på med.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4 flex justify-center md:justify-start">
          {bilete ? (
            <img
              src={bilete}
              alt="Simon Sverre Toft"
              className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border border-slate-700/80 shadow-xl"
            />
          ) : (
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-slate-800/60 border border-dashed border-slate-600 flex items-center justify-center">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">
                ST
              </span>
            </div>
          )}
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
            {avsnitt.map((tekst, index) => (
              <p key={index}>{tekst}</p>
            ))}
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {fakta.map((item) => (
              <div key={item.label} className="bg-slate-800/60 border border-slate-700/80 rounded-xl px-4 py-3">
                <dt className="text-xs font-mono text-emerald-400">{item.label}</dt>
                <dd className="text-slate-200 font-medium">{item.verdi}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
