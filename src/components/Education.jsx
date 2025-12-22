import React from 'react'

const EDUC = [
  { title: 'B.Tech - Computer Science & Engineering', org: 'Heritage Institute of Technology', date: '2017 - 2021', details: 'Focus on systems and algorithms.' }
]

export default function Education() {
  return (
    <section id="education" className="mb-12">
      <h3 className="text-sm text-gray-400">EDUCATION</h3>
      <h2 className="text-3xl font-serif mt-2 mb-6">Education</h2>
      <div className="space-y-4">
        {EDUC.map((e, i) => (
          <details key={i} className="bg-white border rounded shadow-sm">
            <summary className="p-4 cursor-pointer flex justify-between items-center">
              <div>
                <div className="text-lg font-medium">{e.title}</div>
                <div className="text-sm text-gray-500">{e.org}</div>
              </div>
              <div className="text-sm text-gray-400">{e.date}</div>
            </summary>
            <div className="p-4 border-t">{e.details}</div>
          </details>
        ))}
      </div>
    </section>
  )
}