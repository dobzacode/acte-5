import {
  ComingFromRightVariant,
  FromTopStaggerVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import Calendrier from '@/components/spectacle/a-laffiche/calendrier';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';

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
          { href: '/spectacles-strasbourg', text: 'Évenement' },
          { href: '/spectacles-strasbourg/calendrier', text: 'Calendrier des spectacles' }
        ]}
      ></TitleSection>

      <StaggeredText
        variant={FromTopStaggerVariant}
        staggerValue={0.05}
        delay={1}
        className="heading--sub-large section-px max-w-[35ch] text-pretty text-center laptop:mx-auto"
      >
        Retrouvez ci-dessous le calendrier de nos spectacles
      </StaggeredText>
      <InviewWrapper
        className="max-laptop:section-px laptop:px-3xl laptop-large:px-0"
        variant={ComingFromRightVariant}
      >
        <Calendrier isBig={true}></Calendrier>
      </InviewWrapper>
    </main>
  );
}