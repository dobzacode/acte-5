import {
  ComingFromBottomVariant,
  FromTopStaggerVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import UiButton from '@/components/ui/ui-button';
import CompetenceSection from './competence-section';

export default function AproposSection() {
  return (
    <section className="flex flex-col items-center gap-3xl  overflow-x-clip pb-5xl mobile-large:gap-4xl tablet:gap-6xl laptop:gap-7xl laptop-large:gap-9xl ">
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
          <UiButton size="lg" className=" w-fit " variant="solid" color="pastelPrimary">
            Non, je souhaite en savoir plus
          </UiButton>
        </InviewWrapper>
      </div>
    </section>
  );
}
