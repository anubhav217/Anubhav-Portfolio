import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const EXP = [
  { 
    title: 'PwC India - SDE III', 
    date: 'Sep 2021 - Present', 
    details: [
      'Led AWS migrations and built scalable cloud infrastructure',
      'Engineered contextual signals for enhanced ad targeting',
      'Optimized system performance and resource utilization',
      'Created comprehensive test automation suite improving efficiency and reducing cycle times',
      'Enhanced ChatPwC with new features improving enterprise-wide communication and automation'
    ], 
    color: 'blue' 
  },
  { 
    title: 'CodeChef - SDE Intern', 
    date: 'Jul 2020 - Feb 2021', 
    details: [
      'Designed and reviewed problems for rated contests engaging large participant base',
      'Coordinated external rated contests by optimizing solutions and managing participant queries',
      'Streamlined plagiarism detection across submissions and categorized problems with solution documentation',
      'Optimized sitewide SEO reducing page load times and improving user engagement metrics'
    ], 
    color: 'red' 
  }
]

const colorClasses = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500'
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const shouldShowButton = EXP.length > 4
  const displayedExp = shouldShowButton && !showAll ? EXP.slice(0, 4) : EXP

  return (
    <section id="experience" className="mb-12">
      <h3 className="text-sm text-gray-400 dark:text-gray-500">HIGHLIGHTS</h3>
      <h2 className="text-2xl sm:text-3xl font-serif mt-2 mb-6 dark:text-gray-100">Experience</h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        
        <div className="space-y-6 sm:space-y-8">
          {displayedExp.map((e, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3 sm:space-x-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Timeline icon */}
              <div className="flex-shrink-0 relative z-10">
                <motion.div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${colorClasses[e.color]} flex items-center justify-center text-white`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>
              
              {/* Content tile */}
              <motion.div
              className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-6 relative cursor-pointer"
              initial={{ borderColor: "#e5e7eb", boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
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
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-100">{e.title}</h4>
                  <div className="text-sm text-gray-400 dark:text-gray-400 sm:whitespace-nowrap sm:ml-4">{e.date}</div>
                </div>
                <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside space-y-1">
                  {Array.isArray(e.details) ? e.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  )) : <li>{e.details}</li>}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* See More/See Less Button */}
        {shouldShowButton && (
          <div className="mt-8 flex justify-center">
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
      </div>
    </section>
  )
}