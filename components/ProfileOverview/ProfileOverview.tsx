import Link from "next/link";

import localText from "./ProfileOverview.text.json";
import Socials from "@/components/Socials/Socials";
import ThemeToggler from "../Theme/ThemeToggler/ThemeToggler";

const ProfileOverview = () => {
  const skills = localText.profileOverview.skills;
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="https://www.salahabdo.co.uk/">
        <span className="font-mono text-sm underline">
          {localText.profileOverview.sitename}
        </span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{localText.profileOverview.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {localText.profileOverview.tagline}{" "}
        <span className="sr-only">tagline</span>
      </h3>
      <p className=" my-6 max-w-2xl text-foreground/90">
        Hey 👋 <strong>Salah</strong> here! I&apos;m a{" "}
        <strong>Software Engineer</strong> with a{" "}
        <strong>Computer Science degree</strong> and over{" "}
        <strong>4 years</strong> of <strong>experience</strong> delivering
        high-quality software solutions. Skilled in{" "}
        <strong>React, TypeScript, JavaScript, and Python</strong>, with a
        proven track record of building scalable, user-centric applications.
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skills.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.options.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProfileOverview;
