import { calculateJobDuration } from "../JobCard.helpers";

const Faurecia = () => {
  const startDate = "2017-01-01";
  const endDate = "2018-01-01";
  const isCurrent = false;
  const jobDuration = calculateJobDuration(startDate, isCurrent, endDate);
  return (
    <div>
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href="https://www.forvia.com/en"
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          Faurecia (Forvia)
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Internship
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Banbury, UK
          </span>
        </div>
      </div>
      <p className="text-s">(B2B) – Automotive components for manufacturers.</p>
      <p className="text-xs px-2 text-right">2017 - 2018 · {jobDuration}</p>
      <p className="tracking-tight text-lg font-bold">
        Information System Engineer
      </p>
      <ul className="list-disc pl-5 text-sm ">
        <li>
          <strong>Oversaw daily operations</strong> of{" "}
          <strong>network and IT systems</strong>, including{" "}
          <strong>
            database management, data processing, and user support
          </strong>{" "}
          at the assigned <strong>BMW Mini facility</strong>.
        </li>
        <li>
          <strong>
            Ensured security indicator maintenance and improvement
          </strong>
          , consistently meeting <strong>90% KPI targets</strong>.
        </li>
        <li>
          <strong>Optimised 30-minute work windows</strong> by effectively
          prioritising tasks, ensuring{" "}
          <strong>100% system functionality</strong>.
        </li>
      </ul>
    </div>
  );
};

export default Faurecia;
