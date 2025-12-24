import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <ThemeToggle />
      <Sidebar />
      <main className="lg:ml-64 ml-0">
        <About />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  )
}
