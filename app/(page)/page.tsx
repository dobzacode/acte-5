import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import Footer from '@/components/ui/footer/footer';
import FooterContent from '@/components/ui/footer/footer-content';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import eventimage from '/public/assets/landing/event.jpg';
import spectacleimage from '/public/assets/landing/spectacle.png';

export const metadata: Metadata = {
  title: 'Acte 5 | Agence de Communication Événementielle à Strasbourg',
  description:
    'Acte 5 vous accompagne dans vos projets événementiels, spectacles et communication depuis notre agence à Strasbourg.'
};

export default function Home() {
  return (
    <>
      <main className="section-px mx-auto flex h-full flex-col items-center justify-between gap-xl pb-3xl pt-5xl laptop:container tablet:gap-xl tablet:py-6xl laptop:gap-3xl laptop:py-6xl laptop-large:py-7xl [&>section:last-child]:pb-0">
        <DivWrapper
          className="inner-section-gap flex flex-col items-center"
          variant={ComingFromTopVariant}
        >
          <h1 className="heading--sub-extra-large text-pretty text-center text-primary-400">
            agence de communication événementielle spectaculaire
          </h1>
        </DivWrapper>
        <section className="inner-section-gap container flex max-w-[1200px] justify-between max-tablet:flex-col laptop:justify-center">
          <Link
            scroll={false}
            className="w-fit tablet:w-1/2"
            href="agence-evenementielle-strasbourg"
          >
            <DivWrapper
              className="group relative flex flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md grayscale duration-medium after:absolute after:bottom-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:from-5% after:to-transparent after:opacity-0 after:duration-medium hover:grayscale-0 hover:after:opacity-100 tablet:h-[400px]"
              variant={ComingFromLeftVariant}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover"
                fill
                placeholder="blur"
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                src={eventimage}
              />
              <h2 className="heading--sub-large absolute top-1/2 z-20 -translate-y-1/2 px-md py-sm font-normal text-white backdrop-blur-sm duration-medium after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-xs after:bg-black after:opacity-20">
                EVENEMENTIEL
              </h2>
              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-center text-white duration-medium group-hover:translate-y-0">
                Des événements sur mesure pour sublimer vos projets et renformer l&apos;image de
                votre entreprise.
              </p>
            </DivWrapper>
          </Link>
          <Link scroll={false} className="w-fit tablet:w-1/2" href="spectacles-strasbourg">
            <DivWrapper
              className="group relative flex flex-col items-center justify-center gap-md overflow-hidden rounded-sm p-md grayscale duration-medium after:absolute after:bottom-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:from-5% after:to-transparent after:opacity-0 after:duration-medium hover:grayscale-0 hover:after:opacity-100 tablet:h-[400px]"
              variant={ComingFromRightVariant}
            >
              <Image
                alt="Photo de spectacle"
                className="rounded-sm object-cover"
                fill
                placeholder="blur"
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                src={spectacleimage}
              />
              <h2 className="heading--sub-large absolute top-1/2 z-20 -translate-y-1/2 px-md py-sm font-normal text-white backdrop-blur-sm duration-medium after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-xs after:bg-black after:opacity-20">
                SPECTACLE
              </h2>
              <p className="sub-heading relative z-20 mt-auto translate-y-[200%] self-end text-pretty text-center text-white duration-medium group-hover:translate-y-0">
                Retrouvez toutes les infos sur nos spectacles tel que la Revue Scoute : billetterie
                et date de représentation, c&apos;est par ici !{' '}
              </p>
            </DivWrapper>
          </Link>
        </section>
      </main>
      <Footer>
        <FooterContent></FooterContent>
      </Footer>
    </>
  );
}
