"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { navigationLinks } from "./NavigationBar.helpers";

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className="inline-flex items-center text-sm rounded-lg nav-container">
      {navigationLinks.map(({ url, title }, index) => {
        const active =
          pathname === url || (pathname.includes(url) && url !== "/");
        const firstIndex = index === 0;
        const lastIndex = index === navigationLinks.length - 1;

        return (
          <Link key={index} href={url}>
            <div
              className={cn(
                "p-2 min-w-16 lg:min-w-32 text-center hover:bg-secondary cursor-pointer border-t-[0.5px] bg-background transition-all duration-100 ease-out",
                active ? "current hover:bg-background" : "nav-item",
                firstIndex && "rounded-l-lg border-l-[0.5px]",
                lastIndex && "rounded-r-lg border-r-[0.5px]"
              )}
            >
              {title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBar;
