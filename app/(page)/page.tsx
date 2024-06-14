import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import Footer from '@/components/ui/footer/footer';
import FooterContent from '@/components/ui/footer/footer-content';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acte 5 | Agence de Communication Événementielle à Strasbourg',
  description:
    'Acte 5 vous accompagne dans vos projets événementiels, spectacles et communication depuis notre agence à Strasbourg.'
};

export default function Home() {
  return (
    <>
      <main className="section-px flex h-full  flex-col items-center justify-between gap-xl pb-5xl  pt-5xl tablet:gap-xl tablet:pt-6xl laptop:gap-3xl">
        <DivWrapper
          className="inner-section-gap flex  w-2/3 flex-col items-center"
          variant={ComingFromTopVariant}
        >
          <p className="heading--sub-extra-large text-center text-primary-400">
            Agence de communication évènementielle spectaculaire
          </p>
        </DivWrapper>
        <section className="inner-section-gap  container flex justify-between max-tablet:flex-col   laptop:justify-center   laptop-large:max-w-[1200px] ">
          <Link
            scroll={false}
            className="w-fit tablet:w-1/2"
            href="agence-evenementielle-strasbourg"
          >
            <DivWrapper
              className="heading--sub-large flex   flex-col items-center gap-md rounded-md bg-default-200 px-xl py-3xl tablet:h-[400px] tablet:px-2xl tablet:py-5xl"
              variant={ComingFromLeftVariant}
            >
              <h2>EVENEMENTIEL</h2>
              <p className="sub-heading  text-pretty text-center">
                Des événements sur mesure pour sublimer vos projets et renforcer l&apos;image de
                votre entreprise.
              </p>
            </DivWrapper>
          </Link>
          <Link scroll={false} className="w-fit tablet:w-1/2" href="spectacles-strasbourg">
            <DivWrapper
              className="heading--sub-large flex   flex-col items-center gap-md rounded-md bg-default-200 px-xl py-3xl tablet:h-[400px] tablet:px-2xl tablet:py-5xl"
              variant={ComingFromRightVariant}
            >
              <h2>SPECTACLE</h2>
              <p className="sub-heading  text-pretty text-center">
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
