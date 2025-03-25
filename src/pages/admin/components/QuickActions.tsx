import React from 'react';
import { Plus, FileText, Image, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdminRouter } from '../../../hooks/useAdminRouter';

export function QuickActions() {
  const { navigate } = useAdminRouter();

  const actions = [
    { icon: <Plus size={20} />, label: 'New Post', onClick: () => navigate('/admin/posts/new') },
    { icon: <FileText size={20} />, label: 'All Posts', onClick: () => navigate('/admin/posts') },
    { icon: <Image size={20} />, label: 'Media Library', onClick: () => navigate('/admin/media') },
    { icon: <Settings size={20} />, label: 'Settings', onClick: () => navigate('/admin/settings') }
  ];

  return (
    <div className="bg-dark-800 rounded-lg border border-dark-600 overflow-hidden">
      <div className="p-6 border-b border-dark-600">
        <h2 className="text-xl font-semibold text-gray-200">Quick Actions</h2>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            onClick={action.onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
              {action.icon}
            </div>
            <span className="text-sm text-gray-300">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}