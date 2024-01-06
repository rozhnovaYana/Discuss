import { Skeleton } from "@nextui-org/react";

const SkeletonLoading = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48" />
      </div>
      <p className="p-4 border rounded space-y-8">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </p>
    </div>
  );
};
export default SkeletonLoading;
