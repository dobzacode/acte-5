import MemberCarousel from '@/components/event/a-propos/member-carousel';
import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { AFFICHES_QUERY, AffichesQueryResponse, Image } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
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
        affiches[0].imageGallery.map(async (image: Image) => {
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
    <section className="w-full overflow-hidden bg-primary-400 py-xl">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--sub-extra-large section-px text-center text-white laptop:mx-auto">
          Et pour la postérité...
        </h2>
      </InviewWrapper>
      <InviewWrapper variant={ComingFromBottomVariant}>
        <MemberCarousel options={{ loop: true }} imageArr={imagesWithUrl}></MemberCarousel>
      </InviewWrapper>
    </section>
  );
}
