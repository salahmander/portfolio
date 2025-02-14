import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import JobCard from "@/components/JobCard/JobCard";

import { getWorkExperience } from "./actions/getWorkExperience";
import type { WorkExperience } from "@/components/JobCard/JobCard.types";

const HomePage = async () => {
  const workExperience = await getWorkExperience();

  const sortedWorkExperience = workExperience.sort(
    (a, b) =>
      new Date(b.date.start).getTime() - new Date(a.date.start).getTime()
  );
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="flex flex-col items-center relative w-full lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 w-full self-start max-w-xl space-y-10">
            {sortedWorkExperience.map((job: WorkExperience) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
