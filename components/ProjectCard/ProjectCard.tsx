import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import type { ProjectCardProps } from "./ProjectCard.types";

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link href="/" className="space-y-2 group">
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  {project.name} {project.isArchived && "[Archived]"}
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  {project.created_at}
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              {project.description}
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {project.skills.map((skill) => (
              <p
                key={skill}
                className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer"
              >
                {skill}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.links.map(({ social, link }) => (
              <a
                key={social}
                href={link}
                target="_blank"
                className="social-link"
              >
                {SocialIcons[social as keyof typeof SocialIcons]}
                <span className="sr-only">
                  {social} - {link}
                </span>
              </a>
            ))}
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="/">
          <Picture
            image={project.images.light}
            imageDark={project.images.dark || project.images.light}
            width={250}
            height={100}
            quality={100}
            alt={`picture of ${project.name} project`}
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default ProjectCard;
