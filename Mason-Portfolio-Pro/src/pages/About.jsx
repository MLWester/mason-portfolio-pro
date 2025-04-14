import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

function About() {
  return (
    <ScrollReveal>
      <section className="max-w-4xl mx-auto text-center px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 text-lg">
          I'm a developer passionate about building user-focused, performance-driven applications using modern tools and best practices.
        </p>
      </section>
    </ScrollReveal>
  );
}

export default About;