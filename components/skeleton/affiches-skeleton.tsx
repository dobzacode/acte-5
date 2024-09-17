import { Skeleton } from '../ui/skeleton';

export default function AffichesSkeleton() {
  return (
    <ul className="section-px grid w-full grid-cols-1 flex-wrap gap-md mobile-medium:grid-cols-2 tablet:flex tablet:justify-center">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="card w-full shrink-0 gap-md px-0 pb-0 pt-0 duration-medium hover:scale-105 hover:shadow-2xl tablet:w-1/3 laptop:w-1/4 laptop-large:w-1/5"
          key={`${index}-skeleton`}
        >
          <Skeleton
            key={`${index}-skeleton`}
            className="aspect-square h-[20rem] w-full justify-center rounded-b-none"
          ></Skeleton>
          <Skeleton className="h-8 w-full rounded-t-none"></Skeleton>
        </div>
      ))}
    </ul>
  );
}
