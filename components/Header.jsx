import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ paddingTop: '70px' }} // Compensate for fixed navbar height
      id="top"
    >
      {/* Background gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900 pointer-events-none"></div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Profile Image for Mobile */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
              className="lg:hidden"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <Image 
                  src={assets.profile_img} 
                  alt="Emmanuel Godwin Awom - Founder of Swift Empire LTD" 
                  className="rounded-full w-40 sm:w-48 border-4 border-white dark:border-gray-800 shadow-2xl relative z-10 object-cover"
                  width={192}
                  height={192}
                  priority
                />
                {/* Floating Venture Icons */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-rose-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 z-20"
                >
                  <span className="text-white text-xs font-bold">VTU</span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 z-20"
                >
                  <span className="text-white text-xs font-bold">FASH</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Name with Enhanced Typography */}
            <motion.h3 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-ovo"
            >
              Hi, I'm Emmanuel Godwin Awom
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Image src={assets.hand_icon} alt="waving hand" className="w-7 sm:w-8" width={32} height={32} />
              </motion.div>
            </motion.h3>

            {/* Main Headline with Gradient Text */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-ovo leading-tight"
            >
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>{' '}
              & Style
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Founder of <span className="font-semibold text-gray-800 dark:text-white">Swift Empire LTD</span> — 
              a network of ventures driving innovation in digital services, identity management, and premium fashion retail.
            </motion.p>

            {/* Venture Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['VTU Services', 'Fashion Retail', 'Digital Innovation', 'Identity Management'].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons - Added padding-bottom to prevent border cutoff */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pb-6" // Added pb-6 for spacing
            >
              {/* Primary CTA */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#contact'
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#contact');
                  if (target) {
                    const navbarHeight = 70;
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Contact Me
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Image src={assets.right_arrow_white} alt="" className="w-5 group-hover:translate-x-1 transition-transform" width={20} height={20} />
                </motion.div>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#ventures'
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold flex items-center justify-center gap-3 hover:border-rose-400 dark:hover:border-blue-400 hover:text-rose-600 dark:hover:text-blue-400 transition-all duration-300 group"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#services');
                  if (target) {
                    const navbarHeight = 70;
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Explore Ventures
                <Image src={assets.right_arrow} alt="" className="w-5 group-hover:translate-x-1 transition-transform" width={20} height={20} />
              </motion.a>

              {/* Tertiary CTA - Added download icon */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='/Emmanuel Godwin.pdf'
                download
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                Download CV
                <Image src={assets.download_icon} alt="Download icon" className="w-5 group-hover:scale-110 transition-transform" width={20} height={20} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Enhanced Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
              
              {/* Main Profile Image */}
              <Image 
                src={assets.profile_img} 
                alt="Emmanuel Godwin Awom - Founder of Swift Empire LTD" 
                className="rounded-full w-80 xl:w-96 border-8 border-white dark:border-gray-800 shadow-2xl relative z-10 object-cover"
                width={384}
                height={384}
                priority
              />
              
              {/* Floating Venture Badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-20"
              >
                <span className="text-white text-sm font-bold">VTU</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-20"
              >
                <span className="text-white text-sm font-bold">FASH</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-1/2 -right-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-20"
              >
                <span className="text-white text-xs font-bold">TECH</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Moved further down to avoid conflict */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 ml-10 left-1/2 transform -translate-x-1/2 hidden lg:block" // Changed from bottom-8 to bottom-4
        >
          <motion.div
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header