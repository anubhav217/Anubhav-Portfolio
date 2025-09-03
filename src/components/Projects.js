import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Contest Arena",
      link: "https://github.com/anubhav217/Contest-Arena",
      description:
        "SPA for contest tracking — past, live and upcoming contests, ranks and submissions. Built with React + PHP(Slim) backend.",
      tags: ["React", "PHP", "MySQL", "Contest Tracking"],
    },
    {
      title: "POSIX Compatible Shell",
      link: "https://github.com/anubhav217/POSIX-Shell",
      description:
        "POSIX-like interactive shell implemented in C++ supporting 50+ common commands, piping, and redirection.",
      tags: ["C++", "POSIX", "Shell", "Linux"],
    },
    {
      title: "Discord Bot",
      link: "https://github.com/anubhav217/Discord-Bot",
      description:
        "A Discord bot with custom commands, automation, and server management features.",
      tags: ["Node.js", "Discord API", "JavaScript"],
    },
    {
      title: "Torrent P2P File Sharing System",
      link: "https://github.com/anubhav217/Torrent-P2P-File-Sharing-System",
      description:
        "Peer-to-peer torrent-like file sharing system with distributed tracker and efficient file transfer.",
      tags: ["C++", "Networking", "P2P", "File Sharing"],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4); // default 4 visible

  return (
    <section id="projects">
      <h2 className="section-title">Personal Projects</h2>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {visibleProjects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-header">
              <FaGithub className="proj-icon" />
              <div className="project-title">
                <h3>{proj.title}</h3>
              </div>
            </div>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </motion.div>

      {/* Show More / Show Less Button */}
      {projects.length > 4 && (
        <div className="show-more-container">
          <button
            onClick={() => setShowAll(!showAll)}
            className="show-more-btn"
          >
            {showAll ? "See Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
