import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Shield,
  Terminal,
  Workflow,
  Laptop,
  Gauge,
  Settings,
  Layout,
} from 'lucide-react';
import { skills } from '../../data/skills';

const skillIcons: Record<string, JSX.Element> = {
  'WordPress Development': <Globe className="w-6 h-6" />,
  'Theme Customization': <Layout className="w-6 h-6" />,
  'Plugin Configuration': <Settings className="w-6 h-6" />,
  WooCommerce: <Laptop className="w-6 h-6" />,
  'Landing Pages': <Gauge className="w-6 h-6" />,
  'API Integration': <Server className="w-6 h-6" />,
  'Security Implementation': <Shield className="w-6 h-6" />,
  'Graphic Design': <Palette className="w-6 h-6" />,
};

export function Skills() {
  return (
    <section className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(skillIcons).map(([skill, icon], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="group relative perspective"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative p-6 bg-dark-800/90 backdrop-blur-sm rounded-xl border border-dark-600 group-hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <h3 className="text-gray-300 group-hover:text-indigo-300 transition-colors mt-4">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
