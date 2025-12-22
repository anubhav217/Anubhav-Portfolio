import React from 'react'

const EXP = [
  { title: 'Software Development Engineer III', org: 'PwC India', date: 'Sep 2021 - Present', details: 'Worked on AWS migrations and building scalable services.' },
  { title: 'Software Engineer Intern', org: 'Internship', date: '2020', details: 'Various internships and projects.' }
]

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h3 className="text-sm text-gray-400">HIGHLIGHTS</h3>
      <h2 className="text-3xl font-serif mt-2 mb-6">Experience</h2>
      <div className="space-y-8">
        {EXP.map((e, i) => (
          <div key={i} className="flex items-start space-x-6">
            <div className="flex-shrink-0 pt-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">{i+1}</div>
            </div>
            <div className="flex-1 bg-gray-50 border rounded p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold">{e.title}</h4>
                  <div className="text-sm text-gray-500">{e.org}</div>
                </div>
                <div className="text-sm text-gray-400">{e.date}</div>
              </div>
              <p className="mt-4 text-gray-700">{e.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}