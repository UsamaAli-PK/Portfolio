import React from 'react';
import { motion } from 'framer-motion';

interface ToolbarButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
}

export function ToolbarButton({ icon, tooltip, onClick }: ToolbarButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-dark-600 rounded transition-colors relative group"
      onClick={onClick}
    >
      {icon}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-dark-600 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </span>
    </motion.button>
  );
}