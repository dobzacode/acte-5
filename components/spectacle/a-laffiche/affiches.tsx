import { cn, decodeAssetId, notEmpty } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SPECTACLES_QUERY, SpectaclesQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import SpectacleCard from './spectacle-card';

export default async function Affiches() {
  const spectacles = await sanityFetch<SpectaclesQueryResponse>({
    query: SPECTACLES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles) {
    return notFound();
  }

  const withUrl = await Promise.all(
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
        return { ...spectacle, blurSrc, url };
      } catch (e) {
        return null;
      }
    })
  );

  const imageArr = withUrl.filter(notEmpty);

  console.log(imageArr.length);

  return (
    <ul
      className={cn(
        'section-px grid w-fit grid-cols-1 flex-wrap gap-md mobile-medium:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 laptop-large:grid-cols-5',
        imageArr.length < 5 && 'laptop-large:!grid-cols-4',
        imageArr.length < 4 && 'laptop:!grid-cols-3',
        imageArr.length < 3 && 'tablet:!grid-cols-2'
      )}
    >
      {imageArr &&
        imageArr.map((spectacle, index) => {
          return (
            <SpectacleCard index={index} spectacle={spectacle} key={spectacle._id}></SpectacleCard>
          );
        })}
    </ul>
  );
}
