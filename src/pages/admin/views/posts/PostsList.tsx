import React, { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdminRouter } from '../../../../hooks/useAdminRouter';
import { PostsTable } from '../../components/blog/PostsTable';
import { getPosts } from '../../../../lib/posts';

export function PostsList() {
  const { navigate } = useAdminRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-200">Posts</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/admin/posts/new')}
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all flex items-center space-x-2"
        >
          <Plus size={18} />
          <span>New Post</span>
        </motion.button>
      </div>

      <div className="bg-dark-800 rounded-lg border border-dark-600 overflow-hidden">
        <div className="p-4 border-b border-dark-600">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
        <PostsTable posts={posts} loading={loading} />
      </div>
    </div>
  );
}