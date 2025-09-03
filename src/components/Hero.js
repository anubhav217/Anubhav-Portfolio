import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Hero() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section id="about" className="hero">
      {/* Theme Toggle */}
      <div className="theme-toggle-wrapper">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={theme === 'light'}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="theme-toggle-label">
          <span className="toggle-circle">
            {theme === 'light' ? (
              <FaSun className="toggle-icon" />
            ) : (
              <FaMoon className="toggle-icon" />
            )}
          </span>
        </label>
      </div>

      {/* Avatar */}
      <motion.div
        className="avatar card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/profile.jpg'}
          alt="Anubhav Majumdar"
        />
      </motion.div>

      {/* Introduction */}
      <motion.div
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
