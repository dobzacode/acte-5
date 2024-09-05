import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export default function PastSectionSkeleton() {
  return (
    <section className="inner-section-gap mt-2xl flex w-full flex-col items-center overflow-hidden overflow-x-hidden bg-primary-400 py-2xl">
      <div className="section-px container mx-auto flex flex-col items-center gap-xl text-center">
        <Skeleton className="h-14 w-1/2 rounded-xs"></Skeleton>
      </div>

      <div className="section-px flex w-full max-w-[100vw] items-center gap-md overflow-hidden laptop:mx-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'basis-full tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3 laptop-large:pr-sm',
              index === 0 || index === 1 ? 'max-tablet:hidden' : '',
              index === 2 || index === 3 ? 'max-laptop-large:hidden' : ''
            )}
          >
            <div className="flex flex-col items-center overflow-hidden rounded-sm border-0 p-0 shadow-xl">
              <Skeleton className="aspect-square h-full w-full grow overflow-hidden rounded-b-none rounded-t-sm"></Skeleton>

              <Skeleton className="h-8 w-full rounded-t-none"></Skeleton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
