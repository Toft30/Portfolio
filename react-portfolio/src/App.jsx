import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Projects from './components/Project'


function App(){
  return(
    <div className="bg-slate-800 text-white p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition">
        <header>
          <h1>Simon Sverre Toft</h1>
          <p>Velkommen til min portfolio</p>
        </header>
    </div>
  )
}

export default App
