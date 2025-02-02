import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/scenographie/scenographie.jpg';

export const metadata: Metadata = {
  title: 'Scénographie - Acte 5',
  description: "Communiquer en 3 dimensions, c'est immerger vos clients dans votre monde."
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'SCÉNOGRAPHIE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/scenographie',
              text: 'Scénographie'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <div className="flex flex-col gap-md">
            <h2 className="sub-heading text-pretty font-semibold">
              Communiquer en 3 dimensions, c'est immerger vos clients dans votre monde.
            </h2>
            <p className="body text-pretty">
              Nous concevons et réalisons des structures créatives et parfaitement adaptées au lieu
              et à l'objectif. De la simple flèche signalétique à la mise en place d'une exposition,
              en passant par la réalisation d'un stand, nos équipes mettent en commun leurs
              savoir-faire pour vous concocter le support idéal.
            </p>
          </div>
          <Image
            priority={true}
            className="rounded-sm"
            src={image}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="convention-entreprise-strasbourg"
          ></Image>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédents spectacles organisés à Strasbourg et en Alsace"
          categorie="Spectacle clef en main"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
