import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

export default function HeroSection({ isSpectacle = false }: { isSpectacle?: boolean }) {
  return (
    <section className="max-w-screen h-[calc(95vh)] w-full bg-white after:absolute after:bg-white tablet:h-[calc(95vhpx)]">
      <DivWrapper
        variant={ComingFromLeftVariant}
        className="absolute left-0 top-0 z-10 flex h-[calc(95vh)] w-full items-center justify-center overflow-hidden rounded-br-2xl bg-gray-200 mobile-large:rounded-br-4xl tablet:h-[calc(95vhpx)] tablet:rounded-br-6xl laptop:rounded-br-8xl"
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src={'/assets/spectacle/landing/bg-spectacle.mp4'} type="video/mp4" />
          Votre navigateur ne supporte pas la balise video.
        </video>
        {!isSpectacle && (
          <h1 className="heading--extra-large relative z-20 w-[18ch] text-center text-white">
            agence de communication évenementielle spectaculaire
          </h1>
        )}
      </DivWrapper>
    </section>
  );
}
