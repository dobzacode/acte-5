import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import PastSectionSkeleton from '@/components/skeleton/past-section-skeleton';
import ScouteSkeleton from '@/components/skeleton/scoute-skeleton';
import ContactSection from '@/components/spectacle/contact-section';
import PastSection from '@/components/spectacle/revue-scoute/past-section';
import Section2024 from '@/components/spectacle/revue-scoute/section-2024';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import pic1 from '/public/assets/spectacle/scoute/scoute_1.jpg';
import pic2 from '/public/assets/spectacle/scoute/scoute_2.jpg';

export const metadata: Metadata = {
  title: 'La Revue Scoute | Acte 5',
  description:
    "Avec 40 ans d'existence, 36 millésimes, 45 000 spectateurs par an, la Revue Scoute, revue de cabaret satirique, est devenue une institution en Alsace."
};

export default async function Home() {
  return (
    <main className="relative flex w-full flex-col gap-xl overflow-x-clip pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'LA REVUE SCOUTE'}
        element={[
          { href: '/spectacles-strasbourg', text: 'Spectacle' },
          { href: '/spectacles-strasbourg/revue-scoute', text: 'La Revue scoute' }
        ]}
      ></TitleSection>
      <div className="section-px inner-section-gap flex laptop:container max-laptop-large:items-start max-tablet:flex-col laptop:mx-auto">
        <InviewWrapper
          tag="p"
          className="sub-heading relative tablet:container tablet:mx-auto"
          variant={ComingFromRightVariant}
        >
          La Revue Scoute, c’est un spectacle de cabaret satirique en français qui met en scène une
          troupe de 8 comédiens et 4 musiciens <br />
          <br />
          Chaque année, on revisite les petits et grands événements de l’année en nous moquant de
          tout et de tout le monde : de la politique locale et nationale, des faits de société, de
          nos travers, de là où ça grince et où ça ne passe que quand le rire s’en mêle !
        </InviewWrapper>

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
              src={pic1}
              placeholder="blur"
              alt="Photo de spectacle"
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
              className="-ml-7xl -mt-4xl rounded-xs max-laptop-large:hidden"
              src={pic2}
              placeholder="blur"
              alt="Photo de spectacle"
              width={400}
              height={400}
            ></Image>
          </InviewWrapper>
        </div>
      </div>
      <Suspense fallback={<ScouteSkeleton />}>
        <Section2024></Section2024>
      </Suspense>
      <Suspense fallback={<PastSectionSkeleton />}>
        <PastSection></PastSection>
      </Suspense>
      <ContactSection></ContactSection>
    </main>
  );
}
