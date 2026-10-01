import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="space-y-8 pb-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500 bg-slate-900/50">
        <p>© {new Date().getFullYear()} Simon Sverre Toft — Dataingeniør Portefølje. Bygd med React, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
