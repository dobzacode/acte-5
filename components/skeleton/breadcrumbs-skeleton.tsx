import { Skeleton } from '@/components/ui/skeleton';

export default function BreadcrumbsSkeleton({ size }: { size: string }) {
  return (
    <div className="flex w-full flex-col gap-5 self-start laptop:container laptop:mx-auto">
      <Skeleton className="h-14 w-1/2 rounded-xs" />
      <Skeleton className="h-8 w-1/3 rounded-xs" />
      <Skeleton className="h-6 w-2/5 rounded-xs" />
    </div>
  );
}
