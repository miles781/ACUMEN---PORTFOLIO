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
      className="w-full px-6 md:px-[8%] py-16 scroll-mt-20"
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
        className="text-center text-4xl md:text-5xl font-ovo"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            icon: assets.mobile_icon,
            title: 'Smart VTU & Utility Services',
            desc: 'Enjoy seamless airtime, data, cable TV, and electricity payments — fast and reliable.',
            link: 'https://swiftsub.com.ng/',
          },
          {
            icon: assets.mongodb,
            title: 'Trendy Fashion, Styled for You',
            desc: 'Step into style with clothing, bags, and accessories designed for daily confidence and lasting impressions.',
            link: 'https://wa.me/+2349165545880?text=Welcome%20to%20Dripforge%20Luxury%20Boutique!%20Where%20style%20meets%20class%20and%20every%20outfit%20tells%20your%20story.%20Looking%20for%20the%20perfect%20fit?%20You%E2%80%99re%20in%20the%20right%20place.',
          },
          {
            icon: assets.firebase,
            title: 'Powering Style & Connectivity',
            desc: 'We blend fashion with digital services. Partner with us to bring convenience and innovation to your customers and community.',
            link: 'https://wa.me/+2349165545880?text=Thank%20you%20for%20your%20interest%20in%20partnering%20with%20us...',
          },
          {
            icon: assets.git,
            title: 'Document Verification Platform',
            desc: 'Swifverify is a trusted platform for secure, fast verifications, document upgrades, and educational support — all with reliable service and full customer care',
            link: 'https://www.swifverify.com.ng',
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col justify-between text-center border border-gray-300 rounded-xl px-6 py-10 transition duration-300
              bg-white dark:bg-zinc-900 hover:bg-[#fbd2c5] dark:hover:bg-darkhover dark:hover:shadow-white shadow-sm h-[420px]"
          >
            <div>
              <Image
                src={card.icon}
                className="w-20 h-20 rounded-full mb-4 object-cover mx-auto"
                alt={`${card.title} Icon`}
              />
              <h3 className="text-lg mb-2 text-gray-700 dark:text-white font-semibold">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-6 dark:text-white/80 mb-6">
                {card.desc}
              </p>
            </div>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 dark:hover:bg-darkhover dark:hover:shadow-white transition"
            >
              Access Service
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
