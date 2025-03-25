import React from 'react';
import { motion } from 'framer-motion';
import { Bold, Italic, Link, Image, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { EditorToolbar } from './EditorToolbar';
import { MediaUploader } from './MediaUploader';
import { PostMetadata } from './PostMetadata';
import { useEditor } from '../../../hooks/useEditor';

export function Editor() {
  const { content, setContent, handleSave, handlePublish } = useEditor();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800 rounded-lg shadow-xl p-6"
      >
        <PostMetadata />
        <EditorToolbar />
        
        <div className="mt-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 text-2xl font-bold focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="mt-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here..."
            className="w-full h-96 px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handlePublish}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            Publish
          </button>
        </div>
      </motion.div>
    </div>
  );
}