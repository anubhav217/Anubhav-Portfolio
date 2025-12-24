// src/components/Contact.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
        Contact
      </h2>

      <h3 className="mt-2 text-3xl sm:text-4xl font-serif text-gray-900 dark:text-gray-100">Get in touch</h3>

      {/* Card with subtle tiled decorative background */}
      <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors duration-200">
        {/* Grid of tiles — responsive: 1 col (xs) -> 2 col (sm) -> 4 col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile: LeetCode */}
          <motion.a
            href="https://leetcode.com/u/anubhav217/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-700 cursor-pointer relative"
            initial={{ opacity: 0, y: 20, borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            aria-label="LeetCode"
          >
            <div className="text-2xl text-gray-700 dark:text-gray-300">
              <SiLeetcode />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">LeetCode</div>
          </motion.a>

          {/* Tile: Email */}
          <motion.a
            href="mailto:anubhav.majumdar.in@gmail.com"
            className="flex items-center gap-3 p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-700 cursor-pointer relative"
            initial={{ opacity: 0, y: 20, borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            aria-label="Email"
          >
            <div className="text-2xl text-gray-700 dark:text-gray-300">
              <HiOutlineMail />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">E-Mail</div>
          </motion.a>

          {/* Tile: Instagram */}
          <motion.a
            href="https://www.instagram.com/anubhav._.majumdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-700 cursor-pointer relative"
            initial={{ opacity: 0, y: 20, borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            aria-label="Instagram"
          >
            <div className="text-2xl text-gray-700 dark:text-gray-300">
              <FaInstagram />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Instagram</div>
          </motion.a>

          {/* Tile: LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/anubhav-majumdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-700 cursor-pointer relative"
            initial={{ opacity: 0, y: 20, borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            aria-label="LinkedIn"
          >
            <div className="text-2xl text-gray-700 dark:text-gray-300">
              <FaLinkedin />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">LinkedIn</div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
