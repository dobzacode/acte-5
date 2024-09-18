import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
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
import { LuArrowUpRight } from 'react-icons/lu';
import pic1 from '/public/assets/spectacle/scoute/scoute_1.jpg';
import pic2 from '/public/assets/spectacle/scoute/scoute_2.jpg';

export const metadata: Metadata = {
  title: 'La Revue Scoute | Acte 5',
  description:
    "Avec 40 ans d'existence, 36 millésimes, 45 000 spectateurs par an, la Revue Scoute, revue de cabaret satirique, est devenue une institution en Alsace."
};

export default async function Home() {
  return (
    <>
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
            La Revue Scoute, c’est un spectacle de cabaret satirique en français qui met en scène
            une troupe de 8 comédiens et 4 musiciens <br />
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
        <section className="section-px main-gap inner-section-gap flex flex-col laptop:container laptop:mx-auto">
          <InviewWrapper
            className="heading--sub-extra-large text-primary-400"
            tag="h2"
            variant={ComingFromLeftVariant}
          >
            Edition 2023 : L&apos;EAU REGIME DU MONDE !
          </InviewWrapper>
          <InviewWrapper
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              maxWidth: '100%'
            }}
            variant={ComingFromRightVariant}
            className="inner-section-gap flex h-fit w-full"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Jn-nb6MCk50?si=tMXVVAHPUhBY8tTl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-xs"
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 30 }}
            ></iframe>
          </InviewWrapper>
          <InviewWrapper className="flex h-fit w-full" variant={ComingFromRightVariant}>
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
              <a
                href="https://www.france.tv/spectacles-et-culture/theatre-et-danse/5674548-l-eau-regime-du-monde.html"
                className="sub-heading group relative flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-2 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10 after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm"
              >
                <span>Voir l'intégralité du spectacle</span>
                <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
              </a>
            </DivHoverWrapper>
          </InviewWrapper>
        </section>

        <Suspense fallback={<PastSectionSkeleton />}>
          <PastSection></PastSection>
        </Suspense>
      </main>
      <ContactSection className="!rounded-tl-none" isSpectacle={true}></ContactSection>
    </>
  );
}
