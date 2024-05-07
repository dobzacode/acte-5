import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import UiButton from '@/components/ui/ui-button';
import Image from 'next/image';
import Link from 'next/link';
import ScrollImage from './scroll-image';

export default function ProductionSection() {
  return (
    <section className="section-px inner-section-gap relative  flex w-full items-center  bg-primary-400 text-white laptop:container">
      <div className="inner-section-gap flex flex-col ">
        <InviewWrapper className="whitespace-nowrap" variant={ComingFromLeftVariant}>
          <h2 className="heading--extra-large  text-pretty">Production de spectacle</h2>
        </InviewWrapper>
        <div className="relative h-[20rem] w-full rounded-sm laptop:hidden">
          <Image
            src="/placeholder-image.png"
            alt="image"
            fill
            className="rounded-sm object-cover"
          />
        </div>
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
          className="sub-heading laptop:w-1/2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </InviewWrapper>

        <InviewWrapper
          viewport={{ margin: '0px', once: true }}
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
          <UiButton
            href="/spectacle-strasbourg/a-propos"
            as={Link}
            size="lg"
            className="w-fit"
            variant="solid"
            color="default"
          >
            En savoir plus sur notre expertise
          </UiButton>
        </InviewWrapper>
      </div>
      <ScrollImage className="max-laptop:hidden ">
        <Image src="/placeholder-image.png" alt="image" fill className="rounded-sm object-cover" />
      </ScrollImage>
    </section>
  );
}
