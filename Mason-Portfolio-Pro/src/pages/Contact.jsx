import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';
import AnimatedPageWrapper from '../Components/AnimatedPageWrapper';

function Contact() {
  return (
    <AnimatedPageWrapper>
      <ScrollReveal>
        <main className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let’s Connect</h1>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            If you're looking for a reliable, driven developer who can turn ideas into clean, efficient, and scalable software — I'm ready to contribute.
          </p>
          <div className="space-y-4 text-lime-300 text-base sm:text-lg">
            <p>
              📧 Email:{' '}
              <a href="mailto:masonwester21@gmail.com" className="underline hover:text-lime-400 transition-colors">
                masonwester21@gmail.com
              </a>
            </p>
            <p>
              💻 GitHub:{' '}
              <a
                href="https://github.com/MLWester"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lime-400 transition-colors"
              >
                github.com/MLWester
              </a>
            </p>
            <p>
              🔗 LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/mason-wester/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lime-400 transition-colors"
              >
                linkedin.com/in/masonwester
              </a>
            </p>
          </div>
        </main>
      </ScrollReveal>
    </AnimatedPageWrapper>
  );
}

export default Contact;
