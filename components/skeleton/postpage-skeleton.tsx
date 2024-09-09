import BreadcrumbsSkeleton from './breadcrumbs-skeleton';
import MainPictureSkeleton from './post/mainpicture-skeleton';
import ParagraphSkeleton from './post/paragraph-skeleton';
import TitleSkeleton from './post/title-skeleton';

export default function PostpageSkeleton({}) {
  return (
    <main className="max-laptop:section-px relative mx-auto flex w-full flex-col items-center justify-center gap-2xl overflow-hidden py-5xl laptop:container laptop:max-w-[50rem] laptop:py-7xl">
      <BreadcrumbsSkeleton size="w-[18.2rem]"></BreadcrumbsSkeleton>
      <TitleSkeleton></TitleSkeleton>
      <MainPictureSkeleton size="w-full"></MainPictureSkeleton>

      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
      <ParagraphSkeleton length={5}></ParagraphSkeleton>
    </main>
  );
}
