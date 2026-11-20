import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="pb-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-2 justify-between font-mono text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Simon Sverre Toft</p>
          <p>
            Bygd med React, Vite & Tailwind <span className="text-emerald-500">●</span> Bergen
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
