const projectsData = [
  {
    id: 1,
    title: 'Realtids Datastraum med Apache Kafka & Spark',
    description:
      'Ein end-to-end pipeline som prosesserer strømmande finansiell data i realtid, lagrar aggregat i PostgreSQL og visualiserer nøkkeltal i eit dashboard.',
    techStack: ['Python', 'Java', 'Apache Kafka', 'PySpark', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Automatisert ETL Pipeline & dbt Datamodellering',
    description:
      'Løsning for orkestrering av daglege datainnladingar med Apache Airflow, transformering gjennom dbt og lagring i Snowflake for analytiske spørjingar.',
    techStack: ['Python', 'Apache Airflow', 'dbt', 'Snowflake', 'SQL'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Data Platform Infrastructure as Code',
    description:
      'Provisjonering av skyinfrastruktur på AWS med Terraform for oppsett av S3 datainnsjø, EKS cluster og IAM rettigheiter.',
    techStack: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'Bash'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Interaktiv Data-Dashboard i React & Vite',
    description:
      'Ein responsiv og moderne webapplikasjon bygd for visning av API-metrikkar, ytelsesdata og pipeline-statusar.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'REST API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Utvalde Prosjekt</h2>
        <p className="mt-2 text-slate-400">
          Her er eit utval av programmerings- og dataingeniørprosjekt eg har arbeidd med.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-6 hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/5"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 text-sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
