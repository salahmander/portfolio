import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import PortfolioImage from "@/public/images/portfolio.webp";

const Portfolio = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link
            href="https://github.com/salahmander/portfolio"
            className="space-y-2 group"
          >
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  Portfolio
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  5th December 2025
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              This is my personal portfolio, built with Next.js, React, and
              Tailwind CSS. It serves as a hub to showcase my growth as a
              developer, featuring projects, skills, contact info, and
              scheduling. I’m actively maintaining and upgrading it, with future
              plans for résumé generation, an admin panel, and backend
              integration.
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
              href="https://www.salahabdo.co.uk/"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.website}
              <span className="sr-only">
                Webpage - https://www.salahabdo.co.uk/
              </span>
            </a>
            <a
              href="https://github.com/salahmander/portfolio"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/portfolio
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="https://github.com/salahmander/portfolio">
          <Picture
            image={PortfolioImage}
            imageDark={PortfolioImage}
            width={500}
            height={250}
            quality={100}
            alt="Portfolio"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default Portfolio;
