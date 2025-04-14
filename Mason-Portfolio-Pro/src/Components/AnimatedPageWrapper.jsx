import React from 'react';
import { motion } from 'framer-motion';

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function AnimatedPageWrapper({ children }) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
