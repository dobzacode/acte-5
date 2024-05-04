import MemberCarousel from '@/components/event/a-propos/member-carousel';
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

  const imagesWithUrl = affiches.imageGallery
    ? await Promise.all(
        affiches.imageGallery.map(async (image: Image) => {
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
    <section className="w-full bg-primary-400 py-xl">
      <h2 className="heading--sub-extra-large section-px text-center text-white laptop:container laptop:mx-auto">
        Et pour la postérité...
      </h2>
      <MemberCarousel options={{ loop: true }} imageArr={imagesWithUrl}></MemberCarousel>
    </section>
  );
}
