import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Usama Ali</h3>
            <p className="text-gray-400 mt-2">WordPress Developer</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/UsamaAli-AR" className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/usamaalipk/" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:usamaaliarofficial@gmail.com" className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Usama Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}