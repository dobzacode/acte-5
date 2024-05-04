import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import HistorySection from '@/components/spectacle/a-propos/history-section';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex  flex-col items-center justify-center gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'A PROPOS'}
        element={[
          { href: '/evenement', text: 'Évenement' },
          { href: '/evenement/a-propos', text: 'A propos' }
        ]}
      ></TitleSection>
      <div className="flex w-full max-w-[90rem] flex-col items-center gap-lg">
        <InviewWrapper
          className="self-start"
          variant={{
            hidden: {
              opacity: 0,
              x: -200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                type: 'spring',
                damping: 30
              }
            },
            exit: {
              opacity: 0,
              x: -200
            }
          }}
        >
          <div className="relative aspect-[5/3] w-[30rem]">
            <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
          </div>
        </InviewWrapper>
        <StaggeredText
          variant={FromTopStaggerVariant}
          staggerValue={0.05}
          delay={1}
          className="heading--sub-large section-px max-w-[35ch] text-pretty text-center laptop:mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna
        </StaggeredText>
        <InviewWrapper
          className="self-end"
          variant={{
            hidden: {
              opacity: 0,
              x: 200
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
                type: 'spring',
                damping: 30
              }
            },
            exit: {
              opacity: 0,
              x: 200
            }
          }}
        >
          <div className="relative aspect-[5/3] w-[30rem]">
            <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
          </div>
        </InviewWrapper>
      </div>
      <HistorySection></HistorySection>
    </main>
  );
}
