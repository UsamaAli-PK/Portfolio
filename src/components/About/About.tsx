import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';

export function About() {
  return (
    <section id="about" className="py-16 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://i.ibb.co/XxpqzW4/usamaali.jpg?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Workspace"
                className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-50 blur-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                About Me
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a passionate WordPress developer with over 5 years of
                experience in creating custom WordPress solutions. My expertise
                spans from building complex e-commerce platforms to developing
                custom plugins that solve unique business challenges.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and following
                WordPress best practices to ensure optimal performance and
                security. My goal is to deliver websites that not only look
                great but also drive real business results.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 card-gradient rounded-lg border border-dark-600 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
