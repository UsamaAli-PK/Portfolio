import { useMemo } from 'react';
import { NavItem } from '../types';

export function useNavigation() {
  const navItems = useMemo<NavItem[]>(() => [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ], []);

  return { navItems };
}