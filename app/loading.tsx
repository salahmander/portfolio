import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";

import NavigationBar from "@/components/NavigationBar/NavigationBar";

import JobCardSkeleton from "@/components/JobCard/Skeleton/JobCardSkeleton";

const HomeLoadingPage = async () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="flex flex-col items-center relative w-full lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 w-full self-start max-w-xl space-y-10">
            {[...Array(3)].map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLoadingPage;
