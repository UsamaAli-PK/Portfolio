import React from 'react';
import { ArrowRight, Code2, Palette, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
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
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8"
          >
            Professional WordPress Developer specializing in creating beautiful, 
            functional, and user-friendly websites that drive results.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="#portfolio" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Code2 size={24} />, title: 'Clean Code' },
            { icon: <Palette size={24} />, title: 'Modern Design' },
            { icon: <Gauge size={24} />, title: 'Performance' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              className="card-gradient p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}