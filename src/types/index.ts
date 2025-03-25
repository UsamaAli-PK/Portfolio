export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface Achievement {
  number: string;
  label: string;
  description: string;
}