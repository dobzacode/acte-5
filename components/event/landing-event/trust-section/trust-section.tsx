import { ComingFromLeftVariant, FadeInVariant } from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import LogoFetchWrapper from './logo-fetch-wrapper';

export default function TrustSection() {
  return (
    <section className="inner-section-gap relative z-10 flex h-fit w-full flex-col laptop:mx-auto">
      <InviewWrapper
        className="section-px mx-auto laptop:container"
        variant={ComingFromLeftVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <h2 className="heading--large w-fit">
          Forte de plus de 30 ans d&apos;expertise, Acte 5 allie précision et créativité pour
          transformer vos messages en expériences spectaculaires.
        </h2>
      </InviewWrapper>
      <div className="inner-section-gap flex flex-col">
        <div className="relative z-20 flex w-full flex-col gap-md pt-md mobile-large:gap-md">
          <InviewWrapper
            variant={ComingFromLeftVariant}
            className="heading section-px mx-auto laptop:container max-laptop:mx-0 max-laptop:mr-auto mobile-large:whitespace-nowrap"
          >
            Ils sont venus, ils ont vu, ils sont revenus
          </InviewWrapper>
          <InviewWrapper variant={FadeInVariant}>
            <LogoFetchWrapper></LogoFetchWrapper>
          </InviewWrapper>
        </div>
        <InviewWrapper
          className="section-px mx-auto laptop:container max-laptop:mx-0 max-laptop:mr-auto"
          variant={ComingFromLeftVariant}
          inverseOnExit={true}
        >
          <DivHoverWrapper
            className="group w-fit origin-center duration-medium hover:opacity-90"
            variant={{
              hover: {
                scale: 1.02,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'mirror'
                }
              }
            }}
          >
            <Link
              href="/agence-evenementielle-strasbourg/projets"
              className="sub-heading group relative flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-2 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10 after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm"
              scroll={false}
            >
              <span>Voyez par vous-même</span>
              <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>
    </section>
  );
}
