import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';
import AnimatedPageWrapper from '../Components/AnimatedPageWrapper';

function Skills() {
  const techStack = [
    'C#', 'SQL', 'Entity Framework', 'Razor Pages', 'React',
    'Tailwind CSS', 'Bootstrap', 'JavaScript', 'GitHub',
    'VS Code', 'HTML', 'CSS'
  ];

  return (
    <AnimatedPageWrapper>
      <ScrollReveal>
        <main className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Tech Stack</h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Here's a quick overview of the technologies and tools I work with regularly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium border border-lime-400 shadow-sm hover:scale-105 hover:border-lime-300 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </main>
      </ScrollReveal>
    </AnimatedPageWrapper>
  );
}

export default Skills;
