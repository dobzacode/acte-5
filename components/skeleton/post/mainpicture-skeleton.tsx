import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export default function MainPictureSkeleton({ size }: { size: string }) {
  return (
    <Skeleton
      className={cn(
        'h-[12rem] w-full rounded-xs laptop:container mobile-large:h-[16rem] tablet:h-[24rem]',
        size
      )}
    ></Skeleton>
  );
}
