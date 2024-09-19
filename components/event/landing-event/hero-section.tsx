import {
  FullTranslateFromLeft,
  FullTranslateFromRight
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import { cn } from '@/lib/utils';

export default function HeroSection({ isSpectacle = false }: { isSpectacle?: boolean }) {
  return (
    <section className="max-w-screen h-[calc(85vh)] w-full bg-white after:absolute after:bg-white tablet:h-[95vh]">
      <DivWrapper
        inverseOnExit={false}
        variant={!isSpectacle ? FullTranslateFromLeft : FullTranslateFromRight}
        className={cn(
          'absolute left-0 top-0 z-10 flex h-[calc(85vh)] w-full items-center justify-center overflow-hidden rounded-br-2xl bg-gray-200 mobile-large:rounded-br-4xl tablet:h-[95vh] tablet:rounded-br-6xl laptop:rounded-br-8xl',
          isSpectacle &&
            '!rounded-br-none rounded-bl-2xl mobile-large:rounded-bl-4xl tablet:rounded-bl-6xl laptop:rounded-bl-8xl'
        )}
      >
        {!isSpectacle && (
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50"></div>
        )}
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source
            src={
              isSpectacle
                ? '/assets/spectacle/landing/bg-spectacle.mp4'
                : '/assets/event/landing/bg-event.mp4'
            }
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la balise video.
        </video>
        {!isSpectacle && (
          <h1 className="heading--extra-large relative z-20 w-[18ch] text-center text-white">
            agence de communication événementielle spectaculaire
          </h1>
        )}
      </DivWrapper>
    </section>
  );
}
