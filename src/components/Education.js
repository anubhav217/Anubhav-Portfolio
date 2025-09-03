import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const [showMore, setShowMore] = useState(false);

  const educationData = [
    {
      duration: "2017 - 2021",
      institution: "Heritage Institute of Technology",
      institutionLink:
        "https://en.wikipedia.org/wiki/Heritage_Institute_of_Technology,_Kolkata",
      degree: "Bachelor Of Technology",
      location: "Kolkata, India",
      summary: "Computer Science & Engineering",
      achievements: ["DGPA: 9.21"],
    },
    // Add more education entries here later if needed
  ];

  const visibleEducation = showMore
    ? educationData
    : educationData.slice(0, 1);

  return (
    <section id="education">
      <h2 className="section-title">Education</h2>

      <motion.div
        className="exp-list"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {visibleEducation.map((edu, index) => (
          <article key={index} className="exp-item card">
            <div className="meta">{edu.duration}</div>

            <div className="details">
              <div className="title-row">
                {edu.institutionLink ? (
                  <a
                    href={edu.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company"
                  >
                    {edu.institution}
                  </a>
                ) : (
                  <span className="company">{edu.institution}</span>
                )}
                <h3 className="role">{edu.degree}</h3>
              </div>

              <div className="location">
                <svg
                  className="loc-ico"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  />
                </svg>
                <span className="loc-text">{edu.location}</span>
              </div>

              <p className="summary">{edu.summary}</p>

              <ul>
                {edu.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </motion.div>

      {educationData.length > 1 && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
