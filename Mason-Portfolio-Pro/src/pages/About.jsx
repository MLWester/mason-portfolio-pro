import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../Components/ParticlesBackground';

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16"
      >
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 text-lg">
          I'm a developer passionate about building user-focused, performance-driven applications using modern tools and best practices.
        </p>
      </motion.div>
    </section>
  );
}
