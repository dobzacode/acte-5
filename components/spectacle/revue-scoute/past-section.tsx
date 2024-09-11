import { sanityFetch } from '@/sanity/lib/fetch';
import { AFFICHES_QUERY, AffichesQueryResponse, Image as SanityImage } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';

import { decodeAssetId, notEmpty } from '@/lib/utils';
import { notFound } from 'next/navigation';
import PastGrid from './past-grid';

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
    <section className="flex w-full flex-col overflow-hidden py-xl">
      <PastGrid imageArr={filteredImages}></PastGrid>
    </section>
  );
}
