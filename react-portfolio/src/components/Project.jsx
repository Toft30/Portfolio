import SectionHeader from './SectionHeader'

const projectsData = [
{
    id: 1,
    title: 'EzReg',
    description:
       'Eit automatisk registreringsystem for mindre byggområder som krever manuelt innsjekk på telefon. Planen er å bruke Esp 32 og Bluetooth Beacons for automatisk registrering. Det skal da ver kopla opp mot ein nettside som viser om arbeidar er på byggplass, når dei har kome og dei har gått. Side og git kjem seinare',
          techStack: [],
          githubUrl: '',
          demoUrl: '',
  },

  {
    id: 2,
    title: 'ODIN - Operational Data & Intelligence Node',
    description:
       'Ein lokal smart AI Assistent som skal kunne gjer småoppgåver for deg. Har brukt ein anna github for inspo for eg er ikkje Tony Stark. Eller har eg koda med claude og google jules for å få ein AI som kan: lære dialekta din etter tid, redigere i kalender, rydde opp og lese over uleste eposeter i innboks også lese og sende epost med din godkjenning. Framtidige funksjoner er ikkje bestemt enda, og eg kjem til å forbetre funksjonane den allereie har',
          techStack: ['Java', 'Spring', 'LangChain', 'PostgreSQL'],
          githubUrl: 'https://github.com/Toft30/AI-manager.git',
          underArbeid: true,

  },

{
  id: 3,
  title: 'BookingSide',
  description:
  'Ein enkel bookingside som eg har laga for å lære meg meir om Spring. Prosjektet mitt vil ver ein bookingside med rom fra HVL som eksempel',
techStack: ['Java', 'Spring', 'Hash', 'JavaScript'],
githubUrl: 'https://github.com/Toft30/BookingSide',
underArbeid: true,
},

  {
    id: 4,
    title: 'VærSide',
    description:
      'Ei lita side som kan vise vær, temp, vindhastigheit til forskjellige byar. Bruker OpenWeather API for å hente data. Sidan er laga med React og Spring Boot. Eg brukte AI for å lage design for det orkar ikkje eg :)',
    techStack: ['Java', 'Spring', 'React'],
    githubUrl: 'https://github.com/Toft30/VaerApp.git',
    demoUrl: 'https://toft30.github.io/VaerApp/',
  },

{
    id: 5,
    title: 'Pokedex ML side',
    description:
      'Eit maskinlæringsprosjekt vi hadde på skule. Prosjektet er ein nettside der brukar kan legge inn stats, type og generasjon og modellen kjem til å gi dei 3 nærmaste pokemon med desse statsa. Sida er oppe gjennom streamlit',
    techStack: ['Python ', 'Maskinlæring'],
    githubUrl: 'https://github.com/Toft30/PokedexML',
    demoUrl: 'https://pokepredict.streamlit.app/'
  },
{
    id: 6,
    title: 'NynorskWordle',
    description:
      'Vibekoda eit dagleg gjett-ord spel der poenget er å gjette eit 5 bokstavs ord ifra nynorskordboka, akkurat som Wordle',
    techStack: ['JavaScript'],
    githubUrl: 'https://github.com/Toft30/NynorskWordle',
    demoUrl: 'https://toft30.github.io/NynorskWordle/'
},
]



const GithubIkon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SectionHeader
        nummer="02 — Prosjekt"
        tittel="Ting eg har bygd"
        undertekst="Eit utval av programmerings- og dataingeniørprosjekt eg har arbeidd med."
      />

      <ol className="border-t border-slate-800">
        {projectsData.map((project, index) => {
          const harLenker = project.githubUrl || project.demoUrl
          return (
            <li
              key={project.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-10 border-b border-slate-800"
            >
              <span
                className="absolute left-0 top-0 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              <div className="md:col-span-1 font-mono text-sm text-slate-600 group-hover:text-emerald-400 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 group-hover:text-white">
                  {project.title}
                </h3>
                {(project.underArbeid || !harLenker) && (
                  <span className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300/80">
                    ● Under arbeid
                  </span>
                )}
              </div>

              <div className="md:col-span-7 space-y-5">
                <p className="text-slate-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  {project.techStack.length > 0 && (
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-emerald-300/90">
                      {project.techStack.map((tech, i) => (
                        <li key={tech} className="flex items-center gap-3">
                          {i > 0 && <span className="text-slate-700">/</span>}
                          {tech.trim()}
                        </li>
                      ))}
                    </ul>
                  )}

                  {harLenker && (
                    <div className="flex items-center gap-5 text-sm font-medium ml-auto">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition"
                        >
                          <GithubIkon />
                          Kode
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition"
                        >
                          Live demo
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Projects
