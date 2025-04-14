import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';
import AnimatedPageWrapper from '../Components/AnimatedPageWrapper';

function Projects() {
  return (
    <AnimatedPageWrapper>
      <ScrollReveal>
        <main className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-gray-400 text-base sm:text-lg">
            This is where you'll eventually highlight your key projects. Animated card layout coming soon!
          </p>
        </main>
      </ScrollReveal>
    </AnimatedPageWrapper>
  );
}

export default Projects;
