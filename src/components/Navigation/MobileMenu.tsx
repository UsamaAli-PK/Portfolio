import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { WhatsAppButton } from './WhatsAppButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-md border-t border-dark-600 overflow-hidden z-50"
          >
            <div className="px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    className="block"
                  >
                    <NavLink
                      href={item.href}
                      onClick={() => {
                        onClose();
                      }}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                variants={itemVariants}
                custom={navItems.length}
                className="mt-6"
              >
                <WhatsAppButton className="w-full justify-center" />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}