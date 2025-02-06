import { calculateJobDuration } from "../JobCard.helpers";

const UmbraCreations = () => {
  const startDate = "2024-08-01";
  const endDate = "";
  const isCurrent = true;
  const jobDuration = calculateJobDuration(startDate, isCurrent, endDate);
  return (
    <div>
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href="/"
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          Umbra Creations
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Freelance
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Remote
          </span>
        </div>
      </div>
      <p className="text-s">(SDaaS) – Freelance</p>
      <p className="text-xs px-2 text-right">
        Aug 2024 - Current · {jobDuration}
      </p>

      <p className="tracking-tight text-lg font-bold">Software Engineer</p>
      <ul className="list-disc pl-5 text-sm ">
        <li>Freelancing</li>
      </ul>
    </div>
  );
};

export default UmbraCreations;
