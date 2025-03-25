import React from 'react';
import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';
import { Skill } from '../../types';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h4 className="text-lg font-medium text-gray-300 mb-4 capitalize">
        {category}
      </h4>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            level={skill.level}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}