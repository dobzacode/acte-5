import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  FadeInVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';
import GalleryScrollAnimation from './gallery-scroll-animation';
import TourButton from './tour-button';
import pic1 from '/public/assets/spectacle/landing/scoute_1.jpg';
import pic2 from '/public/assets/spectacle/landing/scoute_2.jpg';
import pic3 from '/public/assets/spectacle/landing/scoute_3.jpg';

export default function ScouteSection() {
  return (
    <section className="inner-section-py section-inner-py inner-section-gap relative z-20 flex w-full flex-col rounded-br-2xl bg-white max-tablet:gap-2xl max-tablet:overflow-hidden mobile-large:rounded-br-4xl tablet:gap-4xl tablet:rounded-br-6xl laptop:rounded-br-8xl">
      <div className="flex flex-col items-center gap-xl">
        <InviewWrapper
          variant={ComingFromLeftVariant}
          tag="h2"
          className="heading--extra-large text-center"
        >
          La Revue Scoute
        </InviewWrapper>
      </div>

      <GalleryScrollAnimation></GalleryScrollAnimation>
      <div className="flex flex-col gap-2xl laptop:container laptop:mx-auto laptop:gap-4xl laptop-large:gap-6xl">
        <InviewWrapper
          className="section-px inner-section-gap flex flex-col items-center justify-center mobile-large:flex-row-reverse tablet:hidden laptop:ml-auto"
          variant={ComingFromLeftVariant}
        >
          <Image
            priority={true}
            src={pic3}
            placeholder="blur"
            alt="Photo de spectacle"
            width={400}
            height={400}
            className="rounded-sm"
          ></Image>
          <p className="sub-heading text-pretty text-center mobile-large:w-[40ch]">
            Le plus grand cabaret satirique d'Alsace se moque de tout et de tout le monde depuis
            plus de 40 ans. Chaque année, une nouvelle édition pour un spectacle mémorable, en
            français.
          </p>
        </InviewWrapper>
        <InviewWrapper
          className="section-px inner-section-gap flex flex-col items-center justify-center mobile-large:flex-row laptop:ml-auto"
          variant={ComingFromRightVariant}
        >
          <Image
            priority={true}
            src={pic1}
            placeholder="blur"
            alt="Photo de spectacle"
            width={400}
            height={400}
            className="rounded-sm"
          ></Image>
          <p className="sub-heading text-pretty text-center mobile-large:w-[40ch]">
            Sur scène, huit comédiens et quatre musiciens composent une mosaïque vivante où la
            parodie et la dérision règnent en maîtres.
          </p>
        </InviewWrapper>
        <InviewWrapper
          className="section-px inner-section-gap flex flex-col items-center justify-center mobile-large:flex-row-reverse laptop:mr-auto"
          variant={ComingFromRightVariant}
        >
          <Image
            src={pic2}
            placeholder="blur"
            alt="Photo de spectacle"
            width={400}
            height={400}
            className="rounded-sm"
          ></Image>
          <p className="sub-heading text-pretty text-center mobile-large:w-[40ch]">
            Les sketches s'enchaînent, proposant chacun décors et autres costumes loufoques, la
            musique accompagne chaque rebondissement avec une énergie contagieuse.
          </p>
        </InviewWrapper>
        <InviewWrapper className="flex h-fit w-full justify-center" variant={FadeInVariant}>
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
            <TourButton />
          </DivHoverWrapper>
        </InviewWrapper>
      </div>
    </section>
  );
}
