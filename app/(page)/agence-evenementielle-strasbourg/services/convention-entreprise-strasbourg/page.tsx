import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/convention/convention.jpg';

export const metadata: Metadata = {
  title: "Organisation de convention d'entreprise à Strasbourg - Acte 5",
  description:
    "Conventionnelle ou non ? Académique ou décalée ? Nous organisons votre convention d'entreprise tout en respectant sa raison d'être."
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={"CONVENTION D'ENTREPRISE"}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
              text: "Convention d'entreprise"
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Conventionnelle ou non ? Académique ou décalée ? On brise les conventions, tout en
            respectant leur raison d&apos;être. Grâce aux conventions, les entreprises fédèrent et
            rassemblent les publics, donnent l&apos;opportunité à leurs parties prenantes de
            partager un bon moment, transmettent les informations et communiquent sur les stratégies
            à mettre en place. Convivialité et partage sont au rendez-vous !
          </h2>
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
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">Pourquoi organiser une convention ?</h3>
            <p className="body text-pretty">
              Vous avez besoin de <strong>transmettre un message fort à vos collaborateurs</strong>,
              à vos partenaires. Avec vous, nous définissons l&apos;ensemble des priorités de la
              manifestation. Nous imaginons un projet sur mesure dans un lieu adéquat et nous vous
              proposons ainsi le format le plus adapté. Votre discours est enrichi par un habillage
              inventif et par une mise en scène de vos idées et de vos actions. Par le biais de
              supports variés (habillage scénique, vidéo, lumière, son, communication visuelle et
              graphique…), nous vous accompagnons dans l&apos;expression de votre message. <br />
              <br /> Un rythme est trouvé, une tonalité mise en place, accompagnée, selon vos
              souhaits, par une série d&apos;animations ludiques ou artistiques.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">Vecteur de la cohésion en entreprise</h3>
            <p className="body text-pretty">
              En entrant dans l&apos;intimité de votre entreprise, de vos métiers, de vos activités,
              nous prenons le temps de comprendre vos problématiques. Notre valeur ajoutée :
              soutenir votre propos avec les arts du spectacle et le rendre accessible,
              compréhensible du plus grand nombre.
              <br />
              <br /> L&apos;objectif de la démarche vise, entre autres, à{' '}
              <strong>
                maintenir la cohésion de toutes les forces vives de votre entreprise.
              </strong>{' '}
              Elle permet le lancement de nouvelles stratégies tout en donnant la possibilité aux
              collaborateurs d&apos;en devenir acteurs. C&apos;est l&apos;occasion pour
              l&apos;entreprise et les managers de renouveler la confiance en leurs équipes.
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes conventions organisées à Strasbourg et en Alsace"
          categorie="Convention"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
