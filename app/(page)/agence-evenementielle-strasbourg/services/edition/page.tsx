import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/edition/edition.jpg';

export const metadata: Metadata = {
  title: 'Édition - Acte 5',
  description:
    "Se souvenir des belles choses, c'est indispensable pour fédérer une équipe et créer un sentiment d'appartenance fort."
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'ÉDITION'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/edition',
              text: 'Édition'
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
              Se souvenir des belles choses, c'est indispensable pour fédérer une équipe et créer un
              sentiment d'appartenance fort.
            </h2>
            <p className="body text-pretty">
              Un anniversaire est l'occasion de faire le bilan. Pour cela, le livre est l'objet
              idéal : on aime le conserver et on a du plaisir à s'y plonger pour passer un bon
              moment à se remémorer les souvenirs. Rétrospective, mise en valeur des belles
              réalisations et des équipes , mais aussi témoignages, anecdotes, photos, les
              possibilités sont mutliples pour rendre hommage au passé et poser les bases du futur.
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
        <LastEvent h2="Nos précédents projets d'édition" categorie="Edition"></LastEvent>
      </Suspense>
    </main>
  );
}
