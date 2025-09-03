import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        {/* Brand */}
        <div className="brand">
          <span className="brand-name">Anubhav Majumdar</span>
        </div>

        {/* Nav Links */}
        <ul className="navlinks">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <div className="sidebar-bottom">
          <a
            href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </div>
  );
}
