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

  console.log(spectacles[0].mainImage);

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
    <ul className="flex w-full justify-center gap-md p-sm ">
      {withUrl.map((spectacle) => {
        return <SpectacleCard spectacle={spectacle} key={spectacle._id}></SpectacleCard>;
      })}
    </ul>
  );
}
