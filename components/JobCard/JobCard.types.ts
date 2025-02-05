export type JobDetails = {
  companyName: string;
  companyUrl: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  position: string;
  description: string;
  achievements: { title: string; details: string }[];
};

export type JobCardProps = {
  job: JobDetails;
};
