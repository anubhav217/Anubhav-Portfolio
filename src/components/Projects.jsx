import React from 'react'

const P = [
  { name: 'Contest Arena', desc: 'Web app for viewing past, live and upcoming contests.', link: 'https://github.com/anubhav217' },
  { name: 'POSIX Shell', desc: 'POSIX-like interactive shell implementation in C++.', link: 'https://github.com/anubhav217' }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h3 className="text-sm text-gray-400">PROJECTS</h3>
      <h2 className="text-3xl font-serif mt-2 mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {P.map((p, i) => (
          <div key={i} className="border rounded p-6 shadow-sm">
            <h4 className="text-lg font-semibold">{p.name}</h4>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-blue-600">View on GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  )
}