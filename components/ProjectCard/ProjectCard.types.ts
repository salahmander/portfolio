type Link = {
  social: string;
  link: string;
};

type Images = {
  light: string;
  dark?: string;
};

export type ProjectType = {
  name: string;
  isArchived: boolean;
  created_at: string;
  description: string;
  skills: string[];
  links: Link[];
  images: Images;
};

export type ProjectCardProps = {
  project: ProjectType;
};
