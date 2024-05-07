import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Event, EventWithVideoQueryRes } from '@/sanity/lib/queries';
import { groq } from 'next-sanity';

export interface EventWithImg extends Event {
  src: string;
  blurSrc: string;
}

export default async function LastEventVideo({
  h2,
  categorie
}: {
  h2: string;
  categorie: "Vidéo d'entreprise";
}) {
  const events = await sanityFetch<EventWithVideoQueryRes[]>({
    query: groq`*[_type == "evenement" && categorie == "Video d'entreprise"]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      const video = await sanityFetch({
        query: groq`*[_type == "video" ] {
          myVideoField {
            asset-> {
              playbackId,
              assetId,
              filename,
            }
          }]`,
        perspective: 'published',
        stega: false
      });
    })
  );

  console.log(events);

  return (
    <section className=" mt-2xl flex w-full flex-col items-center gap-2xl overflow-hidden overflow-x-hidden bg-primary-400 py-2xl ">
      <InviewWrapper
        className="section-px container mx-auto flex flex-col items-center gap-xl text-center"
        variant={ComingFromTopVariant}
      >
        <h2 className="heading--large text-white">{h2}</h2>
      </InviewWrapper>
      <InviewWrapper
        className="laptop:container laptop:mx-auto"
        variant={ComingFromBottomVariant}
      ></InviewWrapper>
    </section>
  );
}
