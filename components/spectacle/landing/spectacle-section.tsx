import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import image from '/public/assets/spectacle/landing/spectacle_image.jpg';

export default function SpectacleSection() {
  return (
    <section className="section-inner-py max-w-screen inner-section-py relative z-20 w-full bg-white mobile-large:rounded-br-4xl mobile-large:rounded-tl-4xl tablet:rounded-br-6xl tablet:rounded-tl-6xl laptop:rounded-br-8xl laptop:rounded-tl-8xl">
      <div className="section-px inner-section-gap flex w-full flex-col items-center laptop:container laptop:mx-auto">
        <InviewWrapper variant={ComingFromLeftVariant}>
          <h1 className="heading--extra-large max-w-[30ch] text-center">Spectacle d'entreprise</h1>
        </InviewWrapper>
        <InviewWrapper
          className="heading max-w-[30ch] text-pretty text-center"
          variant={ComingFromRightVariant}
          tag="p"
        >
          Pour créer l&apos;animation lors de vos fêtes d&apos;entreprise, de vos soirées comité
          d&apos;entreprise (CSE) ou encore pour votre association, nous tenons à votre disposition
          une palette d&apos;artistes : comédien, magicien, musicien, etc.
        </InviewWrapper>
        <div className="inner-section-gap relative z-20 flex w-full items-center justify-around text-pretty text-center">
          <InviewWrapper
            className="relative -z-20"
            variant={{
              hidden: {
                y: 200
              },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  damping: 20
                }
              },
              exit: {
                opacity: 0,
                y: -200
              }
            }}
          >
            <Image
              width={1000}
              height={1000}
              placeholder="blur"
              src={image}
              alt="Spectacle"
              className="rounded-sm"
            ></Image>
          </InviewWrapper>
        </div>
        <DivHoverWrapper
          className="group w-fit origin-center duration-medium hover:opacity-90"
          variant={{
            hover: {
              scale: 1.02,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }
          }}
        >
          <Link
            scroll={false}
            href={`/agence-evenementielle-strasbourg/services?categorie=spectacle`}
            className="sub-heading group relative flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-2 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10 after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm"
          >
            <span>Découvrir d'avantage</span>
            <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
          </Link>
        </DivHoverWrapper>
      </div>
    </section>
  );
}
