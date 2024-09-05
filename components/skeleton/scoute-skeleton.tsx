import { Skeleton } from '../ui/skeleton';
import MainPictureSkeleton from './post/mainpicture-skeleton';
import ParagraphSkeleton from './post/paragraph-skeleton';

export default function ScouteSkeleton() {
  return (
    <section className="section-px main-gap flex flex-col laptop:container laptop:mx-auto">
      <section className="inner-section-gap flex flex-col">
        <Skeleton className="h-14 w-1/2 rounded-xs"></Skeleton>
        <MainPictureSkeleton size={'!h-[30rem]'} />
        <ParagraphSkeleton length={6}></ParagraphSkeleton>
      </section>
      <section className="inner-section-gap flex flex-col">
        <Skeleton className="h-14 w-1/2 rounded-xs"></Skeleton>
        <ul className="flex w-full flex-col gap-sm px-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={`${index}-skeleton`}
              className="aspect-square h-16 w-full justify-center"
            ></Skeleton>
          ))}
        </ul>
      </section>
      <section className="inner-section-gap flex flex-col">
        <Skeleton className="h-14 w-1/2 rounded-xs"></Skeleton>
        <ul className="relative -z-10 grid w-full grid-cols-3 items-center gap-sm mobile-large:gap-lg tablet:grid-cols-4 laptop:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="card pb-none relative flex h-full w-full flex-col overflow-hidden px-0 pb-0 pt-0"
              key={`${index}-skeleton`}
            >
              <Skeleton
                key={`${index}-skeleton`}
                className="aspect-square h-full w-full justify-center rounded-b-none"
              ></Skeleton>
              <Skeleton className="h-8 w-full rounded-t-none"></Skeleton>
            </div>
          ))}
        </ul>
      </section>
    </section>
  );
}
