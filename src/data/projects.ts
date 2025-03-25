import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'E-commerce Fashion Store',
    description: 'Custom WooCommerce solution with advanced filtering and personalized recommendations',
    image: 'https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'WooCommerce', 'Custom Theme'],
    link: 'https://example.com',
    testimonial: {
      text: "Usama delivered an exceptional e-commerce solution that exceeded our expectations. Sales have increased by 40% since launch.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Boutique"
    }
  },
  {
    title: 'Corporate Consulting Platform',
    description: 'Modern website with custom booking system and client portal',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'Elementor', 'Custom Plugins'],
    link: 'https://example.com',
    testimonial: {
      text: "The custom booking system has streamlined our operations and improved client satisfaction.",
      author: "Michael Chen",
      role: "Director, Business Solutions"
    }
  },
  {
    title: 'News & Media Platform',
    description: 'High-performance news portal with real-time updates and subscription system',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    tags: ['WordPress', 'Gutenberg', 'SEO'],
    link: 'https://example.com',
    testimonial: {
      text: "Our page load times improved significantly, and the custom subscription system works flawlessly.",
      author: "Emma Davis",
      role: "Editor in Chief"
    }
  }
];