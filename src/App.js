import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const t = localStorage.getItem('theme');
    if (t === 'light') document.body.classList.add('light');
  }, []);

  return (
    <div>
      <Header />
      <main className="container">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
