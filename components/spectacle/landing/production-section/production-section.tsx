import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import ScrollImage from './scroll-image';
import image from '/public/assets/spectacle/landing/production_image.jpg';

export default function ProductionSection() {
  return (
    <section className="section-px section-inner-py last-section-inner-py inner-section-gap relative flex w-full items-center bg-primary-400 text-white laptop:container laptop:mx-auto">
      <div className="inner-section-gap relative z-10 flex flex-col">
        <InviewWrapper className="" variant={ComingFromLeftVariant}>
          <h2 className="heading--extra-large text-pretty">Production de spectacle</h2>
        </InviewWrapper>
        <InviewWrapper
          variant={ComingFromLeftVariant}
          className="relative h-[20rem] w-full rounded-sm mobile-large:h-[30rem] tablet:h-[40rem] laptop:hidden"
        >
          <Image
            src={image}
            alt="Image de spectacle"
            placeholder="blur"
            sizes={'(max-width: 640px) 70vw, (min-width: 640px) 90vw'}
            fill
            className="rounded-sm object-cover"
          />
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
                delay: 0.5,
                type: 'spring',
                damping: 20
              }
            },
            exit: {
              opacity: 0,
              x: -200
            }
          }}
          tag="p"
          className="sub-heading h-fit laptop:w-1/2"
        >
          Depuis plus de 30 ans, Acte 5 crée des spectacles d'humour alliant énergie et finesse. Nos
          sketches, toujours percutants, promettent des instants de rires et de légèreté, pour des
          moments de partage inoubliables.
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
          className="relative z-10 flex h-fit laptop:w-1/2"
        >
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
              href="/agence-evenementielle-strasbourg/services?categorie=spectacle"
              className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-black bg-white px-md py-sm text-black laptop:gap-sm laptop:px-lg laptop:py-md"
              scroll={false}
            >
              <span> En savoir plus sur notre expertise</span>
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>

      <ScrollImage className="absolute right-0 max-laptop:hidden">
        <Image
          src={image}
          sizes={'(max-width: 640px) 70vw, (min-width: 640px) 60vw'}
          alt="Image de spectacle"
          placeholder="blur"
          fill
          className="rounded-sm object-cover object-left"
        />
      </ScrollImage>
    </section>
  );
}
