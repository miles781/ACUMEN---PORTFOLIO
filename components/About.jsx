'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full py-24 sm:py-28 scroll-mt-20 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 text-lg font-ovo text-gray-600 dark:text-gray-400"
          >
            Introduction
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          {/* Gradient Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-ovo italic leading-relaxed">
            "I'm passionate about bridging creativity and technology to empower modern Nigerian businesses."
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              {/* Gradient Background Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-blue-500 rounded-3xl opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-blue-500 rounded-3xl opacity-30 animate-spin-slow [animation-duration:15s]"></div>
              
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src={assets.user_image}
                  alt="Emmanuel Godwin - Founder and Director of Swift Empire LTD"
                  className="w-72 sm:w-80 lg:w-96 rounded-3xl object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                  width={384}
                  height={480}
                  priority
                />
              </motion.div>
              
              {/* Floating Badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-rose-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-20"
              >
                <span className="text-white text-xs font-bold">CEO</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800 z-20"
              >
                <span className="text-white text-xs font-bold ">LEAD</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full lg:w-2/3"
          >
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-12"
            >
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-ovo leading-relaxed max-w-4xl">
                Resourceful and driven individual currently pursuing a degree in
                Human Anatomy with hands-on experience in business management and
                digital solutions. Founder and director of two active ventures
                providing retail fashion and digital services, with a growing
                interest in cybersecurity and online innovation.
              </p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {['Business Strategy', 'Digital Innovation', 'Fashion Retail', 'VTU Services', 'Leadership', 'Technology'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gradient-to-r hover:from-rose-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced Cards Grid */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl"
            >
              {/* Card 1 - Education */}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative border border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(244,63,94,0.15)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
                role="article"
                tabIndex="0"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <Image
                  src={isDarkMode ? assets.edu_icon_dark : assets.edu_icon}
                  alt="Education icon - B.Sc. Human Anatomy"
                  className="w-8 h-8 mb-4"
                  width={32}
                  height={32}
                />
                <div className="relative z-10">
                  <h3 className="mb-3 font-semibold text-gray-800 dark:text-white text-base">
                    B.Sc. Human Anatomy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Federal University Wukari, Taraba State. Still in progress (Undergraduate)
                  </p>
                </div>
              </motion.li>

              {/* Card 2 - Dripforge */}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative border border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(244,63,94,0.15)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
                role="article"
                tabIndex="0"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <Image
                  src={isDarkMode ? assets.project_icon_dark : assets.project_icon}
                  alt="Business icon - Director of Dripforge Luxury Boutique"
                  className="w-8 h-8 mb-4"
                  width={32}
                  height={32}
                />
                <div className="relative z-10">
                  <h3 className="mb-3 font-semibold text-gray-800 dark:text-white text-base">
                    Director, Dripforge Luxury Boutique
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    I lead Dripforge, a high-end fashion boutique redefining luxury for the modern lifestyle.
                  </p>
                </div>
              </motion.li>

              {/* Card 3 - Swiftsub */}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative border border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(244,63,94,0.15)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
                role="article"
                tabIndex="0"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <Image
                  src={isDarkMode ? assets.project_icon_dark : assets.project_icon}
                  alt="Business icon - Director of Swiftsub Solution Hub"
                  className="w-8 h-8 mb-4"
                  width={32}
                  height={32}
                />
                <div className="relative z-10">
                  <h3 className="mb-3 font-semibold text-gray-800 dark:text-white text-base">
                    Director, Swiftsub Solution Hub
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    I provide fast, affordable data and network solutions. My focus is on reliability, accessibility, and customer satisfaction.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            {/* Who I Am Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="mb-6 text-2xl sm:text-3xl font-bold font-ovo text-gray-800 dark:text-white"
              >
                Who I Am
              </motion.h4>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                className="max-w-4xl"
              >
                <h3 className="mb-4 font-semibold text-xl text-gray-800 dark:text-white">
                  Creative Technologist & Entrepreneur
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I blend business, design, and tech to build brands and tools that solve real-world problems.
                  My portfolio reflects a passion for growth, visual excellence, and meaningful innovation.
                </p>
                
                {/* Optional Download Bio Button */}
                
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}; 

export default About; 