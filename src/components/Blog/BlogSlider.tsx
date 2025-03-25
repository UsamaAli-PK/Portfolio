import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { useBlogSlider } from '../../hooks/useBlogSlider';

export function BlogSlider() {
  const { currentSlide, nextSlide, prevSlide, slides } = useBlogSlider();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 left-4 right-4 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      <motion.div
        animate={{ x: `${-currentSlide * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex"
      >
        {slides.map((post, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <BlogCard post={post} />
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => currentSlide !== index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-indigo-500' : 'bg-indigo-500/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}