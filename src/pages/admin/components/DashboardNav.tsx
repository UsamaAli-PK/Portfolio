import React from 'react';
import { LayoutDashboard, FileText, Image, Settings, Users, LogOut } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export function DashboardNav() {
  const { logout } = useAuth();
  
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/admin' },
    { icon: <FileText size={20} />, label: 'Posts', href: '/admin/posts' },
    { icon: <Image size={20} />, label: 'Media', href: '/admin/media' },
    { icon: <Users size={20} />, label: 'Users', href: '/admin/users' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/admin/settings' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-dark-800 border-r border-dark-600 hidden md:block">
      <div className="p-6">
        <h2 className="text-xl font-bold gradient-text">Admin Panel</h2>
      </div>
      <div className="px-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-indigo-400 hover:bg-dark-700 rounded-lg transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
      <button
        onClick={logout}
        className="absolute bottom-8 left-4 right-4 flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </nav>
  );
}