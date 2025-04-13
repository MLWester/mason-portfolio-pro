import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-950 text-white p-6 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-lime-400">MW</h1>
          <nav className="space-x-6 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-lime-300">01. About</Link>
            <Link to="/projects" className="text-gray-400 hover:text-lime-300">02. Projects</Link>
            <Link to="/skills" className="text-gray-400 hover:text-lime-300">03. Skills</Link>
            <Link to="/contact" className="text-gray-400 hover:text-lime-300">04. Contact</Link>
            <Link to="/resume" className="ml-4 border border-lime-400 px-4 py-1 rounded hover:bg-lime-400 hover:text-gray-950 transition">Resume</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="pt-36 px-6 max-w-6xl mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-20">
        <p>&copy; 2025 Mason Wester. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
