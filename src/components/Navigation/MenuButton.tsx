import React from 'react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <motion.button
      className="relative w-8 h-8 flex items-center justify-center md:hidden"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute w-6 h-[2px] bg-current transition-all duration-300">
        <motion.span
          className="absolute left-0 top-0 w-full h-full bg-current rounded-full"
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
        />
        <motion.span
          className="absolute left-0 bottom-0 w-full h-full bg-current rounded-full"
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
        />
      </div>
    </motion.button>
  );
}