import React from 'react';

export default function About() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <p className="text-lime-400 text-sm mb-2">Hi, my name is</p>
      <h1 className="text-5xl font-bold text-white mb-4">Mason Wester.</h1>
      <h2 className="text-3xl text-gray-400 font-semibold mb-6">
        I build clean, data-driven software.
      </h2>
      <p className="text-gray-400 mb-8">
        I'm a developer focused on building practical, accessible, and performance-oriented applications. I love working with databases, web technologies, and solving real-world problems through code.
      </p>
      <a
        href="/projects"
        className="inline-block border border-lime-400 text-lime-300 px-6 py-2 rounded hover:bg-lime-400 hover:text-gray-950 transition"
      >
        View My Work
      </a>
    </section>
  );
}
