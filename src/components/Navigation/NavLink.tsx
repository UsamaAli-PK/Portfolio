import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className = '' }: NavLinkProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <motion.a
      href={href}
      onClick={scrollToSection}
      className={`block text-gray-300 hover:text-indigo-400 transition-colors relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}