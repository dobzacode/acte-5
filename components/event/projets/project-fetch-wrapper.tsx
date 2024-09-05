import { Skeleton } from '@/components/ui/skeleton';
import { decodeAssetId, notEmpty } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventWithImgQueryRes } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import { Suspense } from 'react';
import ProjectSection from './project-section';

export default async function ProjectFetchWrapper() {
  const events = await sanityFetch<EventWithImgQueryRes[]>({
    query: groq`*[_type == "evenement" && defined(imageGallery) && defined(slug.current)]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      try {
        const index = events.indexOf(event);
        const { width, height } = decodeAssetId(event.imageGallery[0].asset._ref);
        const src = await urlForImage(event.imageGallery[0])
          .width(width)
          .height(height)
          .dpr(2)
          .quality(80)
          .url();
        const blurSrc = urlForImage(event.imageGallery[0])
          .width(width)
          .height(height)
          .quality(20)
          .url();
        return { src, blurSrc, ...event, index };
      } catch (e) {
        return null;
      }
    })
  );

  const imageArr = eventsWithImg ? eventsWithImg.filter(notEmpty) : null;

  return (
    <>
      {imageArr && (
        <Suspense
          fallback={
            <section className="relative flex h-full min-h-[60rem] justify-center overflow-x-clip duration-medium">
              <ul className="section-px grid grid-cols-2 justify-center gap-sm self-start laptop:container max-laptop:w-screen mobile-large:grid-cols-3 laptop:mx-auto">
                {Array.from({ length: 9 }).map((_, index) => (
                  <Skeleton
                    key={`${index}-skeleton`}
                    className="aspect-square w-full justify-center"
                  ></Skeleton>
                ))}
              </ul>
            </section>
          }
        >
          <ProjectSection events={imageArr}></ProjectSection>
        </Suspense>
      )}
    </>
  );
}
