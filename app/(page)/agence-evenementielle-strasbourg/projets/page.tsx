import LogoFetchWrapper from '@/components/event/landing-event/trust-section/logo-fetch-wrapper';
import { EventWithImg } from '@/components/event/nos-services/last-event-image';
import ProjectFetchWrapper from '@/components/event/projets/project-fetch-wrapper';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { Skeleton } from '@/components/ui/skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Découvrez notre portfolio | Acte 5 à Strasbourg',
  description:
    "Découvrez comment notre agence crée des expériences mémorables, des séminaires inspirants aux grands événements corporatifs. Explorez notre portfolio pour trouver l'inspiration et voir comment nous pouvons transformer votre prochain événement en un moment inoubliable pour vos clients et collaborateurs."
};

export interface EventWithImgAndIndex extends EventWithImg {
  index: number;
}

export default async function Home() {
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
      <Suspense
        fallback={
          <section className="relative flex h-full min-h-[60rem] justify-center overflow-x-clip duration-medium">
            <ul className="section-px grid grid-cols-2 justify-center gap-sm self-start laptop:container max-laptop:w-screen mobile-large:grid-cols-3 laptop:mx-auto">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton
                  key={`${index}-skeleton`}
                  className="aspect-square w-full justify-center"
                ></Skeleton>
              ))}
            </ul>
          </section>
        }
      >
        <ProjectFetchWrapper></ProjectFetchWrapper>
      </Suspense>
    </main>
  );
}
