import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { AFFICHES_QUERY, AffichesQueryResponse, Image as SanityImage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';

import CarouselProject from '@/components/ui/image-carousel/carousel/carousel-project';
import { decodeAssetId, notEmpty } from '@/lib/utils';
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

  console.log(affiches);

  const imagesWithUrl = affiches[0]
    ? await Promise.all(
        affiches[0].imageGallery.map(async (image: SanityImage, index) => {
          try {
            const { width, height } = decodeAssetId(image.asset._ref);
            image.url = await urlForImage(image)
              .width(width)
              .height(height)
              .dpr(2)
              .quality(80)
              .url();
            image.blurSrc = urlForImage(image).width(width).height(height).quality(20).url();

            return image;
          } catch (e) {
            return null;
          }
        })
      )
    : null;

  if (!imagesWithUrl) {
    return notFound();
  }

  const filteredImages = imagesWithUrl.filter(notEmpty);

  return (
    <section className="inner-section-gap flex w-full flex-col overflow-hidden bg-primary-400 py-xl">
      <InviewWrapper
        variant={ComingFromTopVariant}
        tag="h2"
        className="heading--sub-extra-large section-px text-center text-white"
      >
        Et pour la postérité...
      </InviewWrapper>

      <InviewWrapper
        viewport={{ once: true, margin: '200px 0px 200px 0px' }}
        variant={ComingFromBottomVariant}
      >
        <CarouselProject
          previousClassName="left-xl shrink-0"
          nextClassName="right-xl shrink-0"
          outerClassName="section-px  relative"
          innerClassName="object-cover h-full"
          className="basis-full mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/5 laptop-large:pr-sm"
          imageArr={filteredImages}
        />
      </InviewWrapper>
    </section>
  );
}
