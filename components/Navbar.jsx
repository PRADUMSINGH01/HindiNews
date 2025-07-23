// components/Navbar.jsx
"use client";

import { useState } from "react";
import { useTheme } from "../app/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiBook } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const categories = [
    "मुख्य समाचार",
    "राजनीति",
    "मनोरंजन",
    "खेल",
    "तकनीक",
    "व्यापार",
    "स्वास्थ्य",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 reading:bg-amber-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">स</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800 dark:text-white reading:text-amber-900">
                  समाचार दर्पण
                </span>
                <p className="text-xs opacity-70">
                  हिंदी समाचार का विश्वसनीय स्रोत
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {categories.slice(0, 5).map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary reading:text-amber-800 reading:hover:text-amber-900 font-medium transition-colors"
              >
                {item}
              </a>
            ))}

            <div className="flex items-center space-x-3 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 reading:bg-amber-100 text-gray-700 dark:text-gray-300 reading:text-amber-800 hover:bg-gray-200 dark:hover:bg-gray-700 reading:hover:bg-amber-200 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <FiSun size={20} />
                ) : theme === "dark" ? (
                  <FiMoon size={20} />
                ) : (
                  <FiBook size={20} />
                )}
              </button>

              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
                लॉग इन
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 reading:bg-amber-100 text-gray-700 dark:text-gray-300 reading:text-amber-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FiSun size={20} />
              ) : theme === "dark" ? (
                <FiMoon size={20} />
              ) : (
                <FiBook size={20} />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 reading:text-amber-800 p-2"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Secondary Desktop Navigation */}
        <div className="hidden md:flex justify-center border-t border-gray-100 dark:border-gray-800 reading:border-amber-100 mt-2 py-2">
          <div className="flex space-x-1">
            {categories.slice(5).map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-1 text-sm text-gray-600 hover:text-primary dark:text-gray-400 reading:text-amber-700 reading:hover:text-amber-800 transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#" className="px-3 py-1 text-sm text-primary font-medium">
              और...
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 reading:bg-amber-50">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {categories.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 reading:text-amber-800 reading:hover:bg-amber-100 transition-colors border-b border-gray-100 dark:border-gray-800 reading:border-amber-100"
              >
                {item}
              </a>
            ))}
            <div className="px-3 py-4">
              <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md font-medium transition-colors">
                लॉग इन
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
