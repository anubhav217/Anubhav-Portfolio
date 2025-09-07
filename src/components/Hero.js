import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Hero() {
  const [theme, setTheme] = useState(() => {
    // load theme from localStorage if present
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  // hearts state for double-click burst(s)
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // double click handler for avatar: create temporary burst
  const handleAvatarDoubleClick = (ev) => {
    // create a timestamp id
    const id = `h${Date.now()}`;
    setHearts(prev => [...prev, id]);

    // remove after animation completes (~900ms)
    setTimeout(() => {
      setHearts(prev => prev.filter(x => x !== id));
    }, 900);
  };

  return (
    <section id="about" className="hero">
      {/* Theme Toggle */}
      <div className="theme-toggle-wrapper" aria-hidden={false}>
        <button
          className={`theme-toggle-btn ${theme === 'light' ? 'light' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span className="toggle-knob" />
          <span className="icon moon"><FaMoon /></span>
          <span className="icon sun"><FaSun /></span>
        </button>
      </div>

      {/* Avatar */}
      <motion.div
        className="avatar card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onDoubleClick={handleAvatarDoubleClick}
        role="img"
        aria-label="Profile picture"
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/profile.jpg'}
          alt="Anubhav Majumdar"
        />

        {/* like / heart bursts rendered on top */}
        {hearts.map(id => (
          <span key={id} className="like-burst" aria-hidden>
            ❤️
          </span>
        ))}
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="hero-intro"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <h1 className="h-title">
          Hi 👋, I'm <span className="accent">Anubhav</span>
        </h1>
        <p className="subtitle">Software Engineer</p>
      </motion.div>
    </section>
  );
}
