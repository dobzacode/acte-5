import {
  ComingFromBottomVariant,
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import UiButton from '@/components/ui/ui-button';
import Image from 'next/image';
import GalleryScrollAnimation from './gallery-scroll-animation';

export default function ScouteSection() {
  return (
    <section className="inner-section-py relative z-20 flex w-full flex-col gap-9xl rounded-br-4xl rounded-tl-4xl bg-white">
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
        className="section-px flex items-center justify-center gap-xl  laptop:ml-auto"
        variant={ComingFromRightVariant}
      >
        <Image
          src="/placeholder-image.png"
          alt="Image"
          width={400}
          height={400}
          className="rounded-sm"
        ></Image>
        <p className="sub-heading w-[40ch] text-pretty text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </p>
      </InviewWrapper>
      <InviewWrapper
        className="section-px flex flex-row-reverse items-center justify-center gap-xl  laptop:mr-auto"
        variant={ComingFromRightVariant}
      >
        <Image
          src="/placeholder-image.png"
          alt="Image"
          width={400}
          height={400}
          className="rounded-sm"
        ></Image>
        <p className="sub-heading w-[40ch] text-pretty text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing el
        </p>
      </InviewWrapper>
      <InviewWrapper className="flex w-full justify-center" variant={ComingFromBottomVariant}>
        <UiButton size="lg" className="w-fit  " variant="solid" color="pastelPrimary">
          Découvrir la tournée 2024
        </UiButton>
      </InviewWrapper>
    </section>
  );
}
