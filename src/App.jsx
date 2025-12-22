import React from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Sidebar />
      <main className="ml-72">
        <Hero />
        <div className="container mx-auto px-8 py-12">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}