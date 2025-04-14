import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

function About() {
  return (
    <ScrollReveal>
      <main className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 text-base sm:text-lg">
          I'm a developer passionate about building user-focused, performance-driven applications using modern tools and best practices.
        </p>
      </main>
    </ScrollReveal>
  );
}

export default About;
