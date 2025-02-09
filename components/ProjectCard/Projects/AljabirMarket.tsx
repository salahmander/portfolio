import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import MarketImage from "@/public/images/market.webp"

const AljabirMarket = () => {
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
                  Al-Jabir Market [Archived]
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  1st December 2020
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              Al-Jabir Market is a full-stack eCommerce application where users
              can browse, search, and purchase products. Built with React,
              Redux, Node.js, Express, and MongoDB, this project integrated my
              expertise in state management, secure authentication, payment
              integration (PayPal & credit/debit cards), and admin dashboard
              development for managing products, users, and orders.
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {[
              "React",
              "JavaScript",
              "Redux",
              "Express.js",
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
              href="https://github.com/salahmander/jabir-ecommerce"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/jabir-ecommerce
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="https://github.com/salahmander/jabir-ecommerce">
          <Picture
            image={MarketImage}
            imageDark={MarketImage}
            width={500}
            height={250}
            quality={100}
            alt="E-commerce"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default AljabirMarket;
