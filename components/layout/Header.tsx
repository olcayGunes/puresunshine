'use client';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  const menuItems = useMemo(() => [
    { href: "#home", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#why-us", text: "Why Us" },
    { href: "#contact", text: "Contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      menuItems.forEach((item) => {
        const element = document.getElementById(item.href.slice(1));
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentScrollPos >= offsetTop - 100 &&
            currentScrollPos < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-700">
            Pure Sunshine
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className={`text-gray-600 hover:text-indigo-700 transition-colors relative ${
                  activeSection === item.href.substring(1) ? 'text-indigo-700 font-semibold' : ''
                }`}
              >
                {item.text}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-700"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-700 transition-colors ${
                    activeSection === item.href.substring(1) ? 'text-indigo-700 font-semibold bg-indigo-50 rounded-lg' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header; 