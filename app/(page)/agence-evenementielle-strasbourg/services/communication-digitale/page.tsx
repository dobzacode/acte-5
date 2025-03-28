import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/communication-digitale/communication-digitale.jpg';

export const metadata: Metadata = {
  title: 'Communication digitale - Acte 5',
  description: "Il paraît qu'aujourd'hui, tout se passe sur les écrans. Alors allons-y !"
};

export default async function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large laptop:!text-[5.2rem] laptop:!leading-[5rem]'}
          title={'COMMUNICATION DIGITALE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/support-de-communication',
              text: 'Communication digitale'
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
              Il paraît qu'aujourd'hui, tout se passe sur les écrans. Alors allons-y !
            </h2>
            <p className="body text-pretty">
              Vous avez des infos à communiquer rapidement à vos parties prenantes, des images à
              créer pour votre dernière campagne LinkedIn, envie d'être présent sur les réseaux sans
              trop savoir comment ? L'agence ACTE 5 saura vous conseiller et vous proposer une
              solution sur-mesure, adaptée à vos besoins.
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
          h2="Nos précédents projets de communication digitale"
          categorie="Communication digitale"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
