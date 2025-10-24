'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Work = ({ isDarkMode }) => {
  const projectsData = [
    {
      id: 1,
      image: assets.mobile_icon,
      title: 'VTU Recharge Portal',
      subtitle: 'Swiftsub Solution Hub',
      description: 'Affordable airtime, data, and utility payments system.',
      problem: 'Inaccessible and expensive digital services in remote areas',
      outcome: 'Serving 1,000+ customers nationwide',
      link: 'https://swiftsub.com.ng/',
      category: 'tech',
      metrics: '1K+ Users'
    },
    {
      id: 2,
      image: assets.mongodb,
      title: 'Online Fashion Store',
      subtitle: 'Dripforge Luxury Boutique',
      description: 'Trendy wears for men & women, delivered nationwide.',
      problem: 'Limited access to premium fashion in local markets',
      outcome: '500+ style enthusiasts served',
      link: 'https://wa.me/+2349165545880?text=Welcome%20to%20Dripforge%20Luxury%20Boutique',
      category: 'fashion',
      metrics: '500+ Customers'
    },
    {
      id: 3,
      image: assets.firebase,
      title: 'Partnership Dashboard',
      subtitle: 'Business Collaboration Platform',
      description: 'Partner with us for fashion and VTU services.',
      problem: 'Lack of structured partnership opportunities',
      outcome: 'Multiple successful brand collaborations',
      link: 'https://wa.me/+2349165545880?text=Partnership%20Inquiry',
      category: 'business',
      metrics: '10+ Partners'
    },
    {
      id: 4,
      image: assets.git,
      title: 'Document Verification',
      subtitle: 'Swifverify Platform',
      description: 'Secure document verification and educational support services.',
      problem: 'Document fraud and verification challenges',
      outcome: 'Trusted verification platform',
      link: 'https://www.swifverify.com.ng',
      category: 'tech',
      metrics: 'Secure Platform'
    }
  ];

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: -2,
      rotateY: 2,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full py-20 sm:py-28 scroll-mt-20 bg-gradient-to-b from-transparent via-gray-50/20 to-transparent dark:via-gray-900/10"
      viewport={{ once: true, margin: "-50px" }}
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
            My Portfolio
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent"
          >
            Featured Work
          </motion.h2>

          {/* Gradient Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto mt-4 rounded-full"
          />

          {/* Intro Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Each project represents a bridge between technology, creativity, and community impact — 
            delivering real solutions that empower businesses and individuals across Nigeria.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative cursor-pointer"
              tabIndex="0"
              role="article"
              aria-label={`Project: ${project.title} - ${project.description}`}
            >
              {/* Card Container */}
              <motion.div
                variants={hoverVariants}
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              >
                {/* Image Container with Parallax Effect */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project showcase`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300"
                  >
                    {project.category.toUpperCase()}
                  </motion.div>

                  {/* Metrics Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    {project.metrics}
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-rose-600 dark:text-rose-400 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem & Outcome */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Challenge:</span> {project.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Impact:</span> {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-rose-500 hover:to-blue-500 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                    aria-label={`Visit ${project.title} project`}
                  >
                    <span>View Project</span>
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.a>
                </div>

                {/* Hover Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/#contact" 
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(135deg, #f43f5e, #3b82f6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
            aria-label="View complete portfolio"
          >
            <span>Reach out for more...</span>
            <motion.div
              animate={{ 
                x: [0, 6, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="relative"
            >
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              {/* Pulse Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="absolute inset-0 bg-white rounded-full"
              />
            </motion.div>
          </motion.a>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-sm mt-4"
          >
            Discover more projects and case studies
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work; 