import { Player } from '@/components/ui/video/video-player';
import { cn, notEmpty } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { EventQueryResponse, Image as ImageSanity } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { getFileAsset } from '@sanity/asset-utils';
import { notFound } from 'next/navigation';
import EmblaCarousel from '../../../ui/image-carousel/carousel/embla-post-carousel';

export default async function Project({ project }: { project: EventQueryResponse }) {
  if (!project) {
    return notFound();
  }

  const imagesWithUrl = project.imageGallery
    ? await Promise.all(
        project.imageGallery.map(async (image: ImageSanity) => {
          try {
            image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(100).url();

            image.blurSrc = urlForImage(image).width(20).quality(20).url();
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
      {imageArr && <EmblaCarousel imageArr={imageArr} options={{ loop: true, active: true }} />}
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
