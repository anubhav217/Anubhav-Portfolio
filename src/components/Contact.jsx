// src/components/Contact.jsx
import React from 'react'
import { SiLeetcode } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
        Contact
      </h2>

      <h3 className="mt-2 text-4xl font-serif text-gray-900">Get in touch</h3>

      {/* Card with subtle tiled decorative background (uses uploaded local file path) */}
      <div
        className="mt-6 border border-gray-200 rounded-lg p-6"
        style={{
          // decorative tiled image — low opacity so text stays very readable
          backgroundImage: `url('/mnt/data/11a6840e-f270-409c-b290-29a841501e7c.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px',
          // light overlay so tiles don't compete with text
          backgroundBlendMode: 'overlay',
          // You can tweak this color (and alpha) to make the tile even subtler
          backgroundColor: 'rgba(255,255,255,0.95)',
        }}
      >
        {/* Grid of tiles — responsive: 1 col (xs) -> 2 col (sm) -> 4 col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile: LeetCode */}
          <a
            href="https://leetcode.com/u/anubhav217/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            aria-label="LeetCode"
          >
            <div className="text-2xl text-gray-700">
              <SiLeetcode />
            </div>
            <div className="text-sm text-gray-700 font-medium">LeetCode</div>
          </a>

          {/* Tile: Email */}
          <a
            href="mailto:anubhav.majumdar.in@gmail.com"
            className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            aria-label="Email"
          >
            <div className="text-2xl text-gray-700">
              <HiOutlineMail />
            </div>
            <div className="text-sm text-gray-700 font-medium">Mail</div>
          </a>

          {/* Tile: Instagram */}
          <a
            href="https://www.instagram.com/anubhav._.majumdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            aria-label="Instagram"
          >
            <div className="text-2xl text-gray-700">
              <FaInstagram />
            </div>
            <div className="text-sm text-gray-700 font-medium">Instagram</div>
          </a>

          {/* Tile: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anubhav-majumdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            aria-label="LinkedIn"
          >
            <div className="text-2xl text-gray-700">
              <FaLinkedin />
            </div>
            <div className="text-sm text-gray-700 font-medium">LinkedIn</div>
          </a>
        </div>
      </div>
    </section>
  )
}
