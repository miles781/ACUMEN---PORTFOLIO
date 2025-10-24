import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-lime-500 to-green-600 rounded-full shadow-lg z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <motion.svg
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ y: 2 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </motion.svg>
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 hidden group-hover:block">
            <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
              Back to Top
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 