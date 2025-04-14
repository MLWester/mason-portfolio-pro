import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

function Contact() {
  return (
    <ScrollReveal>
      <section className="max-w-3xl mx-auto text-center px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-4">Let’s Connect</h1>
        <p className="text-gray-400 mb-8 text-lg">
          If you're looking for a reliable, driven developer who can turn ideas into clean, efficient, and scalable software — I'm ready to contribute.
        </p>
        <div className="space-y-4 text-lime-300 text-lg">
          <p>
            📧 Email:{' '}
            <a
              href="mailto:masonwester21@gmail.com"
              className="underline hover:text-lime-400"
            >
              masonwester21@gmail.com
            </a>
          </p>
          <p>
            💻 GitHub:{' '}
            <a
              href="https://github.com/MLWester"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lime-400"
            >
              github.com/MLWester
            </a>
          </p>
          <p>
            🔗 LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/masonwester"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lime-400"
            >
              linkedin.com/in/masonwester
            </a>
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Contact;