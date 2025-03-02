import { Skeleton } from "@/components/ui/skeleton"

const ProjectCardSkeleton = () => {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden w-full">
      <article className="flex flex-col gap-2 w-full tablet:w-3/5">
        <div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Title skeleton */}
                <Skeleton className="h-6 w-40" />
                {/* Date skeleton */}
                <Skeleton className="h-5 w-20 rounded" />
              </div>
            </div>
            {/* Description skeleton */}
            <div className="space-y-1">
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-5/6 max-w-2xl" />
            </div>
          </div>
        </div>
        <div className="mt-auto space-y-2">
          {/* Skills skeleton */}
          <div className="flex items-center gap-2 flex-wrap">
            <Skeleton className="h-6 w-16 rounded" />
            <Skeleton className="h-6 w-20 rounded" />
            <Skeleton className="h-6 w-14 rounded" />
            <Skeleton className="h-6 w-18 rounded" />
            <Skeleton className="h-6 w-18 rounded" />
          </div>

          {/* Social links skeleton */}
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </article>

      {/* Image skeleton */}
      <aside className="w-2/5 aspect-video overflow-hidden rounded-xl hidden tablet:block">
        <Skeleton className="w-full h-full" />
      </aside>
    </div>
  );
};

export default ProjectCardSkeleton;
