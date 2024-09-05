import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Calendrier from './calendrier';

export default function CalendrierSection({ isLanding = false }: { isLanding?: boolean }) {
  return (
    <section
      className={`inner-section-gap flex w-full flex-col justify-center overflow-hidden bg-primary-400 py-2xl duration-medium mobile-small:py-3xl mobile-medium:py-2xl mobile-large:py-4xl tablet:py-5xl`}
    >
      <InviewWrapper
        className="heading--sub-extra-large section-px text-center text-white"
        tag="h2"
        variant={ComingFromTopVariant}
      >
        Calendrier des spectacles
      </InviewWrapper>
      <Suspense
        fallback={
          isLanding ? (
            <Skeleton className="card mx-auto flex h-[20rem] w-full max-w-[40rem] flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl" />
          ) : (
            <>
              <div className="section-px h-full w-screen max-laptop:hidden">
                <Skeleton className="card relative mx-auto flex h-[30rem] w-full flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl" />
              </div>
              <Skeleton className="card mx-auto flex h-[20rem] w-full max-w-[40rem] flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl laptop:hidden" />
            </>
          )
        }
      >
        <Calendrier isBig={isLanding ? false : true}></Calendrier>
      </Suspense>
    </section>
  );
}
