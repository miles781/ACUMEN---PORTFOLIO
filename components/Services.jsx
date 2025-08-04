'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[8%] py-16 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Founder and director of two active ventures providing retail fashion and digital services, with a growing interest in cybersecurity and online innovation.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {/* Card 1 - VTU */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center text-center border border-gray-300 rounded-xl px-6 py-10 transition duration-300
                     bg-white dark:bg-zinc-900 hover:bg-[#fbd2c5] dark:hover:bg-darkhover dark:hover:shadow-white shadow-sm"
        >
          <Image
            src={assets.mobile_icon}
            className="w-24 h-24 rounded-full mb-4 object-cover"
            alt="VTU Icon"
          />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">Smart VTU & Utility Services</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-4">
            Enjoy seamless airtime, data, cable TV, and electricity payments — fast and reliable.
          </p>
          <a
            href="https://swiftsub.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 dark:hover:bg-darkhover dark:hover:shadow-white transition"
          >
            Access Service
          </a>
        </motion.div>

        {/* Card 2 - Fashion */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center text-center border border-gray-300 rounded-xl px-6 py-10 transition duration-300
                     bg-white dark:bg-zinc-900 hover:bg-[#fbd2c5] dark:hover:bg-darkhover dark:hover:shadow-white shadow-sm"
        >
          <Image
            src={assets.mongodb}
            className="w-24 h-24 rounded-full mb-4 object-cover"
            alt="Fashion Icon"
          />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">Trendy Fashion, Styled for You</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-4">
            Step into style with clothing, bags, and accessories designed for daily confidence.
          </p>
          <a
            href="https://wa.me/+2349165545880?text=Welcome%20to%20Dripforge%20Luxury%20Boutique!%20Where%20style%20meets%20class%20and%20every%20outfit%20tells%20your%20story.%20Looking%20for%20the%20perfect%20fit?%20You%E2%80%99re%20in%20the%20right%20place."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 dark:hover:bg-darkhover dark:hover:shadow-white transition"
          >
            Access Service
          </a>
        </motion.div>

        {/* Card 3 - Combined Partnership */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center text-center border border-gray-300 rounded-xl px-6 py-10 transition duration-300
                     bg-white dark:bg-zinc-900 hover:bg-[#fbd2c5] dark:hover:bg-darkhover dark:hover:shadow-white shadow-sm"
        >
          <Image
            src={assets.firebase}
            className="w-24 h-24 rounded-full mb-4 object-cover"
            alt="Partnership Icon"
          />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">Powering Style & Connectivity</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-4">
            We blend fashion with digital services. Partner with us to bring convenience to your customers.
          </p>
          <a
            href="https://wa.me/+2349165545880?text=Thank%20you%20for%20your%20interest%20in%20partnering%20with%20us.%20We%20believe%20in%20quality,%20elegance,%20and%20strong%20collaborations.%20Let%E2%80%99s%20create%20something%20stylish%20and%20impactful%20together.%20Kindly%20tell%20us%20more%20about%20your%20brand%20or%20proposal,%20we%E2%80%99re%20excited%20to%20hear%20from%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 dark:hover:bg-darkhover dark:hover:shadow-white transition"
          >
            Access Service
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
