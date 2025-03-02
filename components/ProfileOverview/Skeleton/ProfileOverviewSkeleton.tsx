
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import Socials from "@/components/Socials/Socials";

import ThemeToggler from "../../Theme/ThemeToggler/ThemeToggler";

const ProfileOverviewSkeleton = () => {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="https://www.salahabdo.co.uk/">
        <span className="font-mono text-sm underline">salahabdo.co.uk</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        {/* Name */}
        <Skeleton className="h-8 w-48" />
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h2 className="mt-2 text-lg">
        {/* Tagline */}
        <Skeleton className="h-6 w-3/4 mt-2" />
      </h2>
      <div className="my-6 max-w-2xl text-foreground/90">
        {/* Summary */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-11/12 mt-2" />
        <Skeleton className="h-4 w-5/6 mt-2" />
      </div>
      <Socials />
      <div className="flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* Skill category */}
            <Skeleton className="h-4 w-24" />
            {/* Skill options */}
            <Skeleton className="h-4 flex-grow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileOverviewSkeleton;
