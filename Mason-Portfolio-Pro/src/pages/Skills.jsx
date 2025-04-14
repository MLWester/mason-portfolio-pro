import React from 'react';
import { motion } from 'framer-motion';


function Skills() {
  const techStack = [
    'React',
    'Tailwind CSS',
    'Vite',
    'Framer Motion',
    'JavaScript',
    'C#',
    'SQL',
    'Entity Framework',
    'Razor Pages',
    'Bootstrap',
    'HTML',
    'CSS',
    'PostCSS',
    'Git & GitHub',
    'Agile / Scrum',
    'Debugging & DevTools',
    'VS Code'
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-4xl mx-auto text-center px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-white mb-6">Tech Stack</h1>
      <p className="text-gray-400 mb-8">
        Here's a quick overview of the technologies and tools I work with regularly.
      </p>
  
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium border border-lime-400 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
  
}

export default Skills;
