import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how I can help bring your WordPress project to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-200">
                  Email
                </h3>
                <a
                  href="mailto:usamaaliarofficial@gmail.com"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  usamaaliarofficial@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-200">
                  Phone
                </h3>
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  +923405862464
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-200">
                  Location
                </h3>
                <p className="text-gray-400">Punjab ,PK</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, subject: e.target.value }))
                }
                required
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                required
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
