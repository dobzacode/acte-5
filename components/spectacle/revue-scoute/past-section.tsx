import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { AFFICHES_QUERY, AffichesQueryResponse, Image as SanityImage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';

import { notEmpty } from '@/lib/utils';
import { notFound } from 'next/navigation';
import PastCarousel from './past-carousel';

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
            image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

            image.blurSrc = urlForImage(image).width(20).quality(20).url();
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
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--sub-extra-large section-px text-center text-white">
          Et pour la postérité...
        </h2>
      </InviewWrapper>
      <InviewWrapper
        viewport={{ once: true, margin: '200px 0px 200px 0px' }}
        variant={ComingFromBottomVariant}
      >
        <PastCarousel imagesWithUrl={filteredImages} />
      </InviewWrapper>
    </section>
  );
}
