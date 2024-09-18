import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';

import Footer from '@/components/ui/footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import eventimage from '/public/assets/landing/event.jpg';
import spectacleimage from '/public/assets/landing/spectacle.webp';

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
              className="relative flex h-[300px] flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md after:absolute after:bottom-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:from-5% after:to-transparent after:opacity-0 after:duration-medium hover:grayscale-0 hover:after:opacity-100 tablet:h-[400px]"
              variant={ComingFromLeftVariant}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover"
                fill
                placeholder="blur"
                quality={100}
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw'}
                src={eventimage}
              />

              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-start text-white duration-medium group-hover:translate-y-0">
                Des événements sur mesure pour sublimer vos projets et renformer l&apos;image de
                votre entreprise.
              </p>
            </DivWrapper>
            <h2 className="heading--sub-large -z-10 translate-y-0 px-sm text-black backdrop-blur-sm duration-medium group-hover:-translate-y-[200%] laptop-large:px-md">
              EVENEMENTIEL
            </h2>
          </Link>
          <Link
            scroll={false}
            className="group flex h-fit w-fit flex-col gap-xs tablet:w-1/2"
            href="spectacles-strasbourg"
          >
            <DivWrapper
              className="relative flex h-[300px] flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md after:absolute after:bottom-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/40 after:from-5% after:to-transparent after:opacity-0 after:duration-medium hover:grayscale-0 hover:after:opacity-100 tablet:h-[400px]"
              variant={ComingFromRightVariant}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover"
                fill
                placeholder="blur"
                quality={100}
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw'}
                src={spectacleimage}
              />

              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-start text-white duration-medium group-hover:translate-y-0">
                Retrouvez toutes les infos sur nos spectacles tel que la Revue Scoute : billetterie
                et date de représentation, c'est par ici !
              </p>
            </DivWrapper>
            <h2 className="heading--sub-large -z-10 translate-y-0 px-sm text-black backdrop-blur-sm duration-medium group-hover:-translate-y-[200%] laptop-large:px-md">
              SPECTACLE
            </h2>
          </Link>
        </section>
      </main>
      <div className="w-full border-t">
        <Footer />
      </div>
    </>
  );
}
