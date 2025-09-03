import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 1,
    period: 'Sep 2021 — Present',
    company: 'PwC India',
    title: 'Software Development Engineer III',
    location: 'Kolkata',
    summary: [
      'Led large-scale web crawling, contextual signal extraction and cloud migrations.'
    ],
    bullets: [
      'Orchestrated three system migrations to AWS enabling processing of 16M+ webpages/day.',
      'Extracted 40+ contextual signals from crawled HTML, processing 9M+ URLs/day to improve ad targeting.',
      'Built signals used by 30+ teams contributing $2M revenue in 9 months.',
      'Implemented cron-driven optimizations saving an estimated $1.32M/year and reducing latency by 19%.',
      'Authored automated test suite (~600 test cases) and ROI templates cutting test cycle time by 25%.'
    ]
  },

  /* Example placeholder entries for future additions — uncomment or add new objects when you want:
  {
    id: 2,
    period: '01/2019 — 08/2021',
    company: 'ExampleCo',
    title: 'Senior Engineer',
    location: 'City',
    summary: ['Short summary line...'],
    bullets: ['Achievement 1', 'Achievement 2']
  },
  {
    id: 3,
    period: '05/2016 — 12/2018',
    company: 'AnotherCo',
    title: 'Software Engineer',
    location: 'City',
    summary: ['Short summary line...'],
    bullets: ['Achievement A', 'Achievement B']
  }
  */
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  // decide which experiences to show (first 3 when collapsed)
  const visible = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 3);

  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>

      <motion.div
        className="exp-list"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {visible.map((exp) => (
          <article key={exp.id} className="exp-item card">
            <div className="meta">
              <div className="period">{exp.period}</div>
            </div>

            <div className="details">
              {/* Company (accent) before role */}
              <div className="title-row">
                <span className="company">{exp.company}</span>
                <h3 className="role">{exp.title}</h3>
              </div>

              {/* location line under the title */}
              <div className="location">
                <svg className="loc-ico" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"></path>
                </svg>
                <span className="loc-text">{exp.location}</span>
              </div>

              {/* summary lines */}
              {exp.summary && exp.summary.map((s, i) => (
                <p key={i} className="summary">{s}</p>
              ))}

              {/* bullet list */}
              <ul>
                {exp.bullets && exp.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>

              {/* keep a placeholder area if you want to add per-job tiles later */}
            </div>
          </article>
        ))}

        {/* Show More toggle appears only when more than 3 experiences exist */}
        {EXPERIENCES.length > 3 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
            <button
              className="show-more-btn"
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
