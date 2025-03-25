import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  className?: string;
}

export function WhatsAppButton({ className = '' }: WhatsAppButtonProps) {
  return (
    <motion.a
      href="https://wa.me/923405862464"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-75"></span>
      </div>
      <span className="hidden md:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}