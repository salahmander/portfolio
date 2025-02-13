import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";

import { calculateJobDuration } from "./JobCard.helpers";

import type { JobCardProps } from "./JobCard.types";

const JobCard = ({ job }: JobCardProps) => {
  const {
    date: { start, end },
    isCurrent,
  } = job;

  const jobDuration = calculateJobDuration(start, isCurrent, end);
  const startDate = dayjs(start).format("MMM YYYY");
  const endDate = end ? dayjs(end).format("MMM YYYY") : "";
  return (
    <div>
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
        {startDate} - {isCurrent ? "Current" : endDate} · {jobDuration}
      </p>
      <p className="tracking-tight text-lg font-bold">{job.position}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {job.skills.map((skill) => (
          <span
            key={skill.id}
            className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
      <div className="text-sm">
        <ReactMarkdown
          components={{
            ul: ({ children }) => (
              <ul className="list-disc pl-5 text-sm ">{children}</ul>
            ),
            li: ({ children }) => <li>{children}</li>,
          }}
        >
          {job.content.parent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default JobCard;
