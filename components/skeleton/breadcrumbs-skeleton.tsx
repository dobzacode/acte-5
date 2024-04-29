import { cn } from '@/lib/utils';
import { Skeleton } from '@nextui-org/react';

export default function BreadcrumbsSkeleton({ size }: { size: string }) {
  return <Skeleton className={cn('container  h-[2.2rem]  rounded-sm', size)}></Skeleton>;
}
