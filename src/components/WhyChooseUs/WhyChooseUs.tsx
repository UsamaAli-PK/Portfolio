import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gauge, Shield, Users, Zap, Trophy } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Code2,
    title: 'Custom Solutions',
    description: 'Tailored WordPress development that perfectly matches your unique business requirements and goals.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimized',
    description: 'Lightning-fast websites with optimized code and advanced caching for the best user experience.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-level security measures to protect your website from threats and vulnerabilities.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Clear communication, timely delivery, and exceptional support throughout the project lifecycle.'
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'Latest WordPress features and technologies to keep your website ahead of the competition.'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Track record of delivering successful projects that exceed client expectations.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of creativity, technical expertise, and professional service
            that sets us apart in WordPress development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}