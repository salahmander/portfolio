import { calculateJobDuration } from "../JobCard.helpers";

const BullionByPost = () => {
  const startDate = "2019-09-01";
  const endDate = "2020-12-01";
  const isCurrent = false;
  const jobDuration = calculateJobDuration(startDate, isCurrent, endDate);
  return (
    <div>
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href="https://www.bullionbypost.co.uk/"
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          BullionByPost
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Full-time
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Birmingham, UK (Hybrid)
          </span>
        </div>
      </div>
      <p className="text-s">(B2C) – Online gold & silver retailer</p>
      <p className="text-xs px-2 text-right">Sep 2019 - Dec 2020 · {jobDuration}</p>

      <p className="tracking-tight text-lg font-bold">
        Junior Full Stack Software Engineer
      </p>
      <div className="flex flex-wrap gap-1 mb-2">
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Django
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Python
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          JavaScript
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          HTML/CSS
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          CI/CD
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          PostgreSQL
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Agile
        </span>
      </div>
      <ul className="list-disc pl-5 text-sm ">
        <li>
          <strong>Maintained and developed</strong> a{" "}
          <strong>multi-national E-commerce site</strong> and{" "}
          <strong>internal admin interface</strong> using{" "}
          <strong>
            Python (Django), PostgreSQL, CircleCI, JavaScript, HTML, and CSS
          </strong>
          .
        </li>
        <li>
          <strong>Implemented and updated</strong> application modules, and{" "}
          <strong>coded software changes</strong> according to{" "}
          <strong>design specifications</strong>.
        </li>
      </ul>
    </div>
  );
};

export default BullionByPost;
