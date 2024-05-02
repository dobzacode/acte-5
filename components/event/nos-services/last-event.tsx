import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventsQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import ServiceCarousel from './service-carousel';

export interface Member {
  url: string;
  alt: string;
  name: string;
  work: string;
  description: string;
  blurSrc?: string;
}

export default async function LastEvent() {
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
        <h2 className="heading--large text-primary-400">Une agence pluri-indisciplinée...</h2>
        <p className="sub-heading max-w-[80ch] text-pretty">
          Ne demandez pas une présentation académique de l&apos;équipe ! On s&apos;y ennuierait bien
          vite. Sachez simplement qu&apos;à eux 6, ils représentent 25 diplômes dont 2 de
          secouriste, 12 flocons, 10 étoiles, 1 flèche d&apos;argent, 1 de bronze, 4 permis B et 13
          galops. Mais voyons plutôt !
        </p>
      </div>
      <ServiceCarousel options={{ loop: true }} events={eventsWithImg}></ServiceCarousel>
    </InviewWrapper>
  );
}
