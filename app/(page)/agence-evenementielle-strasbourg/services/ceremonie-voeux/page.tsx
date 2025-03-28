import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/voeux/voeux.jpg';

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
          title={'CÉRÉMONIE DES VŒUX'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
              text: 'Cérémonie des voeux'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Pas un mois de janvier ne se passe sans LA traditionnelle cérémonie des vœux, temps fort
            dans la communication des entreprises et des collectivités.
          </h2>
          <Image
            priority={true}
            className="rounded-sm"
            src={image}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="voeux"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">Temps fort du début d&apos;année</h3>
            <p className="body text-pretty">
              La cérémonie des vœux est l&apos;occasion de dresser le bilan de l&apos;année écoulée,
              de vos actions passées et de souhaiter <strong>vos meilleurs vœux </strong>
              aux personnes qui vous entourent pour cette nouvelle année qui démarre.
              <br />
              <br />
              <strong>Mise en scène des valeurs de votre entreprise</strong>, cette cérémonie des
              vœux vous permet de faire des annonces, de dévoiler vos actions prochaines, de fixer
              de nouveaux objectifs, de vous projeter dans l&apos;avenir. La rencontre de vos
              équipes, parfois d&apos;horizons divers, dans un environnement détendu est
              l&apos;occasion de les fédérer et de les encourager à relever de nouveaux défis.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Quelle couleur inédite donner à cette cérémonie des vœux ?
            </h3>
            <p className="body text-pretty">
              <strong>Une cérémonie de vœux ne s&apos;improvise pas</strong> et nous vous apportons
              notre expérience dans la mise en place de cette manifestation. Une couleur associée à
              votre entreprise, un moment chaleureux partagé avec ceux qui participent à la vie de
              votre entreprise. Que ce soit dans vos locaux ou dans un lieu spécialement trouvé pour
              l&apos;occasion, nous favorisons une présentation élaborée avec soin. Vous avez des
              idées, partagez-les avec nous. Une panne d&apos;inspiration ? Nous proposons, nous
              concevons avec vous, vous validez.
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes cérémonies des voeux à Strasbourg en Alsace"
          categorie="Cérémonie des voeux"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
