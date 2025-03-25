import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-indigo-600 transition-colors">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <a 
          href="#" 
          className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
        >
          Read More →
        </a>
      </div>
    </motion.article>
  );
}