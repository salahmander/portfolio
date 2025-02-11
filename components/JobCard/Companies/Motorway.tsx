import { calculateJobDuration } from "../JobCard.helpers";

const Motorway = () => {
  const startDate = "2022-04-01";
  const isCurrent = true;
  const jobDuration = calculateJobDuration(startDate, isCurrent);
  return (
    <div>
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href="https://motorway.co.uk/"
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          Motorway
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Full-time
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            London, UK (Hybrid)
          </span>
        </div>
      </div>
      <p className="text-s">
        (B2B) – Online marketplace for selling used cars to dealers
      </p>
      <p className="text-xs px-2 text-right">
        Apr 2022 - Current · {jobDuration}
      </p>

      <p className="tracking-tight text-lg font-bold">Frontend Engineer</p>
      <div className="flex flex-wrap gap-1 mb-2">
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          React
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          TypeScript/JavaScript
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          HTML/CSS
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Jest/React Testing Library
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          AWS
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Datadog
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          WebSockets
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Storybook
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          CI/CD
        </span>
        <span className="text-xs font-bold px-2 py-1 bg-secondary rounded cursor-default">
          Agile
        </span>
      </div>
      <p className="text-sm">
        Focused on the vehicle profiling journey, managing both the Mobile
        Photos Web App and the Main Seller Web App, where customers prepared
        their vehicles for auction by providing detailed vehicle information,
        photos, and damages.
      </p>
      <ul className="list-disc pl-5 text-sm ">
        <li>
          <strong>Led development</strong> of an{" "}
          <strong>AI-powered image assistance</strong> feature that reduced the{" "}
          <strong>resupply request rate</strong> from <strong>13% to 6%</strong>{" "}
          in the first month, achieving an <strong>87% compliance rate</strong>{" "}
          among sellers for reuploading flagged photos. Utilised{" "}
          <strong>React, WebSockets, and TypeScript.</strong>
        </li>
        <li>
          <strong>Led proof-of-concept</strong> and contributed to the{" "}
          <strong>Minimum Viable Product development</strong> for revamping the{" "}
          <strong>Mobile Photos Web App</strong>. Identified challenges, devised
          solutions, and <strong>integrated Google Analytics tags</strong>,
          resulting in a <strong>damage declaration increase</strong> from{" "}
          <strong>63% to 69%</strong>, <strong>user retention rise</strong> from{" "}
          <strong>76% to 88%</strong>, and{" "}
          <strong>code coverage improvement</strong> on{" "}
          <strong>SonarCloud</strong> from <strong>0% to 60%</strong>.
        </li>
        <li>
          <strong>Led enhancements</strong> in{" "}
          <strong>vehicle profiling</strong> and{" "}
          <strong>seller communication</strong>, improving visibility on{" "}
          <strong>vehicle checks</strong> and <strong>sale listings</strong>,
          resulting in a <strong>65% increase</strong> in{" "}
          <strong>first-time resolution of inquiries</strong>, significantly
          enhancing <strong>communication efficiency</strong> and{" "}
          <strong>process streamlining</strong>.
        </li>
        <li>
          <strong>Developed DataDog dashboards</strong> to monitor{" "}
          <strong>error rates</strong>, <strong>release-specific issues</strong>
          , <strong>warnings</strong>, <strong>network failures</strong>, and{" "}
          <strong>feature performance</strong>, contributing to a{" "}
          <strong>30% reduction in overall errors</strong>.
        </li>
        <li>
          <strong>Designed engineering guides</strong> and{" "}
          <strong>process documentation</strong> to streamline{" "}
          <strong>onboarding</strong>, ensuring smoother knowledge transfer.{" "}
          <strong>Assisted in creating detailed documentation</strong> on{" "}
          <strong>review app creation</strong>, <strong>staging</strong>, and{" "}
          <strong>production deployment.</strong>
        </li>
        <li>
          <strong>Actively contributed</strong> to the{" "}
          <strong>recruitment process</strong> by{" "}
          <strong>reviewing take-home assignments</strong> and participating in{" "}
          <strong>live coding interviews</strong> and{" "}
          <strong>cultural interviews.</strong>
        </li>
      </ul>
    </div>
  );
};

export default Motorway;
