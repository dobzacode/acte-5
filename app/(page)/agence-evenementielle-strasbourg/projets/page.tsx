import LogoFetchWrapper from '@/components/event/landing-event/trust-section/logo-fetch-wrapper';
import { EventWithImg } from '@/components/event/nos-services/last-event-image';
import ProjectFetchWrapper from '@/components/event/projets/project-fetch-wrapper';
import ContactSection from '@/components/spectacle/contact-section';
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
    <main className="relative flex w-full flex-col gap-3xl overflow-hidden pt-5xl tablet:pt-7xl">
      <TitleSection
        title={'NOS PROJETS'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
          { href: '/agence-evenementielle-strasbourg/projets', text: 'Nos projets' }
        ]}
      ></TitleSection>

      {/* <DivWrapper variant={FadeInVariant}> */}
      <LogoFetchWrapper isTrustSection={false}></LogoFetchWrapper>
      {/* </DivWrapper> */}

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
      <ContactSection></ContactSection>
    </main>
  );
}
