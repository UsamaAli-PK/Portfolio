import React from 'react';
import { Code2, Palette, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <Code2 size={24} />, title: 'Clean Code' },
  { icon: <Palette size={24} />, title: 'Modern Design' },
  { icon: <Gauge size={24} />, title: 'Performance' }
];

export function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((item, index) => (
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
  );
}