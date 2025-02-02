import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/mesure/mesure.jpg';

export const metadata: Metadata = {
  title: 'Spectacle sur mesure - Acte 5',
  description:
    'Comment insuffler énergie, originalité et contenu à vos événements ? Le spectacle vivant et les arts de la scène sont à votre service.'
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'SPECTACLE SUR MESURE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/spectacle-sur-mesure',
              text: 'Spectacle sur mesure'
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
              Comment insuffler énergie, originalité et contenu à vos événements ? Le spectacle
              vivant et les arts de la scène sont à votre service.
            </h2>
            <p className="body text-pretty">
              Acte 5, expert de la production de spectacles, tient à votre disposition un florilège
              de divertissements susceptible d'émerveiller, interpeler ou divertir. Convier les
              artistes à votre événement, c'est miser sur la vitalité, la convivialité et garantir
              un moment de plaisir à vos convives. Mesdames, Messieurs, que le spectacle commence !
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
          categorie="Spectacle sur mesure"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
