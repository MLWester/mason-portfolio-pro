import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-lime-300 ${
      isActive ? 'text-lime-400 font-semibold' : 'text-gray-400'
    }`;

  return (
    <>
      {/* Header */}
      <header className="bg-gray-950 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-lime-400">MW</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/skills" className={navLinkClass}>Skills</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `ml-2 border px-4 py-1 rounded transition ${
                  isActive
                    ? 'border-lime-400 bg-lime-400 text-gray-950 font-semibold'
                    : 'border-lime-400 text-lime-300 hover:bg-lime-400 hover:text-gray-950'
                }`
              }
            >
              Resume
            </NavLink>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-lime-400 focus:outline-none text-2xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 px-4 space-y-3 text-sm"
            >
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/projects" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/skills" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Skills</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `block border text-center py-1 rounded transition ${
                    isActive
                      ? 'border-lime-400 bg-lime-400 text-gray-950 font-semibold'
                      : 'border-lime-400 text-lime-300 hover:bg-lime-400 hover:text-gray-950'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </NavLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="min-h-screen bg-gray-950 text-white pt-28 px-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Mason Wester. Built with React + Tailwind.</p>
      </footer>
    </>
  );
}
