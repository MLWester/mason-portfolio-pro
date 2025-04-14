import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

export default function Layout() {
  return (
    <>
      <ParticlesBackground />

      <header className="bg-gray-950 text-white p-6 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-lime-400">MW</h1>
          <nav className="space-x-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-lime-300">About</Link>
            <Link to="/skills" className="text-gray-400 hover:text-lime-300">Skills</Link>
            <Link to="/projects" className="text-gray-400 hover:text-lime-300">Projects</Link>
            <Link to="/contact" className="text-gray-400 hover:text-lime-300">Contact</Link>
            <Link to="/resume" className="border border-lime-400 px-3 py-1 rounded hover:bg-lime-400 hover:text-black">Resume</Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-transparent text-white pt-28 px-6 relative z-10">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 relative z-10">
        <p>&copy; {new Date().getFullYear()} Mason Wester. Built with React + Tailwind.</p>
      </footer>
    </>
  );
}
