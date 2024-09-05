import BreadcrumbsSkeleton from './breadcrumbs-skeleton';
import MainPictureSkeleton from './post/mainpicture-skeleton';
import ParagraphSkeleton from './post/paragraph-skeleton';
import TitleSkeleton from './post/title-skeleton';

export const Skeleton = ({ className }: { className: string }) => (
  <div aria-live="polite" aria-busy="true" className={className}>
    <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
      ‌
    </span>
    <br />
  </div>
);

export const SVGSkeleton = ({ className }: { className: string }) => (
  <svg className={className + ' animate-pulse rounded bg-gray-300'} />
);

export default function PostpageSkeleton({}) {
  return (
    <main className="section-px relative mx-auto flex w-full flex-col items-center justify-center gap-2xl overflow-hidden py-5xl laptop:container laptop:py-7xl">
      <BreadcrumbsSkeleton size="w-[18.2rem]"></BreadcrumbsSkeleton>
      <TitleSkeleton></TitleSkeleton>
      <MainPictureSkeleton size="w-full"></MainPictureSkeleton>

      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
    </main>
  );
}
