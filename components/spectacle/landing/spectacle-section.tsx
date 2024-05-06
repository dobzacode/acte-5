import {
  ComingFromTopVariant,
  FromTopStaggerVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import UiButton from '@/components/ui/ui-button';
import Image from 'next/image';

export default function SpectacleSection() {
  return (
    <section className="section-px flex w-full flex-col items-center gap-2xl bg-transparent text-white">
      <InviewWrapper
        variant={ComingFromTopVariant}
        tag="h1"
        className="heading--extra-large max-w-[30ch] text-center"
      >
        Spectacle d'entreprise
      </InviewWrapper>
      <StaggeredText
        className="heading--sub-large max-w-[30ch] text-pretty text-center text-white"
        variant={FromTopStaggerVariant}
        delay={1}
      >
        Pour créer l&apos;animation lors de vos fêtes de Noël, de vos soirées comité
        d&apos;entreprise (CSE) ou encore pour votre association, pensez à nos spectacles
        d&apos;humour !
      </StaggeredText>
      <div className="relative z-20 flex w-full items-center justify-around gap-lg text-pretty text-center">
        <InviewWrapper
          tag="p"
          variant={{
            hidden: {
              opacity: 0,
              x: 200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                type: 'spring',
                damping: 20
              }
            },
            exit: {
              opacity: 0,
              x: 200
            }
          }}
          className="sub-heading relative -z-10 max-tablet:hidden"
        >
          LOREM IPSUM DOLOR SIT AMET
        </InviewWrapper>
        <InviewWrapper variant={ComingFromTopVariant}>
          <Image
            src="/placeholder-image.png"
            alt="image"
            width={600}
            height={600}
            className="rounded-sm"
          ></Image>
        </InviewWrapper>
        <InviewWrapper
          variant={{
            hidden: {
              opacity: 0,
              x: -200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                type: 'spring',
                damping: 20
              }
            },
            exit: {
              opacity: 0,
              x: -200
            }
          }}
          className="sub-heading relative -z-10 max-tablet:hidden"
        >
          LOREM IPSUM DOLOR SIT AMET
        </InviewWrapper>
      </div>
      <InviewWrapper
        viewport={{ margin: '0px', once: true }}
        variant={{
          hidden: {
            opacity: 0,
            y: -200
          },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              type: 'spring',
              damping: 20
            }
          },
          exit: {
            opacity: 0,
            y: -200
          }
        }}
        className="relative z-10 flex h-fit w-full items-center justify-center"
      >
        <UiButton size="lg" className="w-fit" variant="solid" color="default">
          Découvrir d'avantage
        </UiButton>
      </InviewWrapper>
    </section>
  );
}
