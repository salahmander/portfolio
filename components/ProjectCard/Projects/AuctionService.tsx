import Link from "next/link";

import { StepForward } from "lucide-react";

import { SocialIcons } from "@/lib/SocialIcons";

import Picture from "@/components/Picture/Picture";

import AwsImage from "@/public/images/aws.webp"

const AuctionService = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <Link
            href="https://github.com/salahmander/abay-auction-service"
            className="space-y-2 group"
          >
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold font-heading">
                  Auction Service [Archived]
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-secondary">
                  7th February 2022
                </span>
              </div>
              <span className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition">
                <StepForward size={12} />
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl">
              A serverless auction platform inspired by eBay, designed to deepen
              my expertise in Node.js, AWS, and microservices architecture.
              Built using AWS Lambda, API Gateway, DynamoDB, and SQS, this
              project explores event-driven communication, scalable compute
              execution, and streamlined Lambda function handling with the
              Serverless Framework.
            </p>
          </Link>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            {["JavaScript", "Node.js", "AWS", "Serverless", "DynamoDB"].map(
              (tag) => (
                <p
                  key={tag}
                  className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer"
                >
                  {tag}
                </p>
              )
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/salahmander/abay-auction-service"
              target="_blank"
              className="social-link"
            >
              {SocialIcons.github}
              <span className="sr-only">
                GitHub - https://github.com/salahmander/abay-auction-service
              </span>
            </a>
          </div>
        </div>
      </article>

      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Link href="https://github.com/salahmander/abay-auction-service">
          <Picture
            image={AwsImage}
            imageDark={AwsImage}
            width={500}
            height={250}
            quality={100}
            alt="AWS Logo"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition"
          />
        </Link>
      </aside>
    </div>
  );
};

export default AuctionService;
