import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import PostmanImage from "@/public/images/postman.webp"

const NachtBootcamp = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link
            href="https://github.com/salahmander/Nacht-Bootcamp-API"
            className="space-y-2 group"
          >
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  Nacht Bootcamp API [Archived]
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  20th January 2021
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              Nacht Bootcamp is a backend API project for a bootcamp directory
              app, allowing users to find development bootcamps and publishers
              to post new ones. Built with Node.js, Express, and MongoDB, this
              project deepened my expertise in RESTful API development,
              authentication, advanced Mongoose queries, and API security best
              practices.
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {[
              "JavaScript",
              "Express.js",
              "Node.js",
              "MongoDB",
              "RESTful API",
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
              href="https://documenter.getpostman.com/view/6010540/Tz5jfgVG"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.website}
              <span className="sr-only">
                Postman -
                https://documenter.getpostman.com/view/6010540/Tz5jfgVG
              </span>
            </a>
            <a
              href="https://github.com/salahmander/Nacht-Bootcamp-API"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/Nacht-Bootcamp-API
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="/">
          <Picture
            image={PostmanImage}
            imageDark={PostmanImage}
            width={500}
            height={250}
            quality={100}
            alt="Lorem Picsum"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default NachtBootcamp;
