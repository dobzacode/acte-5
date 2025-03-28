import AffichesSkeleton from '@/components/skeleton/affiches-skeleton';
import Affiches from '@/components/spectacle/a-laffiche/affiches';
import CalendrierSection from '@/components/spectacle/a-laffiche/calendrier-section';
import ContactSection from '@/components/spectacle/contact-section';
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
    <>
      <main className="flex flex-col items-center justify-center gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
        <TitleSection
          title={"A L'AFFICHE"}
          element={[
            { href: '/spectacles-strasbourg', text: 'Événement' },
            { href: '/spectacles-strasbourg/a-laffiche', text: "A l'affiche" }
          ]}
        ></TitleSection>

        <p className="heading--sub-large section-px h-fit max-w-[35ch] text-pretty text-center laptop:mx-auto">
          L'agence Acte 5 propose aux entreprises, associations et collectivités, des spectacles
          d'humour clé en main, en français.
        </p>
        <Suspense fallback={<AffichesSkeleton />}>
          <Affiches></Affiches>
        </Suspense>
        <CalendrierSection></CalendrierSection>
      </main>
      <ContactSection className="!rounded-tl-none" isSpectacle={true}></ContactSection>
    </>
  );
}
