import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { v4 } from 'uuid';

export default function ParagraphSkeleton({ length }: { length: number }) {
  // w-90% w-80% w-70% w-60% w-50% w-40% w-30% w-20% w-10%
  return (
    <div className="flex w-full flex-col gap-xs laptop:container">
      {Array.from({ length }).map((_, index) => {
        return <Skeleton key={v4()} className={cn('h-3', `w-[${100 - index * 10}%] `)} />;
      })}
    </div>
  );
}
