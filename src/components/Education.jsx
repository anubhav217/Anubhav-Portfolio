import React, { useState } from 'react'
import { motion } from 'framer-motion'

const EDUC = [
  { title: 'B.Tech - Computer Science & Engineering', org: 'Heritage Institute of Technology', date: '2017 - 2021' }
]

export default function Education() {
  const [showAll, setShowAll] = useState(false)
  const shouldShowButton = EDUC.length > 1
  const displayedEduc = shouldShowButton && !showAll ? EDUC.slice(0, 1) : EDUC

  return (
    <section id="education" className="mb-12">
      <h3 className="text-sm text-gray-400">EDUCATION</h3>
      <h2 className="text-3xl font-serif mt-2 mb-6">Education</h2>
      <div className="space-y-4">
        {displayedEduc.map((e, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 border rounded p-6 relative cursor-pointer"
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
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-medium">{e.title}</div>
                <div className="text-sm text-gray-500 mt-1">{e.org}</div>
              </div>
              <div className="text-sm text-gray-400">{e.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* See More/See Less Button */}
      {shouldShowButton && (
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'See Less' : 'See More'}
          </motion.button>
        </div>
      )}
    </section>
  )
}