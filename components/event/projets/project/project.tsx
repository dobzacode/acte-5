import CarouselProject from '@/components/ui/image-carousel/carousel/carousel-project';
import { Player } from '@/components/ui/video/video-player';
import { cn, decodeAssetId, notEmpty } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { EventQueryResponse, Image as ImageSanity } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { getFileAsset } from '@sanity/asset-utils';
import { notFound } from 'next/navigation';

export default async function Project({ project }: { project: EventQueryResponse }) {
  if (!project) {
    return notFound();
  }

  const imagesWithUrl = project.imageGallery
    ? await Promise.all(
        project.imageGallery.map(async (image: ImageSanity) => {
          try {
            const { width, height } = decodeAssetId(image.asset._ref);
            image.url = await urlForImage(image)
              .width(width)
              .height(height)
              .dpr(2)
              .quality(100)
              .url();
            image.blurSrc = urlForImage(image).width(width).height(height).quality(20).url();
            return image;
          } catch (e) {
            return null;
          }
        })
      )
    : null;

  const video = project.video ? getFileAsset(project.video.asset._ref, client.config()) : null;

  const imageArr = imagesWithUrl ? imagesWithUrl.filter(notEmpty) : null;

  return (
    <>
      <div className="prose prose-base max-w-full">
        <p className="body text-pretty">{project.description}</p>
      </div>
      {imageArr && (
        <CarouselProject
          className="basis-full"
          innerClassName="flex h-full w-full grow cursor-pointer items-center justify-center object-contain object-center"
          imageArr={imageArr}
        />
      )}
      {project.video && video ? (
        <div
          className={cn(
            'card relative flex h-full flex-col items-center gap-sm overflow-clip rounded-sm border-0 p-0'
          )}
        >
          <Player
            className="grow cursor-pointer rounded-b-none rounded-t-sm"
            src={video.url}
            poster={video.url}
            title={project.titre}
          />
        </div>
      ) : null}
    </>
  );
}
