import React, { useState, useEffect } from 'react';
import { Save, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { EditorToolbar } from '../../components/blog/EditorToolbar';
import { createPost, updatePost } from '../../../../lib/posts';
import { useAuth } from '../../../../hooks/useAuth';
import { useAdminRouter } from '../../../../hooks/useAdminRouter';

interface PostEditorProps {
  postId?: string;
}

export function PostEditor({ postId }: PostEditorProps) {
  const { user } = useAuth();
  const { navigate } = useAdminRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);

    try {
      const postData = {
        title,
        content,
        status,
        author_id: user.id,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      };

      if (postId) {
        await updatePost(postId, postData);
      } else {
        await createPost(postData);
      }

      navigate('/admin/posts');
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    setStatus('published');
    await handleSave();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-200">
          {postId ? 'Edit Post' : 'Create New Post'}
        </h1>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <Save size={18} />
            <span>Save Draft</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePublish}
            disabled={saving}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            <Send size={18} />
            <span>Publish</span>
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 text-xl font-bold focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />

        <EditorToolbar />
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content here..."
          className="w-full h-96 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
}