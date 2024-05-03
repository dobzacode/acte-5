import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import StaggeredText from '@/components/framer-motion/staggered-text';
import PastSection from '@/components/spectacle/revue-scoute/past-section';
import Section2024 from '@/components/spectacle/revue-scoute/section-2024';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default async function Home() {
  return (
    <main className="relative flex w-full flex-col gap-xl  pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'LA REVUE SCOUTE'}
        element={[
          { href: '/spectacles-strasbourg', text: 'Spectacle' },
          { href: '/spectacles-strasbourg/revue-scoute', text: 'La Revue scoute' }
        ]}
      ></TitleSection>
      <div className="section-px flex gap-xl laptop:container laptop:mx-auto">
        <StaggeredText
          className=" heading--sub-large container relative mx-auto"
          variant={FromTopStaggerVariant}
          delay={0.5}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
          ut labore et dolore magna
        </StaggeredText>

        <div className="relative">
          <InviewWrapper
            variant={{
              hidden: {
                opacity: 0,
                x: 200
              },
              enter: {
                opacity: 1,
                x: 0,
                transition: {
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
            <Image
              className="rounded-xs"
              src="/placeholder-image.png"
              alt="Image"
              width={800}
              height={800}
            ></Image>
          </InviewWrapper>
          <InviewWrapper
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
            <Image
              className="-ml-7xl -mt-5xl rounded-xs"
              src="/placeholder-image.png"
              alt="Image"
              width={400}
              height={400}
            ></Image>
          </InviewWrapper>
        </div>
      </div>
      <Section2024></Section2024>
      <PastSection></PastSection>
    </main>
  );
}
