import { MdStringObject } from "notion-to-md/build/types";

type Skill = {
  id: string;
  name: string;
  color: string;
};

type WorkExperienceDates = {
  start: string;
  end?: string;
  time_zone?: string;
};

export type WorkExperience = {
  id: string;
  companyName: string;
  companyUrl: string;
  employmentType: string;
  location: string;
  date: WorkExperienceDates;
  isCurrent: boolean;
  position: string;
  description: string;
  skills: Skill[];
  content: MdStringObject | null;
};

export type JobCardProps = {
  job: WorkExperience;
};
