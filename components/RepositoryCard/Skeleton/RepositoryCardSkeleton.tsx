import { Skeleton } from "@/components/ui/skeleton";

const RepositorySkeletonCard = () => {
  return (
    <div className="w-full min-h-[90px] rounded-lg p-3 border text-sm">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2">
          {/* Repository name */}
          <Skeleton className="h-5 w-40" />
          {/* Star count */}
          <Skeleton className="h-4 w-12 ml-auto" />
        </div>
        {/* Description */}
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-5/6 mt-1" />
        <div className="flex items-center gap-2 mt-auto pt-2">
          {/* Language */}
          <Skeleton className="h-5 w-16 rounded" />
          {/* Forks */}
          <Skeleton className="h-4 w-14" />
          {/* Created date */}
          <Skeleton className="h-4 w-20 ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default RepositorySkeletonCard;
