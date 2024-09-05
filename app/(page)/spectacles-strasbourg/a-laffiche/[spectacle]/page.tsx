import { SPECTACLES_QUERY, SPECTACLE_QUERY, SpectacleQueryResponse } from '@/sanity/lib/queries';

import SpectacleFetch from '@/components/spectacle/a-laffiche/spectacle/spectacle-fetch';

import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import SpectacleSkeleton from '@/components/skeleton/spectacle-skeleton';
import SimilaireProject from '@/components/spectacle/a-laffiche/spectacle/similaire-project';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

type Props = {
  params: { spectacle: string };
};

export async function generateStaticParams() {
  const spectacles = await sanityFetch<{ spectacle: string }[]>({
    query: `${SPECTACLES_QUERY}{"spectacle": slug.current}`,
    perspective: 'published',
    stega: false
  });

  return spectacles;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const spectacle = await sanityFetch<SpectacleQueryResponse>({
    query: SPECTACLE_QUERY,
    params: { slug: params.spectacle },
    stega: false
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(spectacle?.mainImage);

  return {
    title: spectacle?.metatitre,
    description: spectacle?.metadescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <Suspense fallback={<SpectacleSkeleton />}>
        <SpectacleFetch params={params}></SpectacleFetch>
      </Suspense>
      <Suspense fallback={<LastEventSkeleton />}>
        <SimilaireProject actualSpectacle={params.spectacle}></SimilaireProject>
      </Suspense>
    </main>
  );
}
