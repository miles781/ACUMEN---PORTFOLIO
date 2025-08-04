'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Welcome to my portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        As the director of a VTU platform and fashion shop, I invite you to explore the latest services and projects I've delivered. From innovative digital solutions to stylish fashion offerings, discover how I'm helping people stay connected and look their best.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-5xl font-ovo mt-20"
      >
        My work
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-12 dark:text-black"
      >
        {/* CARD 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.mobile_icon}
              alt="VTU Recharge Portal"
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">VTU Recharge Portal</h2>
              <p className="text-sm text-gray-700 pt-1">Affordable airtime, data, and utility payments system.</p>
            </div>

            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm ml-4">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-[14px]"
                width={14}
                height={14}
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.mongodb}
              alt="Online Fashion Store"
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">Online Fashion Store</h2>
              <p className="text-sm text-gray-700 pt-1">Trendy wears for men & women, delivered nationwide.</p>
            </div>

            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm ml-4">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-[14px]"
                width={14}
                height={14}
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.firebase}
              alt="Partnership Dashboard"
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">Partnership </h2>
              <p className="text-sm text-gray-700 pt-1"> Partner with us for fashion and VTU services.</p>
            </div>

            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm ml-4">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-[14px]"
                width={14}
                height={14}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="mt-14 w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto dark:text-white dark:border-white dark:hover:bg-darkhover"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow : assets.right_arrow_bold}
          alt="Right arrow"
          width={20}
          height={20}
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
