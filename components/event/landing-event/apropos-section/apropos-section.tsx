import { FadeInVariant, FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import CompetenceSection from './competence-section';

export default function AproposSection() {
  return (
    <section className="flex flex-col items-center gap-2xl pb-5xl laptop:container mobile-large:gap-4xl">
      <CompetenceSection></CompetenceSection>
      <div className="section-px flex flex-col items-center gap-lg text-center mobile-large:gap-xl tablet:gap-2xl">
        <StaggeredText
          staggerValue={0.05}
          className="heading--sub-extra-large text-pretty"
          variant={FromTopStaggerVariant}
        >
          Toujours pas convaincu ?
        </StaggeredText>
        <InviewWrapper className="h-fit" variant={FadeInVariant}>
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
              href="/agence-evenementielle-strasbourg/a-propos"
              className="sub-heading group relative flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-2 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10 after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm"
              scroll={false}
            >
              <span>Non, je souhaite en savoir plus !</span>
              <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>
    </section>
  );
}
