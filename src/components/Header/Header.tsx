import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { MenuButton } from './MenuButton';
import { useNavigation } from '../../hooks/useNavigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navItems } = useNavigation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative w-full bg-dark-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <motion.a 
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Usama Ali
          </motion.a>

          <Navigation navItems={navItems} />

          <MenuButton 
            isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </nav>

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navItems={navItems}
        />
      </div>
    </header>
  );
}