import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <div className="w-full">
      <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
        {/* Company name */}
        <Skeleton className="h-6 w-40" />
        <div className="flex gap-2 ml-auto">
          {/* Employment type */}
          <Skeleton className="h-5 w-20 rounded" />
          {/* Location */}
          <Skeleton className="h-5 w-20 rounded" />
        </div>
      </div>
      {/* Description */}
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-3/4 mt-1" />
      <div className="flex justify-end mt-2">
        {/* Date and duration */}
        <Skeleton className="h-4 w-40" />
      </div>
      {/* Position */}
      <Skeleton className="h-6 w-1/2 mt-2" />
      <div className="flex flex-wrap gap-1 my-2">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-5 w-16 rounded" /> /* Skills */
        ))}
      </div>
      <div className="space-y-2 mt-4">
        {/* Content */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
      </div>
    </div>
  );
};

export default JobCardSkeleton;
