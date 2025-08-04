import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      {/* Logo and email */}
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          swiftsub86@gmail.com
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Emmanuel Godwin Awom. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="wa.me/2349165545880"
              className="flex items-center gap-2"
            >
              <Image
                src={assets.web_icon}
                alt="GitHub"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              Whatsapp
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100090157310181&mibextid=wwXIfr&mibextid=wwXIfr"
              className="flex items-center gap-2"
            >
              <Image
                src={assets.graphics_icon}
                alt="LinkedIn"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/acumen0916?igsh=MTJ2NnR4NXNhN2NrZQ%3D%3D&utm_source=qr"
              className="flex items-center gap-2"
            >
              <Image
                src={assets.figma}
                alt="Facebook"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
