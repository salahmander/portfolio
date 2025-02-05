const LevelPrime = () => {
  return (
    <div>
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        <a
          href="https://www.levelprime.com/en/"
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          Level Prime
        </a>
        <div className="flex gap-2 ml-auto">
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Full-time
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            Remote
          </span>
        </div>
      </div>
      <p className="text-s">
        (SDaaS) – For Honda R&D Germany
      </p>
      <p className="text-xs px-2 text-right">Jan 2021 - Aug 2022</p>

      <p className="tracking-tight text-lg font-bold">Software Engineer</p>
      <ul className="list-disc pl-5 text-sm ">
        <li>
          <strong>Led the enhancements</strong> to the{" "}
          <strong>graphical graph editor</strong> for{" "}
          <strong>Honda R&D Germany</strong>, now adopted as a{" "}
          <strong>global standard</strong> across{" "}
          <strong>12 Honda R&D institutes</strong>. Leveraged expertise in{" "}
          <strong>React, Redux, and JavaScript</strong> to improve functionality
          and usability.
        </li>
        <li>
          <strong>Conducted in-depth research</strong> and{" "}
          <strong>validated innovative tools and technologies</strong>,
          delivering <strong>actionable insights</strong> to senior department
          heads at <strong>Honda R&D Germany</strong> for potential integration
          into the <strong>graphical graph editor</strong>.
        </li>
        <li>
          <strong>Directed the development</strong> of a{" "}
          <strong>cutting-edge feature</strong> for assessing{" "}
          <strong>subjective quality metrics</strong> across{" "}
          <strong>200+ vehicles</strong>, leveraging a{" "}
          <strong>custom-designed layered hybrid aster plot</strong>.
          Implemented using <strong>React, Redux, Plotly.js, and Python</strong>{" "}
          to enhance <strong>data visualisation and analysis</strong>.
        </li>
      </ul>
    </div>
  );
};

export default LevelPrime;
