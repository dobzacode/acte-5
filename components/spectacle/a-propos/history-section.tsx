import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TimelapseSection from './timelapse-section';

export default function HistorySection() {
  return (
    <section className=" inner-section-py flex w-full flex-col items-center gap-2xl bg-primary-400 text-white">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--extra-large section-px text-center text-white">Notre histoire</h2>
      </InviewWrapper>
      <TimelapseSection></TimelapseSection>
    </section>
  );
}
