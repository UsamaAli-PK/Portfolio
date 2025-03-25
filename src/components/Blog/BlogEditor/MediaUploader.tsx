import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function MediaUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic
  };

  return (
    <div className="mt-4">
      <motion.div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-indigo-500 bg-indigo-500/10' : 'border-dark-600'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-300">
          Drag and drop your images here, or click to select files
        </p>
      </motion.div>
    </div>
  );
}