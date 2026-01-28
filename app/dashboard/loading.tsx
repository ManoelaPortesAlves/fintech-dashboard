import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>

      <Skeleton className="h-60" />
    </div>
  );
}
