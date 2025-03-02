import { Suspense } from "react";

import Link from "next/link";

import ReactMarkdown from "react-markdown";

import Socials from "@/components/Socials/Socials";
import ThemeToggler from "../Theme/ThemeToggler/ThemeToggler";
import { getProfileOverview } from "@/app/actions/getProfileOverview/getProfileOverview";
import ProfileOverviewSkeleton from "./Skeleton/ProfileOverviewSkeleton";

const ProfileContent = async () => {
  const profileOverview = await getProfileOverview();

  if (!profileOverview) {
    return <ProfileOverviewSkeleton />;
  }

  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="https://www.salahabdo.co.uk/">
        <span className="font-mono text-sm underline">salahabdo.co.uk</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{profileOverview.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h2 className="mt-2 text-lg">
        {profileOverview.tag_line} <span className="sr-only">tagline</span>
      </h2>
      <div className="my-6 max-w-2xl text-foreground/90">
        <ReactMarkdown>{profileOverview.summary.parent}</ReactMarkdown>
        <span className="sr-only">bio</span>
      </div>
      <Socials />
      <div className="flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {profileOverview.skills.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.options.map((option) => option.name).join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
};

const ProfileOverview = () => {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Suspense fallback={<ProfileOverviewSkeleton />}>
        <ProfileContent />
      </Suspense>
    </section>
  );
};

export default ProfileOverview;
