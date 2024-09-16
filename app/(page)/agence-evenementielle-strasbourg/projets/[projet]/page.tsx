import { EVENTS_QUERY, EVENT_QUERY, EventQueryResponse } from '@/sanity/lib/queries';

import ProjectpageContent from '@/components/event/projets/project/project-content';
import PostpageSkeleton from '@/components/skeleton/postpage-skeleton';
import ContactSection from '@/components/spectacle/contact-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

type Props = {
  params: { projet: string };
};

export async function generateStaticParams() {
  const events = await sanityFetch<{ projet: string }[]>({
    query: `${EVENTS_QUERY}{"projet": slug.current}`,
    perspective: 'published',
    stega: false
  });

  return events;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const event = await sanityFetch<EventQueryResponse>({
    query: EVENT_QUERY,
    params: { slug: params.projet },
    stega: false
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(event?.mainImage);

  return {
    title: event?.metatitre,
    description: event?.metadescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata;
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<PostpageSkeleton />}>
      <ProjectpageContent params={params}></ProjectpageContent>
      <ContactSection className="!rounded-tl-none" />
    </Suspense>
  );
}
