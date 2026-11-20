import SectionHeader from './SectionHeader'

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
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SectionHeader nummer="01 — Om meg" tittel="Litt om meg" undertekst="Kven eg er og kva eg held på med." />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <figure className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-emerald-500/50"
              aria-hidden="true"
            />
            {bilete ? (
              <img
                src={bilete}
                alt="Simon Sverre Toft"
                className="relative w-60 h-72 md:w-64 md:h-80 rounded-lg object-cover grayscale-[35%] hover:grayscale-0 transition duration-500"
              />
            ) : (
              <div className="relative w-60 h-72 md:w-64 md:h-80 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-emerald-400">ST</span>
              </div>
            )}
          </div>
        </figure>

        <div className="md:col-span-8 space-y-10">
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            {avsnitt.map((tekst, index) => (
              <p key={index} className={index === 0 ? 'text-xl text-slate-100' : ''}>
                {tekst}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 border-y border-slate-800">
            {fakta.map((item, i) => (
              <div
                key={item.label}
                className={`py-4 pr-3 ${i > 0 ? 'sm:pl-4 sm:border-l sm:border-slate-800' : ''} ${
                  i % 2 === 1 ? 'pl-4 border-l border-slate-800' : ''
                }`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">{item.label}</dt>
                <dd className="mt-1 text-slate-200 font-medium">{item.verdi}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
