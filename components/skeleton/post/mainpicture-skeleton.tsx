import { cn } from '@/lib/utils';
import { Skeleton } from '@nextui-org/react';

export default function MainPictureSkeleton({ size }: { size: string }) {
  return (
    <Skeleton
      className={cn('container h-[12rem] w-full mobile-large:h-[16rem] tablet:h-[24rem]', size)}
    ></Skeleton>
  );
}
