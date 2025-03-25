import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-75 transition-all flex items-center justify-center"
          >
            <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
          </a>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.testimonial && (
          <blockquote className="border-l-4 border-indigo-600 pl-4 mt-4">
            <p className="text-gray-600 italic mb-2">{project.testimonial.text}</p>
            <footer className="text-sm">
              <strong>{project.testimonial.author}</strong>
              <span className="text-gray-500"> - {project.testimonial.role}</span>
            </footer>
          </blockquote>
        )}
      </div>
    </div>
  );
}