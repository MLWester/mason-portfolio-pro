import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

// Actual routed components
const About = () => (
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

const Projects = () => (
  <section className="text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Projects Page</h2>
    <p className="text-gray-400">Coming soon...</p>
  </section>
);

const Skills = () => (
  <section className="text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Skills Page</h2>
    <p className="text-gray-400">Tech stack, tools, and proficiencies</p>
  </section>
);

const Contact = () => (
  <section className="text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="text-gray-400">Email: masonwester21@gmail.com</p>
  </section>
);

const Resume = () => (
  <section className="text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <a
      href="/Mason_Wester_Resume.pdf"
      download
      className="border border-lime-400 text-lime-300 px-6 py-2 rounded hover:bg-lime-400 hover:text-gray-950 transition"
    >
      Download Resume
    </a>
  </section>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}
