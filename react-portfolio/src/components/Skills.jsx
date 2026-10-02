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
    <section id="skills" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Ferdigheiter & Teknologi</h2>
        <p className="mt-2 text-slate-400">
          Oversikt over verktøy, språk og rammeverk eg nyttar i min kvardag som dataingeniør.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700/60">
              {group.category}
            </h3>
            <ul className="space-y-2.5">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
