import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { AFFICHES_QUERY, AffichesQueryResponse, Image as SanityImage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import Image from 'next/image';

import { notFound } from 'next/navigation';

export default async function PastSection() {
  const affiches = await sanityFetch<AffichesQueryResponse>({
    query: AFFICHES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!affiches) {
    return notFound();
  }

  const imagesWithUrl = affiches[0]
    ? await Promise.all(
        affiches[0].imageGallery.map(async (image: SanityImage) => {
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  if (!imagesWithUrl) {
    return notFound();
  }

  return (
    <section className="inner-section-gap flex w-full  flex-col overflow-hidden bg-primary-400 py-xl">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--sub-extra-large section-px text-center text-white ">
          Et pour la postérité...
        </h2>
      </InviewWrapper>
      <InviewWrapper variant={ComingFromBottomVariant}>
        <Carousel className="max-laptop:container max-laptop:mx-auto">
          <CarouselContent className="laptop-large:-ml-sm">
            {imagesWithUrl.map((image, index) => (
              <CarouselItem className=" basis-1/2 mobile-large:basis-1/3 tablet:basis-1/4 laptop-large:basis-1/4 laptop-large:pr-sm ">
                <div
                  className={cn(
                    'card   relative flex  h-full flex-col items-center gap-sm  rounded-sm border-0 p-0 shadow-xl'
                  )}
                  key={index}
                >
                  <Image
                    width={400}
                    height={400}
                    className={cn('aspect-square w-full cursor-pointer rounded-sm object-cover')}
                    sizes={'(max-width: 640px) 100vw, 50vw'}
                    src={image.url}
                    placeholder="blur"
                    blurDataURL={image.blurSrc}
                    alt={image.alt ? image.alt : `Image ${index + 1}`}
                  ></Image>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </InviewWrapper>
    </section>
  );
}
