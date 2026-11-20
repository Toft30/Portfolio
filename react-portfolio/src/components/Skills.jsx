import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    category: 'Databehandling & Ingestion',
    skills: ['Python', 'Java', 'SQL', 'Spring', 'Haskell'],
  },
  {
    category: 'Databasar & Lagring',
    skills: ['PostgreSQL'],
  },
  {
    category: 'Sky & DevOps',
    skills: ['Git'],
  },
  {
    category: 'Utvikling & Frontend',
    skills: ['React', 'JavaScript'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SectionHeader
        nummer="03 — Ferdigheiter"
        tittel="Verktøykassa"
        undertekst="Språk, rammeverk og verktøy eg nyttar i kvardagen som dataingeniør."
      />

      <div className="divide-y divide-slate-800 border-y border-slate-800">
        {skillCategories.map((group, i) => (
          <div key={group.category} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-7 items-baseline">
            <h3 className="md:col-span-4 flex items-baseline gap-3 text-slate-400">
              <span className="font-mono text-xs text-emerald-500">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium">{group.category}</span>
            </h3>
            <ul className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-slate-100 hover:text-emerald-400 transition-colors cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
