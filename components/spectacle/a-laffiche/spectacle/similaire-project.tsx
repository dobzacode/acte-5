import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SPECTACLES_QUERY, SpectaclesQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import SimilaireCarousel from './similaire-carousel';

export default async function SimilaireProject() {
  const spectacles = await sanityFetch<SpectaclesQueryResponse>({
    query: SPECTACLES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles) {
    return notFound();
  }

  const imagesWithUrl = spectacles[0]
    ? await Promise.all(
        spectacles.map(async (spectacle) => {
          const url = await urlForImage(spectacle.mainImage)
            .width(1920)
            .height(1080)
            .dpr(2)
            .quality(80)
            .url();
          const blurSrc = urlForImage(spectacle.mainImage).width(20).quality(20).url();
          return { ...spectacle, url, blurSrc };
        })
      )
    : null;

  if (!imagesWithUrl) {
    return notFound();
  }

  return (
    <section className="w-full overflow-hidden bg-primary-400 py-xl">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--sub-extra-large section-px text-center text-white laptop:mx-auto">
          Projets similaires
        </h2>
      </InviewWrapper>
      <InviewWrapper variant={ComingFromBottomVariant}>
        <SimilaireCarousel options={{ loop: true }} imageArr={imagesWithUrl}></SimilaireCarousel>
      </InviewWrapper>
    </section>
  );
}
