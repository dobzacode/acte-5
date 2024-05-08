import {
  ComingFromBottomVariant,
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import GalleryScrollAnimation from './gallery-scroll-animation';

export default function ScouteSection() {
  return (
    <section className="inner-section-py inner-section-gap relative z-20 flex w-full flex-col rounded-br-2xl rounded-tl-2xl bg-white max-tablet:overflow-hidden  mobile-large:rounded-br-4xl  mobile-large:rounded-tl-4xl tablet:gap-4xl tablet:rounded-br-6xl  tablet:rounded-tl-6xl  laptop:rounded-br-8xl laptop:rounded-tl-8xl">
      <div className="flex flex-col items-center gap-xl">
        <InviewWrapper
          variant={ComingFromLeftVariant}
          tag="h2"
          className="heading--extra-large text-center"
        >
          La revue scoute
        </InviewWrapper>
        <InviewWrapper
          variant={ComingFromRightVariant}
          className="sub-heading w-[40ch] text-pretty text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </InviewWrapper>
      </div>

      <GalleryScrollAnimation></GalleryScrollAnimation>
      <InviewWrapper
        className="section-px  inner-section-gap flex items-center  justify-center laptop:ml-auto"
        variant={ComingFromRightVariant}
      >
        <Image
          src="/placeholder-image.png"
          alt="Image"
          width={400}
          height={400}
          className="rounded-sm"
        ></Image>
        <p className="sub-heading w-[40ch] text-pretty mobile-large:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </p>
      </InviewWrapper>
      <InviewWrapper
        className="section-px inner-section-gap flex flex-row-reverse items-center justify-center  laptop:mr-auto"
        variant={ComingFromRightVariant}
      >
        <Image
          src="/placeholder-image.png"
          alt="Image"
          width={400}
          height={400}
          className="rounded-sm"
        ></Image>
        <p className="sub-heading w-[40ch] text-pretty mobile-large:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </p>
      </InviewWrapper>
      <InviewWrapper className="flex w-full justify-center" variant={ComingFromBottomVariant}>
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
            href="/spectacle-strasbourg/revue-scoute"
            className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-primary-400 bg-primary-50 px-md py-sm text-primary-400 laptop:gap-sm laptop:px-lg laptop:py-md "
            scroll={false}
          >
            <span>Découvrir la tournée 2024</span>
          </Link>
        </DivHoverWrapper>
      </InviewWrapper>
    </section>
  );
}
