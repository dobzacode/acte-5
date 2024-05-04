import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TimelapseSection from './timelapse-section';

export default function HistorySection() {
  return (
    <section className="section-px inner-section-py flex w-full flex-col items-center gap-2xl bg-primary-400 text-white">
      <InviewWrapper
        className="heading--extra-large text-center text-white"
        variant={ComingFromTopVariant}
        tag="h2"
      >
        Notre histoire
      </InviewWrapper>
      <TimelapseSection></TimelapseSection>
    </section>
  );
}
