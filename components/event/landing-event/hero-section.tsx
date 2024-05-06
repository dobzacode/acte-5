import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

export default function HeroSection() {
  return (
    <section className="max-w-screen h-[95vh] w-full tablet:h-[912px] ">
      <DivWrapper
        variant={ComingFromLeftVariant}
        className="absolute left-0 top-0 -z-10 flex h-[95vh] w-full  items-center justify-center  rounded-br-2xl bg-gray-200 mobile-large:rounded-br-4xl  tablet:h-[912px]  tablet:rounded-br-6xl laptop:rounded-br-8xl"
      >
        <p className="heading--mega-extra-large text-center text-primary-400">PHRASE D'ACCROCHE</p>
      </DivWrapper>
    </section>
  );
}
