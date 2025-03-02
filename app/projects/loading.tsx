import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";

import ProjectCardSkeleton from "@/components/ProjectCard/Skeleton/ProjectCardSkeleton";

const ProjectsLoadingPage = () => {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="flex flex-col items-center relative w-full mx-auto lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 space-y-4 w-full max-w-4xl mx-auto">
            {[...Array(5)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsLoadingPage;
