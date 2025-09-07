import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    'Knowledge Accelerator Award — PwC India',
    'Territory Spot Award — PwC India',
    'Extra Miler Award — PwC India',
    'Client Champion Award — PwC India'
    //'CodeChef Snackdown (Nov 2019) — Pre-elimination Rank: 526'
  ];

  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? achievements : achievements.slice(0, 4);

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>

      <motion.div
        className="ach-grid"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {visible.map((a, idx) => (
          <motion.article
            className="ach-card card"
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="ach-content">
              <p className="ach-text">{a}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {achievements.length > 4 && (
        <div style={{ textAlign: 'center', marginTop: '1.6rem' }}>
          <button
            className="show-more-btn"
            onClick={() => setExpanded((s) => !s)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}
