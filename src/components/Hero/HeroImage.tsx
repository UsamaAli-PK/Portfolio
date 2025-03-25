import React from 'react';
import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto"
    >
      <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-pulse-slow"></div>
      <img
        src="https://i.ibb.co/XxpqzW4/usamaali.jpg?auto=format&fit=crop&q=80&w=300&h=300"
        alt="Usama Ali - WordPress Developer"
        className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500/20"
        loading="eager"
      />
      <motion.div
        className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
