import React from 'react';
import { HeroImage } from './HeroImage';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
}