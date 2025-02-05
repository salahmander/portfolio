import { calculateJobDuration } from "./JobCard.helpers";
import type { JobCardProps } from "./JobCard.types";

const JobCard = ({ job }: JobCardProps) => {
  const { startDate, endDate, isCurrent } = job;
  const jobDuration = calculateJobDuration(startDate, isCurrent, endDate);
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-heading text-lg"
        >
          {job.companyName}
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {job.employmentType}
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {job.location}
          </span>
        </div>
      </div>
      <p className="text-s">{job.description}</p>
      <p className="text-xs px-2 text-right">
        {startDate} - {isCurrent ? "Present" : endDate} · {jobDuration}
      </p>
      <p className="tracking-tight text-lg font-bold">{job.position}</p>
      <ul className="list-disc pl-5 text-sm ">
        {job.achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}:</strong> {achievement.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
