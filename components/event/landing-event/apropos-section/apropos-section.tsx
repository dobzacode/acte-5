import {
  ComingFromBottomVariant,
  FromTopStaggerVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import Link from 'next/link';
import CompetenceSection from './competence-section';

export default function AproposSection() {
  return (
    <section className="flex flex-col items-center gap-2xl   overflow-x-clip  pb-5xl mobile-large:gap-4xl   ">
      <CompetenceSection></CompetenceSection>
      <div className="section-px flex flex-col items-center gap-lg text-center mobile-large:gap-xl tablet:gap-2xl ">
        <StaggeredText
          margin={'-200px 0px -200px 0px'}
          staggerValue={0.05}
          className="heading--sub-extra-large"
          variant={FromTopStaggerVariant}
        >
          Toujours pas convaincu ?
        </StaggeredText>
        <InviewWrapper
          viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
          variant={ComingFromBottomVariant}
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
              href="/agence-evenementielle-strasbourg/a-propos"
              className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-primary-400 bg-primary-50 px-md py-sm text-primary-400 laptop:gap-sm laptop:px-lg laptop:py-md "
              scroll={false}
            >
              <span>Non, je souhaite en savoir plus !</span>
            </Link>
          </DivHoverWrapper>
        </InviewWrapper>
      </div>
    </section>
  );
}
