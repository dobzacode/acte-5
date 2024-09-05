import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/medailles/medailles.jpg';

export const metadata: Metadata = {
  title: 'Cérémonie de remise de médailles à Strasbourg | Acte 5',
  description:
    'Nous pouvons donner du sens à ce que beaucoup voient comme une simple cérémonie de remise de médailles solennelle et compassée.'
};

export default async function Page() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'CÉRÉMONIE DES MÉDAILLES'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
              text: 'Cérémonie des médailles'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading text-pretty font-semibold">
            Que ce soit une cérémonie des médailles du travail, ou encore une cérémonie pour
            célébrer l’ancienneté, chaque salarié a droit, au cours de sa carrière à son moment de
            gloire, de reconnaissance.
          </h2>
          <Image
            className="rounded-sm"
            src={image}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="medailles"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Une cérémonie de médailles pour une entreprise en réussite, fière de son succès
            </h3>
            <p className="body text-pretty">
              Une entreprise en réussite, fière de son succès salue aussi bien ses collaborateurs
              fidèles que ceux honorés pour une longue carrière professionnelle. Elle tient en haute
              estime ses partenaires de longue date. <strong>Cette cérémonie de médailles</strong>{' '}
              est le témoignage de la reconnaissance de l&apos;entreprise envers les acteurs de sa
              réussite. Réception au déroulé précis… sans anicroche, sans contretemps… car nous
              aurons pris le temps nécessaire pour en peaufiner les détails.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Nous pouvons donner du sens à ce que beaucoup voient comme une simple cérémonie
              solennelle et compassée.
            </h3>
            <p className="body text-pretty">
              Nous préparons avec rigueur les moments forts qui vous tiennent à cœur. Pour un
              enchaînement parfait, il est indispensable que cela soit préparé par des
              professionnels. Une trame joliment dessinée sans dévoiler tout le travail de
              préparation, c&apos;est notre métier !
              <br />
              <br />{' '}
              <strong>
                La cérémonie des médailles peut être agrémentée par un cocktail, par une animation
                musicale, théâtrale ou encore artistique
              </strong>
              , afin de prolonger la convivialité de ce moment.
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes cérémonies des médailles organisés à Strasbourg en Alsace"
          categorie="Cérémonie des médailles"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
