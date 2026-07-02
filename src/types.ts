export type SocialLink = {
  label: string;
  href: string;
};

export type ExpertiseItem = {
  title: string;
  desc: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  desc: string;
  highlights?: string[];
};

export type ProjectItem = {
  year: string;
  title: string;
  desc: string;
  featured?: boolean;
  link: string;
  repo?: string;
  techStack: string[];
  achievements: string[];
  media?: {
    src: string;
    alt: string;
  };
  demo?: string;
  category?: "backend" | "fullstack";
};

export type GalleryItem = {
  name: string;
  src: string;
  alt: string;
};
