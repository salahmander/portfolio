export type Project = {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  images: {
    light: string;
    dark: string;
  };
  webUrl: string;
  skills: Array<{ id: string; name: string; color: string }>;
  createdAt: string;
  isArchived: boolean;
};
