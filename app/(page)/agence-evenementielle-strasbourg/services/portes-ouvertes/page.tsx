import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/portes/portes.jpg';

export const metadata: Metadata = {
  title: 'Organisation de Portes Ouvertes à Strasbourg | Acte 5',
  description:
    "Ouvrir les portes pour permettre la découverte de son activité reste un moment crucial dans la vie de l'entreprise. Découvrir, rencontrer, être émerveiller, voici ce qu'on souhaite transmettre à ceux qui vous rendent visite…"
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'PORTES OUVERTES'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
              text: 'Portes ouvertes'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Découvrir, rencontrer, être émerveiller, voici ce qu&apos;on souhaite transmettre à ceux
            qui vous rendent visite lors de vos journées portes ouvertes.
          </h2>
          <div className="flex flex-col gap-sm">
            <Image
              priority={true}
              className="rounded-sm"
              src={image}
              placeholder="blur"
              sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
              width={800}
              height={800}
              alt="Portes ouvertes"
            ></Image>
            <p className="body italic text-gray-500">100 ans VHM © Acte 5</p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Une journée portes ouvertes est un acte fort de communication
            </h3>
            <p className="body text-pretty">
              C&apos;est aussi un vecteur important de l&apos;image que véhicule l&apos;entreprise,
              qui éprouve le besoin de mieux se faire connaître de ses partenaires, de la presse, du
              grand public, de tous ceux intéressés par ses activités ou ses produits.
              <br />
              <br /> Cette journée doit être préparée avec minutie, chaque détail compte, on met les
              petits plats dans les grands. Une présentation haute en couleur ou une ambiance plus
              feutrée, selon vos goûts, laissera à vos visiteurs une impression forte, tout en
              découvrant l'univers de votre entreprise. A chaque étape nous sommes présents pour
              assurer l&apos;ordonnancement optimal de l&apos;événement.
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes organisations de portes ouvertes à Strasbourg et en Alsace"
          categorie="Portes ouvertes"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
