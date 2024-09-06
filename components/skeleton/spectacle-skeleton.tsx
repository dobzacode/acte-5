import MainPictureSkeleton from '@/components/skeleton/post/mainpicture-skeleton';
import ParagraphSkeleton from '@/components/skeleton/post/paragraph-skeleton';
import TitleSkeleton from '@/components/skeleton/post/title-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function SpectacleSkeleton() {
  return (
    <section className="max-laptop:section-px relative mx-auto flex w-full flex-col items-center justify-center gap-xl mobile-large:gap-2xl laptop:max-w-[50rem]">
      <div className="flex w-full flex-col gap-5 self-start laptop:mx-auto">
        <Skeleton className="h-14 w-1/2 rounded-xs max-mobile-large:w-2/3" />

        <Skeleton className="h-6 w-2/5 rounded-xs" />
      </div>

      <div className="flex w-full gap-md max-tablet:flex-col-reverse">
        <MainPictureSkeleton size="w-2/3 max-tablet:w-full"></MainPictureSkeleton>
        <aside className="flex w-1/3 flex-col gap-md max-tablet:w-fit max-tablet:flex-row max-tablet:flex-wrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="flex w-fit flex-col gap-xs" key={`${index}-skeleton`}>
              <Skeleton className="aspect-square h-4 w-24 justify-center"></Skeleton>
              <Skeleton className="aspect-square h-4 w-32 justify-center"></Skeleton>
            </div>
          ))}
        </aside>
      </div>

      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <TitleSkeleton />
      <MainPictureSkeleton size="w-full"></MainPictureSkeleton>
    </section>
  );
}
