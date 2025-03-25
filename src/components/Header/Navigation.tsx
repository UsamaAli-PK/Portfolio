import React from 'react';
import { NavLink } from './NavLink';
import { WhatsAppButton } from './WhatsAppButton';
import { NavItem } from '../../types';

interface NavigationProps {
  navItems: NavItem[];
}

export function Navigation({ navItems }: NavigationProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} className="py-2">
          {item.label}
        </NavLink>
      ))}
      <WhatsAppButton />
    </div>
  );
}