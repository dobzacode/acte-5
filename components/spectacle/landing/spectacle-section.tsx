import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import UiButton from '@/components/ui/ui-button';
import Image from 'next/image';
import Link from 'next/link';

export default function SpectacleSection() {
  return (
    <section className="section-px max-w-screen inner-section-gap flex w-full flex-col items-center  bg-transparent text-white">
      <InviewWrapper variant={ComingFromLeftVariant}>
        <h1 className="heading--extra-large max-w-[30ch] text-center">Spectacle d'entreprise</h1>
      </InviewWrapper>
      <InviewWrapper
        className="heading max-w-[30ch] text-pretty text-center text-white"
        variant={ComingFromRightVariant}
        tag="p"
      >
        Pour créer l&apos;animation lors de vos fêtes de Noël, de vos soirées comité
        d&apos;entreprise (CSE) ou encore pour votre association, pensez à nos spectacles
        d&apos;humour !
      </InviewWrapper>
      <div className="inner-section-gap relative z-20 flex w-full items-center justify-around text-pretty text-center">
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
        <InviewWrapper className="relative -z-20" variant={ComingFromTopVariant}>
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
        <UiButton
          href="/agence-evenementielle-strasbourg/services/spectacle-entreprise"
          size="lg"
          className="w-fit"
          variant="solid"
          color="white"
        >
          <Link
            href="/agence-evenementielle-strasbourg/services/spectacle-entreprise"
            scroll={false}
          >
            Découvrir d'avantage
          </Link>
        </UiButton>
      </InviewWrapper>
    </section>
  );
}
