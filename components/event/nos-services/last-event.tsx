import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Event, EventsQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import ServiceCarousel from './service-carousel';

export interface EventWithImg extends Event {
  src: string;
  blurSrc: string;
}

export default async function LastEvent({
  h2,
  categorie
}: {
  h2: string;
  categorie:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building';
}) {
  const events = await sanityFetch<EventsQueryResponse>({
    query: groq`*[_type == "evenement" && categorie == "Convention"]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      const src = await urlForImage(event.imageGallery[0])
        .width(1920)
        .height(1080)
        .dpr(2)
        .quality(80)
        .url();
      const blurSrc = urlForImage(event.imageGallery[0]).width(20).quality(20).url();
      return { src, blurSrc, ...event };
    })
  );

  return (
    <InviewWrapper
      tag="section"
      viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      variant={ComingFromLeftVariant}
      className=" flex w-full flex-col items-center gap-2xl overflow-x-hidden pt-5xl"
    >
      <div className="section-px container mx-auto flex flex-col items-center gap-xl text-center">
        <h2 className="heading--large text-primary-400">{h2}</h2>
      </div>
      <ServiceCarousel options={{ loop: true }} events={eventsWithImg}></ServiceCarousel>
    </InviewWrapper>
  );
}
