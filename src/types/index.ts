export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;

  technologies: string[];

  image?: string;
  gallery?: string[];

  featured?: boolean;

  github?: string;
  demo?: string;
  video?: string;

  year?: number;
}