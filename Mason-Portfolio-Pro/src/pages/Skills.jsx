import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';
import AnimatedPageWrapper from '../Components/AnimatedPageWrapper';

const devSkills = [
  'C#',
  'SQL',
  'Entity Framework',
  'Razor Pages',
  'React',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'HTML',
  'CSS',
  'GitHub',
  'VS Code',
];

const dataSkills = [
  'Excel',
  'RapidMiner',
  'Data Cleaning',
  'Data Visualization',
  'Statistical Analysis',
  'Predictive Modeling',
  'Data Mining',
];

export default function Skills() {
  return (
    <AnimatedPageWrapper>
      <ScrollReveal>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10">Tech Stack</h1>

          {/* Development Section */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-lime-400 mb-6">
              Development Tools & Languages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {devSkills.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium border border-lime-400 shadow-sm hover:scale-105 hover:border-lime-300 transition-transform duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Data Analytics Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-lime-400 mb-6">
              Data Analytics & Visualization
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {dataSkills.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium border border-lime-400 shadow-sm hover:scale-105 hover:border-lime-300 transition-transform duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </main>
      </ScrollReveal>
    </AnimatedPageWrapper>
  );
}
