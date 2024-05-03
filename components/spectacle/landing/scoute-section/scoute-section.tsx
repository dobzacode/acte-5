import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import GalleryScrollAnimation from './gallery-scroll-animation';

export default function ScouteSection() {
  return (
    <section className="inner-section-py flex w-full flex-col gap-9xl rounded-br-4xl rounded-tl-4xl bg-white">
      <InviewWrapper
        variant={ComingFromLeftVariant}
        tag="h2"
        className="heading--extra-large text-center"
      >
        La revue scoute
      </InviewWrapper>

      <GalleryScrollAnimation></GalleryScrollAnimation>
    </section>
  );
}
