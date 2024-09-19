import TeamSection from '@/components/event/a-propos/team-section';
import {
  ComingFromRightVariant,
  FromTopStaggerVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import placeholder from '/public/placeholder-image.png';

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
            delay={1}
            className="heading--sub-large text-pretty laptop:container laptop:mx-auto"
          >
            Forte de plus de 30 ans d&apos;expertise en communication événementielle, Acte 5 puise
            dans les arts de la scène pour donner vie à vos messages d&apos;entreprise
          </StaggeredText>
          <div className="inner-section-gap flex flex-col">
            <InviewWrapper
              variant={ComingFromRightVariant}
              className="relative aspect-[5/2] w-full overflow-hidden rounded-sm"
            >
              <Image
                alt=""
                src={placeholder}
                placeholder="blur"
                fill
                className="rounded-sm object-cover"
              />
            </InviewWrapper>
            <span className="sub-heading flex gap-lg max-mobile-large:flex-col">
              <InviewWrapper
                inverseOnExit={true}
                variant={{
                  hidden: {
                    y: -100,
                    opacity: 0
                  },
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: {
                        type: 'spring',
                        delay: 0
                      },
                      opacity: {
                        duration: 0.05
                      }
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: 100,
                    transition: {
                      duration: 1
                    }
                  }
                }}
                tag="p"
                className="-z-10 mobile-large:w-1/2"
                viewport={{
                  margin: '0px -0% -25% 0px'
                }}
              >
                Acte 5 incarne la promesse d'un dénouement grandiose à vos projets, à l'image du
                dernier acte d'une œuvre magistrale qui grave son empreinte dans l'âme du public.
                Notre odyssée, forgée dans les feux de la production artistique et de la satire,
                nous a dotés d'une vision unique.
              </InviewWrapper>
              <InviewWrapper
                inverseOnExit={true}
                variant={{
                  hidden: {
                    y: -100,
                    opacity: 0
                  },
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: {
                        type: 'spring',
                        delay: 0.3
                      },
                      opacity: {
                        duration: 0.05
                      }
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: 100,
                    transition: {
                      duration: 1
                    }
                  }
                }}
                tag="p"
                className="-z-10 mobile-large:w-1/2"
                viewport={{
                  margin: '0px 0px -25% 0px'
                }}
              >
                Cette perspective singulière, nous la mettons au service de vos événements pour les
                transformer en expériences inoubliables et percutantes.
              </InviewWrapper>
            </span>
          </div>
        </div>

        <TeamSection></TeamSection>
      </main>
      <ContactSection className="!rounded-tl-none"></ContactSection>
    </>
  );
}
