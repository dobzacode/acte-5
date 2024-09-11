import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import ScrollImage from './scroll-image';

export default function ProductionSection() {
  return (
    <section className="section-px section-inner-py last-section-inner-py inner-section-gap relative flex w-full items-center bg-primary-400 text-white laptop:container laptop:mx-auto">
      <div className="inner-section-gap flex flex-col">
        <InviewWrapper className="whitespace-nowrap" variant={ComingFromLeftVariant}>
          <h2 className="heading--extra-large text-pretty">Production de spectacle</h2>
        </InviewWrapper>
        <InviewWrapper
          variant={ComingFromLeftVariant}
          className="relative h-[20rem] w-full rounded-sm laptop:hidden"
        >
          <Image
            src="/placeholder-image.png"
            alt="image"
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
          Acte 5 vous offre des spectacles d'humour pleins d'énergie et de répartie. Entre sketches
          mordants et rires assurés, nos créations promettent de moments de bonne humeur et de fous
          rires partagés !
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
              href="/spectacles-strasbourg/a-propos"
              className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-black bg-white px-md py-sm text-black laptop:gap-sm laptop:px-lg laptop:py-md"
              scroll={false}
            >
              <span> En savoir plus sur notre expertise</span>
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>

      <ScrollImage className="max-laptop:hidden">
        <Image src="/placeholder-image.png" alt="image" fill className="rounded-sm object-cover" />
      </ScrollImage>
    </section>
  );
}
