import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="bg-gray-950 text-white p-6 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest text-lime-400">MW</h1>
          <nav className="space-x-6 text-sm">
  <Link to="/about" className="text-gray-400 hover:text-lime-300">About</Link>
  <Link to="/projects" className="text-gray-400 hover:text-lime-300">Projects</Link>
  <Link to="/skills" className="text-gray-400 hover:text-lime-300">Skills</Link>
  <Link to="/contact" className="text-gray-400 hover:text-lime-300">Contact</Link>
  <Link
    to="/resume"
    className="ml-4 border border-lime-400 px-4 py-1 rounded hover:bg-lime-400 hover:text-gray-950 transition"
  >
    Resume
  </Link>
</nav>

        </div>
      </header>

      <main className="min-h-screen bg-gray-950 text-white pt-28 px-6">
        <Outlet />
      </main>


      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Mason Wester. Built with React + Tailwind.</p>
      </footer>
    </>
  );
}
