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
      <main className="inner-section-gap section-px flex  h-full flex-col items-center  justify-between pb-5xl pt-5xl tablet:pt-6xl">
        <DivWrapper
          className="inner-section-gap flex  w-2/3 flex-col items-center"
          variant={ComingFromTopVariant}
        >
          <p className="heading--sub-extra-large text-primary-400">Slogan</p>
          <p className="heading max-w-[35ch] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt
            ut labore et dolore magna
          </p>
        </DivWrapper>
        <section className="inner-section-gap  container flex justify-between max-tablet:flex-col   laptop:justify-center   laptop-large:max-w-[1200px] ">
          <Link href="agence-evenementielle-strasbourg">
            <DivWrapper
              className="heading--sub-large flex w-fit flex-col items-center gap-md rounded-md bg-default-200 px-xl py-3xl tablet:px-2xl tablet:py-5xl"
              variant={ComingFromLeftVariant}
            >
              <h2>EVENEMENTIEL</h2>
              <p className="sub-heading  text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor
                incididunt ut labore et dolore magna{' '}
              </p>
            </DivWrapper>
          </Link>
          <Link href="spectacles-strasbourg">
            <DivWrapper
              className="heading--sub-large flex w-fit flex-col items-center gap-md rounded-md bg-default-200 px-xl py-3xl tablet:px-2xl tablet:py-5xl"
              variant={ComingFromRightVariant}
            >
              <h2>SPECTACLE</h2>
              <p className="sub-heading  text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor
                incididunt ut labore et dolore magna{' '}
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
