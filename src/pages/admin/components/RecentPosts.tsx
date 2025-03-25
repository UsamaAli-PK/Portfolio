import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  status: 'published' | 'draft';
}

const recentPosts: Post[] = [
  {
    id: '1',
    title: 'How to Optimize WordPress Performance',
    author: 'Usama Ali',
    date: '2024-03-15',
    status: 'published'
  },
  {
    id: '2',
    title: 'Essential WordPress Security Tips',
    author: 'Usama Ali',
    date: '2024-03-14',
    status: 'draft'
  },
  {
    id: '3',
    title: 'Custom Gutenberg Blocks Guide',
    author: 'Usama Ali',
    date: '2024-03-13',
    status: 'published'
  }
];

export function RecentPosts() {
  return (
    <div className="bg-dark-800 rounded-lg border border-dark-600 overflow-hidden">
      <div className="p-6 border-b border-dark-600">
        <h2 className="text-xl font-semibold text-gray-200">Recent Posts</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            {recentPosts.map((post) => (
              <tr key={post.id} className="hover:bg-dark-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    post.status === 'published' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-indigo-400 transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}