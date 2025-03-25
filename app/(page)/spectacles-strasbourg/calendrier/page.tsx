import DivWrapper from '@/components/framer-motion/div-wrapper';
import Calendrier from '@/components/spectacle/a-laffiche/calendrier';
import ContactSection from '@/components/spectacle/contact-section';
import { Skeleton } from '@/components/ui/skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Calendrier des Spectacles | Acte 5',
  description:
    "Consultez notre calendrier pour découvrir toutes les dates des représentations à venir de nos spectacles captivants. De la comédie musicale à la pièce de théâtre, trouvez l'événement qui vous enchante et réservez vos places dès maintenant pour une expérience théâtrale inoubliable."
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'CALENDRIER DES SPECTACLES'}
        element={[
          { href: '/spectacles-strasbourg', text: 'Événement' },
          { href: '/spectacles-strasbourg/calendrier', text: 'Calendrier des spectacles' }
        ]}
      ></TitleSection>

      <Suspense
        fallback={
          <Skeleton className="card mx-auto flex h-[20rem] w-full max-w-[40rem] flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl laptop:hidden" />
        }
      >
        <DivWrapper
          className="max-laptop:section-px h-fit laptop:px-3xl laptop-large:px-0"
          variant={{
            hidden: {
              opacity: 0,
              x: 100
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 2,

                type: 'spring'
              }
            },
            exit: {
              opacity: 0,
              x: -100
            }
          }}
        >
          <Calendrier isBig={true}></Calendrier>
        </DivWrapper>
      </Suspense>
      <ContactSection isSpectacle={true}></ContactSection>
    </main>
  );
}
