import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ProfileOverview from "@/components/ProfileOverview/ProfileOverview";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import type { ProjectType } from "@/components/ProjectCard/ProjectCard.types";

import { getProjects } from "../actions/getProjects";

const ProjectsPage = async () => {
  const projects = await getProjects();
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap lg:divide-x">
        <section className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <ProfileOverview />
        </section>
        <section className="flex flex-col items-center relative w-full mx-auto lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-auto">
          <NavigationBar />
          <div className="my-8 space-y-4 max-w-4xl">
            {sortedProjects.map((project: ProjectType) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
