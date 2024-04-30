import { ComingFromLeftVariant } from '../framer-motion/div-variants';
import DivWrapper from '../framer-motion/div-wrapper';

export default function HeroSection() {
  return (
    <section className="max-w-screen h-[912px]">
      <DivWrapper
        variant={ComingFromLeftVariant}
        className="absolute left-0 top-0 -z-10 flex h-[912px]  w-full items-center justify-center rounded-br-8xl  bg-gray-200"
      >
        <p className="heading--mega-extra-large text-center text-primary-400">PHRASE D'ACCROCHE</p>
      </DivWrapper>
    </section>
  );
}
