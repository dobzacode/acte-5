import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { client } from '@/sanity/lib/client';

import { sanityFetch } from '@/sanity/lib/fetch';
import { EventWithVideoQueryRes } from '@/sanity/lib/queries';
import { getFileAsset } from '@sanity/asset-utils';
import { groq } from 'next-sanity';
import VideoCarousel from './video-carousel';

export default async function LastEventVideo({
  h2,
  categorie,
  actualSlug
}: {
  h2: string;
  categorie: "Vidéo d'entreprise";
  actualSlug?: string;
}) {
  const events = await sanityFetch<EventWithVideoQueryRes[]>({
    query: groq`*[ _type == "evenement" && defined(video) && categorie == "Vidéo d'entreprise" && defined(slug.current) && slug.current != ${actualSlug}]`,
    perspective: 'published',
    stega: false
  });

  if (!events || !events.some((event) => event.video.asset._ref)) return <div></div>;

  const withVideo = await Promise.all(
    events.map(async (event) => {
      const video = getFileAsset(event.video.asset._ref, client.config());
      return { ...event, videoPath: video.url };
    })
  );

  return (
    <section className="mt-2xl flex w-full flex-col items-center gap-2xl overflow-hidden overflow-x-hidden bg-primary-400 py-xl mobile-small:py-xl mobile-medium:py-2xl mobile-large:py-3xl tablet:py-4xl">
      <InviewWrapper
        className="section-px container mx-auto flex flex-col items-center gap-xl text-center"
        variant={ComingFromTopVariant}
      >
        <h2 className="heading--large text-white">{h2}</h2>
      </InviewWrapper>
      <InviewWrapper className="mx-auto max-w-[100vw]" variant={ComingFromBottomVariant}>
        <VideoCarousel videoArr={withVideo}></VideoCarousel>
      </InviewWrapper>
    </section>
  );
}
