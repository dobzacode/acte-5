import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function TitleSkeleton({ size }: { size?: string }) {
  return (
    <Skeleton
      className={cn('h-[4rem] rounded-xs laptop:container max-laptop:w-full tablet:h-[6rem]', size)}
    ></Skeleton>
  );
}
