'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      icon: assets.mobile_icon,
      title: 'Swift Empire LTD',
      subtitle: 'Main Platform',
      desc: 'Your central hub for digital innovation, fashion, and identity services. Connecting all ventures under one ecosystem.',
      link: '#',
      isMain: true,
      stats: '3 Ventures • 4+ Years',
      badge: '🏠 Main Hub'
    },
    {
      icon: assets.mongodb,
      title: 'Smart VTU & Utility Services',
      subtitle: 'Swiftsub Solution Hub',
      desc: 'Enjoy seamless airtime, data, cable TV, and electricity payments — fast and reliable service nationwide.',
      link: 'https://swiftsub.com.ng/',
      isMain: false,
      stats: '1,000+ Customers',
      badge: '🚀 Active'
    },
    {
      icon: assets.firebase,
      title: 'Dripforge Luxury Boutique',
      subtitle: 'Premium Fashion Retail',
      desc: 'Step into style with clothing, bags, and accessories designed for daily confidence and lasting impressions.',
      link: 'https://wa.me/+2349165545880?text=Welcome%20to%20Dripforge%20Luxury%20Boutique!%20Where%20style%20meets%20class%20and%20every%20outfit%20tells%20your%20story.%20Looking%20for%20the%20perfect%20fit?%20You%E2%80%99re%20in%20the%20right%20place.',
      isMain: false,
      stats: '500+ Style Enthusiasts',
      badge: '👑 Premium'
    },
    {
      icon: assets.git,
      title: 'Swifverify Platform',
      subtitle: 'Document Verification & Support',
      desc: 'Trusted platform for secure, fast verifications, document upgrades, and educational support with reliable customer care.',
      link: 'https://www.swifverify.com.ng',
      isMain: false,
      stats: 'Secure & Reliable',
      badge: '🛡️ Verified'
    },
  ];

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full py-20 sm:py-28 scroll-mt-20 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/20"
      viewport={{ once: true, margin: "-50px" }} // Added once: true for performance
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-3 text-lg font-ovo text-gray-600 dark:text-gray-400"
          >
            What I Offer
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>
          
          {/* Gradient Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto mt-4 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            A connected ecosystem of ventures driving innovation in digital services, 
            premium fashion retail, and identity management — all under the Swift Empire umbrella.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: service.isMain ? 1.02 : 1.03, // Reduced scale values
                y: service.isMain ? -4 : -2, // Reduced y movement
                // Removed rotateY to fix the error
              }}
              className={`group relative border border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer p-8 transition-all duration-300 backdrop-blur-sm
                ${service.isMain 
                  ? 'lg:col-span-2 xl:col-span-2 bg-gradient-to-br from-rose-500/5 to-blue-500/5 dark:from-rose-500/10 dark:to-blue-500/10 shadow-xl' 
                  : 'bg-white/50 dark:bg-gray-800/50 shadow-lg'
                } 
                hover:shadow-xl hover:bg-white dark:hover:bg-gray-800`}
              tabIndex="0" // Added for accessibility
              role="article" // Added for semantics
              aria-label={`${service.title} - ${service.subtitle}`} // Added for accessibility
            >
              {/* Gradient Border Effect - Simplified */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                ${service.isMain ? 'opacity-5' : ''}`}
              />

              {/* Main Platform Badge */}
              {service.isMain && (
                <motion.div
                  variants={badgeVariants}
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
                >
                  {service.badge}
                </motion.div>
              )}

              {/* Service Icon - Wrapped in motion.div instead of animating Image directly */}
              <div className={`relative mb-6 ${service.isMain ? 'w-24 h-24' : 'w-20 h-20'} mx-auto`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Reduced scale
                  transition={{ duration: 0.2 }} // Faster transition
                  className="relative z-10"
                >
                  <Image
                    src={service.icon}
                    className={`w-full h-full rounded-2xl object-cover border-2 border-white dark:border-gray-800 shadow-lg
                      ${service.isMain ? 'p-4 bg-white dark:bg-gray-800' : 'p-3 bg-white/80 dark:bg-gray-700'}`}
                    alt={`${service.title} service icon`}
                    width={service.isMain ? 96 : 80}
                    height={service.isMain ? 96 : 80}
                  />
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="relative z-10 text-center">
                {/* Badge for non-main services */}
                {!service.isMain && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium mb-3 border border-gray-200 dark:border-gray-600"
                  >
                    {service.badge}
                  </motion.span>
                )}

                <h3 className={`font-bold text-gray-800 dark:text-white mb-2
                  ${service.isMain ? 'text-2xl' : 'text-xl'}`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3">
                  {service.subtitle}
                </p>

                <p className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-6
                  ${service.isMain ? 'text-base' : 'text-sm'}`}
                >
                  {service.desc}
                </p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-6"
                >
                  {service.stats}
                </motion.div>

                {/* CTA Button */}
                <motion.a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} // Reduced scale
                  whileTap={{ scale: 0.98 }} // Reduced scale
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50
                    ${service.isMain
                      ? 'bg-gradient-to-r from-rose-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-blue-600'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gradient-to-r hover:from-rose-500 hover:to-blue-500 hover:text-white hover:border-transparent'
                    }`}
                  aria-label={`Access ${service.title} service`}
                >
                  {service.isMain ? 'Explore Ecosystem' : 'Access Service'}
                  <svg
                    className={`w-4 h-4 ${service.isMain ? '' : 'group-hover:translate-x-1'} transition-transform duration-200`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Floating Elements - Removed complex animations that could cause errors */}
              {service.isMain && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-rose-500 rounded-full opacity-30" />
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-30" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Ecosystem Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl sm:text-3xl font-bold font-ovo text-gray-800 dark:text-white mb-4">
            One Ecosystem, Multiple Solutions
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From digital services to premium fashion, each venture is designed to complement the others, 
            creating a unified brand experience that grows with your needs.
          </p>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { label: 'Active Ventures', value: '3' },
              { label: 'Years Experience', value: '4+' },
              { label: 'Happy Customers', value: '1K+' },
              { label: 'Services', value: '5+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services; 