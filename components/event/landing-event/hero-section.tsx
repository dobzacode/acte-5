import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

export default function HeroSection() {
  return (
    <section className="max-w-screen h-[calc(95vh)] w-full bg-white after:absolute after:bg-white tablet:h-[calc(95vhpx)]">
      <DivWrapper
        variant={ComingFromLeftVariant}
        className="absolute left-0 top-0 z-10 flex h-[calc(95vh)] w-full  items-center justify-center  rounded-br-2xl bg-gray-200 mobile-large:rounded-br-4xl  tablet:h-[calc(95vhpx)]  tablet:rounded-br-6xl laptop:rounded-br-8xl"
      >
        <h1 className="heading--mega-extra-large text-center text-primary-400">
          agence de communication évenementielle spectaculaire
        </h1>
      </DivWrapper>
    </section>
  );
}
