import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold text-lime-400 mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="text-lime-300 border border-lime-400 px-5 py-2 rounded hover:bg-lime-400 hover:text-gray-950 transition"
      >
        Go Back Home
      </Link>
    </motion.section>
  );
}
