import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

const ProjectCard = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <Link href={"/"} className="space-y-2 group/link">
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">
                Lorem, ipsum.
              </h1>
              <span className="text-xs px-2 py-1 rounded bg-secondary">
                20th April 2024
              </span>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            hic voluptate libero natus earum? Blanditiis a dignissimos, rem
            obcaecati, id quia quidem, eligendi aspernatur aliquam placeat
            possimus nulla natus enim deleniti. Quos, nam repudiandae, velit
            explicabo eaque perspiciatis eligendi consequuntur, fugiat aliquid
            delectus placeat? Porro necessitatibus aspernatur quod minus
            aliquid.
          </p>
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer">
            React
          </p>
          <p className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer">
            Next.js
          </p>
          <p className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer">
            JavaScript
          </p>
          <p className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer">
            TypeScript
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/salahmander"
            target="_blank"
            className="social-link"
          >
            {SocialIcons["github" as keyof typeof SocialIcons]}
            <span className="sr-only">
              github - https://github.com/salahmander
            </span>
          </a>
        </div>
      </div>
      <div className="w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl hidden tablet:block">
        <Link href={`/`}>
          <Picture
            image="https://picsum.photos/250/100"
            imageDark="https://picsum.photos/250/100"
            width={250}
            height={100}
            quality={100}
            alt={"lorem picsum"}
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
