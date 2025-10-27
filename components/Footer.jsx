import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'wa.me/2349165545880',
      icon: assets.web_icon,
      alt: 'WhatsApp'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100090157310181&mibextid=wwXIfr&mibextid=wwXIfr',
      icon: assets.graphics_icon,
      alt: 'Facebook'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/acumen0916?igsh=MTJ2NnR4NXNhN2NrZQ%3D%3D&utm_source=qr',
      icon: assets.figma,
      alt: 'Instagram'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800">
      {/* Gradient Top Border - Updated to rose-blue gradient */}
      <div className="h-1 bg-gradient-to-r from-rose-500 via-blue-500 to-rose-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            
            <motion.a
              href="mailto:swiftsub86@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="w-max flex items-center gap-3 mx-auto md:mx-0 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 group"
            >
              <Image
                src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                alt="Email icon"
                className="w-6 group-hover:scale-110 transition-transform duration-300"
                width={24}
                height={24}
              />
              swiftsub86@gmail.com
            </motion.a>
          </motion.div>

          {/* Center: Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-rose-500 hover:to-blue-500"
                  aria-label={`Visit my ${social.name}`}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                    width={24}
                    height={24}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Developer Credit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Crafted with passion
            </p>
            <motion.a
              href="https://ebenycodes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:from-rose-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center gap-1 group"
            >
              Developed by EbenYcodes
              <motion.span
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                ↗
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Emmanuel Godwin Awom. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer