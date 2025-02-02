import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/communication/communication.jpg';

export const metadata: Metadata = {
  title: 'Support de communication - Acte 5',
  description:
    "Quand on est le meilleur, qu'on a un savoir-faire hors du commun et des produits révolutionnaires, il faut le faire savoir ! Bref, communiquer est vital pour toute entreprise."
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large laptop:!text-[5.2rem] laptop:!leading-[5rem]'}
          title={'SUPPORT DE COMMUNICATION'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/support-de-communication',
              text: 'Support de communication'
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
              Quand on est le meilleur, qu'on a un savoir-faire hors du commun et des produits
              révolutionnaires, il faut le faire savoir ! Bref, communiquer est vital pour toute
              entreprise.
            </h2>
            <p className="body text-pretty">
              Affiche, kakémono, flyer, brochure, banderole, dossier de presse, diaporama, goodie,
              mouton à cinq pattes, menhir personnalisé, voyage dans le temps, rencontre du
              troisième type, notre directrice artistique saura vous proposer les supports les plus
              adaptés et saura concrétiser avec créativité et rigueur vos demandes les plus
              incongrues. La prestation proposée est complète : à partir du premier brief jusqu'à la
              livraison du produit fini.
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
