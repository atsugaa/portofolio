export interface ProjectLink {
  type: "github" | "huggingface" | "demo" | "gameplay";
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  gallery?: string[];
  featured?: boolean;
  links?: ProjectLink[];
  year?: number;
}