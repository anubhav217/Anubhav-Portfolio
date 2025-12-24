import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const P = [
  { 
    name: 'Contest Arena', 
    desc: 'Web app for viewing past, live and upcoming contests.', 
    link: 'https://github.com/anubhav217/Contest-Arena',
    tags: ['React', 'JavaScript', 'CSS', 'API Integration']
  },
  { 
    name: 'Distributed Rate Limitter', 
    desc: 'A distributed rate limiting system designed to handle high-throughput requests across multiple servers while maintaining consistent rate limits.', 
    link: 'https://github.com/anubhav217/Distributed-Rate-Limiter',
    tags: ['TypeScript', 'Node.js', 'Redis', 'Distributed Systems', 'Rate Limiting']
  },
  { 
    name: 'POSIX Compatible Shell', 
    desc: 'POSIX-compliant interactive shell implementation in C++ with support for command execution, piping, redirection, and background processes.', 
    link: 'https://github.com/anubhav217/POSIX-Compatible-Script',
    tags: ['C++', 'POSIX', 'System Programming', 'Shell']
  },
  { 
    name: 'Discord Bot', 
    desc: 'A feature-rich Discord bot with moderation tools, music playback, custom commands, and interactive features for server management.', 
    link: 'https://github.com/anubhav217/Discord-Bot',
    tags: ['Python', 'Discord.py', 'Bot Development', 'API']
  },
  { 
    name: 'Torrent P2P File Sharing System', 
    desc: 'A peer-to-peer file sharing system implementing BitTorrent protocol with support for file distribution, chunk management, and peer communication.', 
    link: 'https://github.com/anubhav217/Torrent-P2P-File-Sharing-System',
    tags: ['Java', 'P2P', 'Networking', 'File Sharing', 'BitTorrent']
  },
  { 
    name: 'LaTex Resume Template', 
    desc: 'A professional LaTeX resume template designed for software engineers and developers, featuring clean typography and customizable sections.', 
    link: 'https://github.com/anubhav217/LaTex-Resume-Template',
    tags: ['LaTeX', 'Resume', 'Template', 'Typography']
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const initialProjects = 4
  const displayedProjects = showAll ? P : P.slice(0, initialProjects)

  return (
    <section id="projects" className="mb-12">
      <h3 className="text-sm text-gray-400 dark:text-gray-500">PROJECTS</h3>
      <h2 className="text-2xl sm:text-3xl font-serif mt-2 mb-6 dark:text-gray-100">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((p, i) => (
          <motion.div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded p-6 shadow-sm bg-gray-50 dark:bg-gray-800 relative cursor-pointer"
            initial={{ opacity: 0, y: 20, borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              y: -8,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 10px 25px rgba(0, 0, 0, 0.15)",
              borderColor: "#60a5fa",
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20,
                boxShadow: { duration: 0.2 },
                borderColor: { duration: 0.2 }
              }
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FaGithub className="text-gray-700 dark:text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
              <h4 className="text-base sm:text-lg font-semibold dark:text-gray-100">{p.name}</h4>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 text-xs rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
      {P.length > initialProjects && (
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>
      )}
    </section>
  )
}