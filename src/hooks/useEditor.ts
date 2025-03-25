import { useState } from 'react';

export function useEditor() {
  const [content, setContent] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const handleSave = async () => {
    try {
      // Save draft logic
      setIsDirty(false);
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  };

  const handlePublish = async () => {
    try {
      // Publish logic
      setIsDirty(false);
    } catch (error) {
      console.error('Error publishing post:', error);
    }
  };

  return {
    content,
    setContent,
    isDirty,
    handleSave,
    handlePublish,
  };
}