import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'Custom WooCommerce solution for a fashion retailer',
    image: 'https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'WooCommerce', 'Custom Theme']
  },
  {
    title: 'Corporate Website',
    description: 'Modern website for a consulting firm',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'Elementor', 'Custom Plugins']
  },
  {
    title: 'Blog Platform',
    description: 'High-performance blog with custom features',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'Gutenberg', 'SEO']
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent WordPress development work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-75 transition-all flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}