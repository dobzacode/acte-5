import { cn } from '@/lib/utils';
import { Skeleton } from '@nextui-org/react';

export default function TitleSkeleton({ size }: { size?: string }) {
  return <Skeleton className={cn('container h-[4rem] tablet:h-[6rem]', size)}></Skeleton>;
}
