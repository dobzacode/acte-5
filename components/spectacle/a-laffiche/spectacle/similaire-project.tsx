import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { decodeAssetId, notEmpty } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SpectaclesQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import SimilaireCarousel from './similaire-carousel';

export default async function SimilaireProject({ actualSpectacle }: { actualSpectacle: string }) {
  const spectacles = await sanityFetch<SpectaclesQueryResponse>({
    query: `*[_type == "spectacle" && !(slug.current == "${actualSpectacle}")]`,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles) {
    return notFound();
  }

  const imagesWithUrl = spectacles[0]
    ? await Promise.all(
        spectacles.map(async (spectacle) => {
          try {
            const { width, height } = decodeAssetId(spectacle.mainImage?.asset._ref);
            const url = await urlForImage(spectacle.mainImage)
              .width(width)
              .height(height)
              .dpr(2)
              .quality(80)
              .url();
            const blurSrc = urlForImage(spectacle.mainImage).width(20).quality(20).url();
            return { ...spectacle, url, blurSrc };
          } catch (e) {
            return null;
          }
        })
      )
    : null;

  if (!imagesWithUrl) {
    return notFound();
  }

  const imageArr = imagesWithUrl.filter(notEmpty);

  return (
    <section className="inner-section-gap flex w-full flex-col justify-center overflow-hidden bg-primary-400 py-xl mobile-small:py-xl mobile-medium:py-2xl mobile-large:py-3xl tablet:py-4xl">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--sub-extra-large section-px text-center text-white laptop:mx-auto">
          Projets similaires
        </h2>
      </InviewWrapper>
      <InviewWrapper variant={ComingFromBottomVariant}>
        <SimilaireCarousel options={{ loop: true }} imageArr={imageArr}></SimilaireCarousel>
      </InviewWrapper>
    </section>
  );
}
