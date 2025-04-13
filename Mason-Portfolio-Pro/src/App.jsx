import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './pages/About';

const Projects = () => (
  <section className="text-center text-white">Projects Page</section>
);
const Skills = () => (
  <section className="text-center text-white">Skills Page</section>
);
const Contact = () => (
  <section className="text-center text-white">Contact</section>
);
const Resume = () => (
  <section className="text-center text-white">Resume</section>
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
