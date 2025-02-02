import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

import Footer from '@/components/ui/footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import eventimage from '/public/assets/landing/event.jpg';
import spectacleimage from '/public/assets/landing/spectacle.jpg';

export const metadata: Metadata = {
  title: 'Acte 5 | Agence de Communication Événementielle à Strasbourg',
  description:
    'Acte 5 vous accompagne dans vos projets événementiels, spectacles et communication depuis notre agence à Strasbourg.'
};

export default function Home() {
  return (
    <>
      <main className="section-px mx-auto flex h-full w-full flex-col items-center justify-between gap-xl pb-3xl pt-4xl mobile-large:pt-5xl tablet:gap-xl tablet:py-6xl laptop:gap-3xl laptop:py-6xl laptop-large:py-7xl [&>section:last-child]:pb-0">
        <DivWrapper
          className="inner-section-gap flex flex-col items-center"
          variant={ComingFromTopVariant}
        >
          <h1 className="heading--sub-extra-large text-pretty text-center text-primary-400">
            agence de communication événementielle spectaculaire
          </h1>
        </DivWrapper>
        <section className="flex justify-between gap-lg max-tablet:flex-col tablet:gap-md laptop:justify-center">
          <Link
            scroll={false}
            className="group flex h-fit w-fit flex-col gap-xs tablet:w-1/2"
            href="agence-evenementielle-strasbourg"
          >
            <DivWrapper
              className="relative flex h-[300px] flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md after:absolute after:bottom-0 after:z-10 after:h-1/2 after:w-full after:translate-y-[200%] after:bg-gradient-to-t after:from-black after:from-5% after:to-transparent after:duration-medium hover:grayscale-0 hover:after:translate-y-0 tablet:h-[400px]"
              variant={{
                hidden: {
                  opacity: 0,
                  x: -100
                },
                enter: {
                  opacity: 1,
                  x: 0
                },
                exit: {
                  opacity: 0,
                  x: -100,
                  transition: {
                    delay: 0.3,
                    duration: 1
                  }
                }
              }}
              inverseOnExit={true}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover duration-medium group-hover:grayscale"
                fill
                placeholder="blur"
                quality={100}
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw'}
                src={eventimage}
              />

              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-start text-white duration-medium group-hover:translate-y-0">
                Des événements sur mesure pour sublimer vos projets et renforcer l&apos;image de
                votre entreprise.
              </p>
            </DivWrapper>
            <DivWrapper
              variant={{
                hidden: {
                  opacity: 0,
                  y: -100
                },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    type: 'spring'
                  }
                },
                exit: {
                  y: -100,
                  opacity: 0,
                  transition: {
                    y: {
                      type: 'spring'
                    },
                    opacity: {
                      duration: 0.1,
                      delay: 0.3
                    }
                  }
                }
              }}
              inverseOnExit={true}
              className="relative -z-10"
            >
              <h2 className="heading--sub-large -z-10 translate-y-0 px-sm text-black backdrop-blur-sm duration-medium group-hover:-translate-y-[200%] laptop-large:px-md">
                ÉVÉNEMENTIEL
              </h2>
            </DivWrapper>
          </Link>
          <Link
            scroll={false}
            className="group flex h-fit w-fit flex-col gap-xs tablet:w-1/2"
            href="spectacles-strasbourg"
          >
            <DivWrapper
              className="relative flex h-[300px] flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md after:absolute after:bottom-0 after:z-10 after:h-1/2 after:w-full after:translate-y-[200%] after:bg-gradient-to-t after:from-black after:from-5% after:to-transparent after:duration-medium hover:grayscale-0 hover:after:translate-y-0 tablet:h-[400px]"
              variant={{
                hidden: {
                  opacity: 0,
                  x: 100
                },
                enter: {
                  opacity: 1,
                  x: 0
                },
                exit: {
                  opacity: 0,
                  x: 100,
                  transition: {
                    delay: 0.3,
                    duration: 1
                  }
                }
              }}
              inverseOnExit={true}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover duration-medium group-hover:grayscale"
                fill
                placeholder="blur"
                quality={100}
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw'}
                src={spectacleimage}
              />

              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-start text-white duration-medium group-hover:translate-y-0">
                Retrouvez toutes les infos sur nos spectacles et sur la Revue Scoute : billetterie
                et dates de représentation, c'est par ici !
              </p>
            </DivWrapper>
            <DivWrapper
              variant={{
                hidden: {
                  opacity: 0,
                  y: -100
                },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    type: 'spring'
                  }
                },
                exit: {
                  y: -100,
                  opacity: 0,
                  transition: {
                    y: {
                      type: 'spring'
                    },
                    opacity: {
                      duration: 0.1,
                      delay: 0.3
                    }
                  }
                }
              }}
              inverseOnExit={true}
              className="relative -z-10"
            >
              <h2 className="heading--sub-large -z-10 translate-y-0 px-sm text-black backdrop-blur-sm duration-medium group-hover:-translate-y-[200%] laptop-large:px-md">
                SPECTACLE
              </h2>
            </DivWrapper>
          </Link>
        </section>
      </main>
      <div className="w-full border-t">
        <Footer />
      </div>
    </>
  );
}
