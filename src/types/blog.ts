export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  categories: string[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'scheduled';
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  title: string;
  alt?: string;
  caption?: string;
  uploadedAt: string;
}