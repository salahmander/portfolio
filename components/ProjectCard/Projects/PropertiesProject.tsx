import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import PropertiesImage from "@/public/images/properties.webp";

const PropertiesProject = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link
            href="https://github.com/salahmander/properties-project"
            className="space-y-2 group"
          >
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  Real Estate Platform
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  16th January 2025
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              A full-stack real estate application built to enhance my
              understanding of Next.js. Also, to explore server-side rendering
              (SSR), static site generation (SSG), authentication, and database
              integration. Features include Google authentication (NextAuth),
              property listing CRUD, Cloudinary image uploads, Mapbox
              integration, internal messaging, bookmarking, and social media
              sharing. Designed with Tailwind for responsive UI, this project
              deepened my expertise in Next.js, and MongoDB.
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Shadcn/UI",
              "MongoDB",
            ].map((tag) => (
              <p
                key={tag}
                className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://properties-project-y8ic.vercel.app/"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.website}
              <span className="sr-only">
                Webpage - https://properties-project-y8ic.vercel.app/
              </span>
            </a>
            <a
              href="https://github.com/salahmander/properties-project"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/properties-project
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="https://github.com/salahmander/properties-project">
          <Picture
            image={PropertiesImage}
            imageDark={PropertiesImage}
            width={500}
            height={250}
            quality={100}
            alt="Real Estate Platform"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default PropertiesProject;
