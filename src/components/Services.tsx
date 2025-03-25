import React from 'react';
import { Code2, Palette, Gauge, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Custom WordPress Development',
    description: 'Tailored WordPress solutions built from scratch to match your unique requirements and brand identity.'
  },
  {
    icon: <Palette size={24} />,
    title: 'Theme Customization',
    description: 'Expert modification of WordPress themes to create a distinctive look while maintaining functionality.'
  },
  {
    icon: <Gauge size={24} />,
    title: 'Performance Optimization',
    description: 'Speed up your WordPress site for better user experience and improved search engine rankings.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Maintenance',
    description: 'Regular updates, security monitoring, and maintenance to keep your site running smoothly.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Services I Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive WordPress solutions to help your business succeed online
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient p-6 rounded-lg border border-dark-600 hover:border-indigo-500 transition-all duration-300 hover:glow"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}