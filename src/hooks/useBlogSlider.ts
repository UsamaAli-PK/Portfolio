import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blog';

export function useBlogSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = blogPosts;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return { currentSlide, nextSlide, prevSlide, slides };
}