import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left space-y-6"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
      >
        Usama Ali
      </motion.h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
        <TypeAnimation
          sequence={[
            'Crafting Digital Experiences',
            1000,
            'Building WordPress Solutions',
            1000,
            'Creating Custom Themes',
            1000,
            'Developing Powerful Plugins',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Professional WordPress Developer specializing in creating beautiful, 
        functional, and user-friendly websites that drive results.
      </p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <motion.a 
          href="#portfolio" 
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all hover:scale-105 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
          <ArrowRight size={20} />
        </motion.a>
        <motion.a 
          href="#contact" 
          className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.div>
  );
}