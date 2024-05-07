import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Calendrier from './calendrier';

export default function CalendrierSection() {
  return (
    <section className="inner-section-gap section-px flex w-full flex-col overflow-hidden bg-primary-400 py-2xl duration-medium ">
      <InviewWrapper
        className="heading--sub-extra-large section-px text-center text-white"
        tag="h2"
        variant={ComingFromTopVariant}
      >
        Calendrier des spectacles
      </InviewWrapper>
      <Calendrier></Calendrier>
    </section>
  );
}
