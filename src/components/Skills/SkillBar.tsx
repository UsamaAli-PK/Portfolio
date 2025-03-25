import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300 group-hover:text-indigo-400 transition-colors">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-400 transition-colors">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}