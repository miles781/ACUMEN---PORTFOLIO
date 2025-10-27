"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVenturesDropdownOpen, setIsVenturesDropdownOpen] = useState(false);
  const sideMenuRef = useRef();
  const dropdownRef = useRef();

  // Sidebar functionality from Version 1
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleVenturesDropdown = () => {
    setIsVenturesDropdownOpen(!isVenturesDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVenturesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isVenturesDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isVenturesDropdownOpen, isMobileMenuOpen]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Scroll effect with improved performance from Version 2
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Responsive cleanup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Navigation configuration
  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const ventures = [
    { 
      name: "Swiftsub", 
      href: "https://swiftsub.com",
      logo: assets.swifthublogo
    },
    { 
      name: "Swifverify", 
      href: "https://swifverify.com",
      logo: null
    },
    { 
      name: "Dripforge Boutique", 
      href: "https://wa.me/+2349165545880?text=Welcome%20to%20Dripforge%20Luxury%20Boutique!%20Where%20style%20meets%20class%20and%20every%20outfit%20tells%20your%20story.%20Looking%20for%20the%20perfect%20fit?%20You%E2%80%99re%20in%20the%20right%20place.",
      logo: null
    },
  ];

  return (
    <>
      {/* Background shape for header from Version 2 */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Main navbar with improved positioning from Version 2 */}
      <div className="w-full fixed top-0 left-0 z-50">
        <nav
          className={`w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between 
            transition-all duration-300 ${
              isScroll
                ? "bg-white/95 backdrop-blur-xl shadow-lg dark:bg-gray-900/95 dark:shadow-gray-900/40 py-3"
                : "bg-transparent dark:bg-transparent"
            }`}
          style={{ 
            height: '70px',
            minHeight: '70px'
          }}
        >
          {/* Left: Brand Recognition - Updated: Logo removed, gradient text only */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="#top" 
              className="flex items-center hover:opacity-80 transition-opacity group"
              aria-label="Swift Empire LTD - Go to homepage"
            >
              <div className="flex flex-col">
                <span className={`font-bold transition-all duration-300 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent ${
                  isScroll ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                } leading-tight tracking-tight`}>
                  SWIFT EMPIRE LTD
                </span>
              </div>
            </a>
          </div>

          {/* Middle: Navigation Links + Ecosystem Dropdown from Version 2 */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <ul className="flex items-center gap-6" role="menubar">
              {navLinks.map((link, index) => (
                <li key={index} role="none">
                  <a
                    className="font-medium relative group text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap text-[14px] px-2 py-1 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    href={link.href}
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
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
                    {link.name}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 transform"></span>
                  </a>
                </li>
              ))}
              
              {/* Swift Ecosystem Dropdown from Version 2 */}
              <li className="relative" ref={dropdownRef} role="none">
                <button
                  onClick={toggleVenturesDropdown}
                  className="font-medium flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap text-[14px] px-2 py-1 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
                  aria-expanded={isVenturesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Swift Ecosystem dropdown"
                  role="menuitem"
                >
                  Swift Ecosystem
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isVenturesDropdownOpen ? 'rotate-180 scale-110' : 'scale-100'} group-hover:scale-110`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu from Version 2 */}
                {isVenturesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-64 bg-white/95 dark:bg-gray-900/95 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl z-50 py-2 animate-in fade-in-0 zoom-in-95 duration-300"
                    role="menu"
                    aria-label="Swift Ecosystem brands"
                  >
                    {ventures.map((venture, index) => (
                      <a
                        key={index}
                        href={venture.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 group"
                        role="menuitem"
                        onClick={() => setIsVenturesDropdownOpen(false)}
                      >
                        {venture.logo ? (
                          <Image
                            src={venture.logo}
                            alt={`${venture.name} logo`}
                            className="w-5 h-5 object-contain flex-shrink-0"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full"></div>
                          </div>
                        )}
                        <span className="font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white">
                          {venture.name}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Right: Interaction (Theme + Contact) from Version 2 */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Theme toggle from Version 2 */}
            <button 
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110 hover:shadow-lg"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Image
                  src={assets.sun_icon}
                  alt="Light mode"
                  className="w-5"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={assets.moon_icon}
                  alt="Dark mode"
                  className="w-5"
                  width={20}
                  height={20}
                />
              )}
            </button>

            {/* Contact button from Version 2 */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-blue-500 text-white 
                         rounded-xl font-semibold text-[13px] hover:shadow-xl transition-all duration-300
                         hover:scale-105 whitespace-nowrap hover:from-rose-600 hover:to-blue-600 transform"
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
              Contact
              <Image
                alt="arrow icon"
                src={assets.arrow_icon_dark}
                className="w-3 transition-transform duration-300 group-hover:translate-x-1"
                width={12}
                height={12}
              />
            </a>
          </div>

          {/* Mobile Navigation from Version 2 */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            {/* Theme toggle mobile from Version 2 */}
            <button 
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Image
                  src={assets.sun_icon}
                  alt="Light mode"
                  className="w-5"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={assets.moon_icon}
                  alt="Dark mode"
                  className="w-5"
                  width={20}
                  height={20}
                />
              )}
            </button>

            <button 
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu icon"
                className="w-5"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* Mobile Sidebar Menu from Version 1 (with styling from Version 2) */}
          <div
            ref={sideMenuRef}
            className="fixed top-0 right-0 w-80 h-screen z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl 
                       transform translate-x-full transition-transform duration-300 ease-in-out 
                       md:hidden flex flex-col border-l border-gray-200/50 dark:border-gray-700/50"
          >
            {/* Header with styling from Version 2 - Updated: Removed "SWIFT EMPIRE LTD" text */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-xl bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent tracking-tight">
                    Swift Empire
                  </span>
                </div>
              </div>
              <button 
                onClick={closeMenu}
                className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="close icon"
                  className="w-5"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* Navigation Links with styling from Version 2 */}
            <div className="flex-1 px-6 py-4">
              <nav className="space-y-2" role="menu">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-900 dark:text-white 
                             hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300 font-semibold text-base border border-transparent hover:border-rose-200 dark:hover:border-rose-800 group"
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      const target = document.querySelector(link.href);
                      if (target) {
                        const navbarHeight = 70;
                        const targetPosition = target.offsetTop - navbarHeight;
                        setTimeout(() => {
                          window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                          });
                        }, 300);
                      }
                    }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Swift Ecosystem Section with styling from Version 2 */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                Swift Ecosystem
              </h3>
              <div className="space-y-2">
                {ventures.map((venture, index) => (
                  <a
                    key={index}
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 
                             transition-colors text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    onClick={closeMenu}
                  >
                    {venture.logo ? (
                      <Image
                        src={venture.logo}
                        alt={`${venture.name} logo`}
                        className="w-5 h-5 object-contain"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                    <span className="font-medium text-sm">{venture.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Contact Button with styling from Version 2 */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 
                           bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-xl 
                           font-semibold text-sm hover:shadow-xl transition-all duration-300 hover:from-rose-600 hover:to-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const target = document.querySelector('#contact');
                  if (target) {
                    const navbarHeight = 70;
                    const targetPosition = target.offsetTop - navbarHeight;
                    setTimeout(() => {
                      window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                      });
                    }, 300);
                  }
                }}
              >
                Contact Us
                <Image
                  alt="arrow icon"
                  src={assets.arrow_icon_dark}
                  className="w-3 transition-transform duration-300 group-hover:translate-x-1"
                  width={12}
                  height={12}
                />
              </a>
            </div>
          </div>

          {/* Mobile menu overlay from Version 1 */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;