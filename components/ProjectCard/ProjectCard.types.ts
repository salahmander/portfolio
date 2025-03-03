type Images = {
  light: string;
  dark?: string;
};

type Skill = {
  id: string;
  name: string;
  color: string;
}

export type ProjectType = {
  id: string;
  name: string;
  isArchived: boolean;
  githubUrl: string;
  webUrl: string;
  createdAt: string;
  description: string;
  skills: Skill[];
  images: Images;
};

export type ProjectCardProps = {
  project: ProjectType;
};
