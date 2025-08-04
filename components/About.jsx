'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-12 scroll-mt-30 mt-20" // <-- Added top margin here
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-2 text-lg font-ovo"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          About me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.81 }}
          className="flex w-full flex-col lg:flex-row items-center gap-10 my-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 rounded-3xl max-w-none mt-10 lg:mt-16 flex-shrink-0"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl object-cover h-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 mt-10 lg:mt-16 flex flex-col justify-center"
          >
            <p className="mb-10 max-w-2xl font-ovo text-lg leading-8">
              Resourceful and driven individual currently pursuing a degree in
              Human Anatomy with hands-on experience in business management and
              digital solutions. Founder and director of two active ventures
              providing retail fashion and digital services, with a growing
              interest in cybersecurity and online innovation.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-2xl"
            >
              {/* Card 1 */}
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-4 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
              >
                <Image
                  src={
                    isDarkMode
                      ? assets.edu_icon_dark
                      : assets.edu_icon
                  }
                  alt="Education Title 1"
                  className="w-5 mt-2"
                />
                <div>
                  <h3 className="my-2 font-semibold text-gray-700 text-sm dark:text-white">
                    B.Sc. Human Anatomy
                  </h3>
                  <p className="text-gray-600 text-xs dark:text-white/80">
                    Federal University Wukari, Taraba State. Still in progress (Undergraduate)
                  </p>
                </div>
              </motion.li>

              {/* Card 2 */}
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-4 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
              >
                <Image
                  src={
                    isDarkMode
                      ? assets.project_icon_dark
                      : assets.project_icon
                  }
                  alt="Education Title 2"
                  className="w-5 mt-2"
                />
                <div>
                  <h3 className="my-2 font-semibold text-gray-700 text-sm dark:text-white">
                    Director, Dripforge Luxury Boutique
                  </h3>
                  <p className="text-gray-600 text-xs dark:text-white/80">
                    I lead Dripforge, a high-end fashion boutique redefining luxury for the modern lifestyle.
                  </p>
                </div>
              </motion.li>

              {/* Card 3 */}
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-4 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
              >
                <Image
                  src={
                    isDarkMode
                      ? assets.project_icon_dark
                      : assets.project_icon
                  }
                  alt="Education Title 3"
                  className="w-5 mt-2"
                />
                <div>
                  <h3 className="my-2 font-semibold text-gray-700 text-sm dark:text-white">
                    Director, Swiftsub Solution Hub
                  </h3>
                  <p className="text-gray-600 text-xs dark:text-white/80">
                    I provide fast, affordable data and network solutions. My focus is on reliability, accessibility, and customer satisfaction.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            {/* Who I Am Section */}
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.5 }}
              className="my-6 text-gray-700 font-ovo text-lg sm:text-xl md:text-2xl dark:text-white/80"
            >
              Who I Am
            </motion.h4>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="max-w-2xl text-start text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed"
            >
              <h3 className="mb-2 font-semibold text-gray-700 text-base sm:text-lg md:text-xl dark:text-white">
                Creative Technologist & Entrepreneur
              </h3>
              <p>
                I blend business, design, and tech to build brands and tools that solve real-world problems.
                My portfolio reflects a passion for growth, visual excellence, and meaningful innovation.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
