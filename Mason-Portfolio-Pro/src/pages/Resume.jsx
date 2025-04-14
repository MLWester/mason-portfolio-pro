import React from "react";
import AnimatedPageWrapper from "../Components/AnimatedPageWrapper";

export default function Resume() {
  return (
    <AnimatedPageWrapper>
      <main className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Resume</h1>
        <p className="text-gray-400 mb-6 text-base sm:text-lg">
          Click below to download a PDF copy of my resume.
        </p>
        <a
          href="/Mason-Wester-Resume.pdf"
          className="text-lime-300 border border-lime-400 px-5 py-2 rounded hover:bg-lime-400 hover:text-gray-950 transition"
          download
        >
          Download Resume
        </a>
      </main>
    </AnimatedPageWrapper>
  );
}
