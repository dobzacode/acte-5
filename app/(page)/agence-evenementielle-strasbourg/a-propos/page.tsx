import TeamSection from '@/components/event/a-propos/team-section';
import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import picture from '/public/assets/event/a-propos/image.jpg';

export const metadata: Metadata = {
  title: 'Notre agence | Acte 5 à Strasbourg',
  description:
    "Acte 5 est une agence pluri-indisciplinée…. mais ne demandez pas une présentation académique de l'équipe ! On s'y ennuierait bien vite."
};

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center gap-xl overflow-x-clip px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
        <TitleSection
          title={'A PROPOS'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/a-propos', text: 'A propos' }
          ]}
        ></TitleSection>
        <div className="main-gap section-px flex w-full flex-col laptop:container laptop:mx-auto">
          <StaggeredText
            variant={FromTopStaggerVariant}
            staggerValue={0.05}
            className="heading--sub-large text-pretty laptop:container laptop:mx-auto"
          >
            Forte de plus de 30 ans d&apos;expertise en communication événementielle, Acte 5 puise
            dans les arts de la scène pour donner vie à vos messages d&apos;entreprise
          </StaggeredText>
          <InviewWrapper
            variant={{
              hidden: {
                opacity: 0,
                x: 100
              },
              enter: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8
                }
              },
              exit: {
                opacity: 0,
                x: -100
              }
            }}
            className="inner-section-gap flex w-full max-tablet:flex-col"
          >
            <div className="relative shrink-0 rounded-sm tablet:w-1/2">
              <Image
                alt=""
                src={picture}
                placeholder="blur"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
            <span className="tablet:heading sub-heading items-around flex flex-col gap-xl font-light tablet:w-1/2">
              <p className="-z-10">
                Acte 5 incarne la promesse d'un dénouement grandiose à vos projets, à l'image du
                dernier acte d'une œuvre magistrale qui grave son empreinte dans l'âme du public.
                Notre odyssée, forgée dans les feux de la production artistique et de la satire,
                nous a dotés d'une vision unique.
              </p>
              <p className="-z-10">
                Cette perspective singulière, nous la mettons au service de vos événements pour les
                transformer en expériences inoubliables et percutantes.
              </p>
            </span>
          </InviewWrapper>
        </div>

        <TeamSection></TeamSection>
      </main>
      <ContactSection className="!rounded-tl-none"></ContactSection>
    </>
  );
}
