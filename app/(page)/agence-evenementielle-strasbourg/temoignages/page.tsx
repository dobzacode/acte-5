import { EventWithImg } from '@/components/event/nos-services/last-event-image';
import ProjectSection from '@/components/event/temoignages/project-section';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventWithImgQueryRes } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { Metadata } from 'next';
import { groq } from 'next-sanity';

export const metadata: Metadata = {
  title: 'Découvrez notre portfolio | Acte 5 à Strasbourg',
  description:
    "Découvrez comment notre agence crée des expériences mémorables, des séminaires inspirants aux grands événements corporatifs. Explorez notre portfolio pour trouver l'inspiration et voir comment nous pouvons transformer votre prochain événement en un moment inoubliable pour vos clients et collaborateurs."
};

export interface EventWithImgAndIndex extends EventWithImg {
  index: number;
}

export default async function Home() {
  const events = await sanityFetch<EventWithImgQueryRes[]>({
    query: groq`*[_type == "evenement" && defined(imageGallery)]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      const index = events.indexOf(event);
      const src = await urlForImage(event.imageGallery[0])
        .width(1920)
        .height(1080)
        .dpr(2)
        .quality(80)
        .url();
      const blurSrc = urlForImage(event.imageGallery[0]).width(20).quality(20).url();
      return { src, blurSrc, ...event, index };
    })
  );

  return (
    <main className="relative flex w-full flex-col gap-xl overflow-hidden  pt-5xl  mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'NOS PROJETS'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/temoignages', text: 'Nos projets' }
        ]}
      ></TitleSection>
      <InviewWrapper
        className=""
        variant={ComingFromRightVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="section-px fade-x container relative mx-auto flex gap-lg  overflow-clip [&>*]:shrink-0">
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"> </p>
        </div>
      </InviewWrapper>
      <ProjectSection events={eventsWithImg}></ProjectSection>
    </main>
  );
}
