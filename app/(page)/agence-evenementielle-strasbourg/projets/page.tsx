import LogoFetchWrapper from '@/components/event/landing-event/trust-section/logo-fetch-wrapper';
import { EventWithImg } from '@/components/event/nos-services/last-event-image';
import ProjectSection from '@/components/event/projets/project-section';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TitleSection from '@/components/ui/title-section';
import { decodeAssetId, notEmpty } from '@/lib/utils';
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
    query: groq`*[_type == "evenement" && defined(imageGallery) && defined(slug.current)]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      try {
        const index = events.indexOf(event);
        const { width, height } = decodeAssetId(event.imageGallery[0].asset._ref);
        const src = await urlForImage(event.imageGallery[0])
          .width(width)
          .height(height)
          .dpr(2)
          .quality(80)
          .url();
        const blurSrc = urlForImage(event.imageGallery[0])
          .width(width)
          .height(height)
          .quality(20)
          .url();
        return { src, blurSrc, ...event, index };
      } catch (e) {
        return null;
      }
    })
  );

  const imageArr = eventsWithImg ? eventsWithImg.filter(notEmpty) : null;

  return (
    <main className="relative flex w-full flex-col gap-xl overflow-hidden pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'NOS PROJETS'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/projets', text: 'Nos projets' }
        ]}
      ></TitleSection>
      <InviewWrapper
        className=""
        variant={ComingFromRightVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <LogoFetchWrapper isTrustSection={false}></LogoFetchWrapper>
      </InviewWrapper>
      {imageArr && <ProjectSection events={imageArr}></ProjectSection>}
    </main>
  );
}
