import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="bg-dark-800 border-b border-dark-600 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-400 hover:text-indigo-400 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-dark-600 pl-4">
          <span className="text-sm text-gray-300">{user?.email}</span>
          <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}