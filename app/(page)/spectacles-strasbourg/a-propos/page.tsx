import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import HistorySection from '@/components/spectacle/a-propos/history-section';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À Propos de Notre Compagnie de production de Spectacles | Acte 5',
  description:
    "Découvrez l'histoire et la passion qui animent notre compagnie de spectacles. Plongez dans l'univers artistique qui nourrit nos productions captivantes et rencontrez l'équipe dévouée qui donne vie à chaque représentation. Explorez notre vision, nos valeurs et notre engagement envers l'excellence artistique. Bienvenue dans le monde envoûtant de notre compagnie de spectacles, où chaque représentation est une expérience inoubliable."
};

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-xl overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'A PROPOS'}
        element={[
          { href: '/spectacles-strasbourg', text: 'Spectacle' },
          { href: '/spectacles-strasbourg/a-propos', text: 'A propos' }
        ]}
      ></TitleSection>
      <div className="section-px inner-section-gap flex w-full max-w-[90rem] flex-col items-center">
        <InviewWrapper
          className="self-start"
          variant={{
            hidden: {
              opacity: 0,
              x: -200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                type: 'spring',
                damping: 30
              }
            },
            exit: {
              opacity: 0,
              x: -200
            }
          }}
        >
          <div className="relative aspect-[5/3] overflow-hidden rounded-sm max-mobile-large:container max-mobile-large:w-[25rem] mobile-large:w-[30rem]">
            <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
          </div>
        </InviewWrapper>
        <StaggeredText
          variant={FromTopStaggerVariant}
          staggerValue={0.05}
          delay={1}
          className="heading--sub-large section-px max-w-[35ch] text-pretty text-center laptop:mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna
        </StaggeredText>
        <InviewWrapper
          className="self-end"
          variant={{
            hidden: {
              opacity: 0,
              x: 200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                type: 'spring',
                damping: 30
              }
            },
            exit: {
              opacity: 0,
              x: 200
            }
          }}
        >
          <div className="relative aspect-[5/3] overflow-hidden rounded-sm max-mobile-large:container max-mobile-large:w-[25rem] mobile-large:w-[30rem]">
            <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
          </div>
        </InviewWrapper>
      </div>
      <HistorySection></HistorySection>
      <ContactSection></ContactSection>
    </main>
  );
}
