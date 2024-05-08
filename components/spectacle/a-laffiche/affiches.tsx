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
      const url = await urlForImage(spectacle.mainImage)
        .width(1920)
        .height(1080)
        .dpr(2)
        .quality(80)
        .url();
      const blurSrc = urlForImage(spectacle.mainImage).width(20).quality(20).url();
      return { ...spectacle, blurSrc, url };
    })
  );

  return (
    <ul className="max-tablet:section-px grid w-full grid-cols-1 flex-wrap gap-md mobile-medium:grid-cols-2 tablet:flex tablet:justify-center">
      {withUrl.map((spectacle, index) => {
        return (
          <SpectacleCard index={index} spectacle={spectacle} key={spectacle._id}></SpectacleCard>
        );
      })}
    </ul>
  );
}
