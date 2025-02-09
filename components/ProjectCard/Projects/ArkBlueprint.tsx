import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

const ArkBlueprint = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link
            href="https://github.com/salahmander/ark-blueprint-storage"
            className="space-y-2 group"
          >
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  ARK Blueprint Storage System
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  1st November 2024
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              ARK Blueprint Storage System is a blueprint management tool
              designed for ARK: Survival Ascended tribes, allowing members to
              efficiently organize, browse, and access available blueprints.
              Initially created in React, the project is now being developed in
              Next.js. Built with Next.js, React, and TailwindCSS, this system
              enhances tribe coordination by providing a structured and
              searchable inventory of blueprints.
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Shadcn/UI",
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
              href="https://github.com/salahmander/ark-blueprint-storage"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/ark-blueprint-storage
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="/">
          <Picture
            image="https://picsum.photos/250/100"
            imageDark="https://picsum.photos/250/100"
            width={250}
            height={100}
            quality={100}
            alt="Lorem Picsum"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default ArkBlueprint;
