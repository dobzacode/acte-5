import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Spectacles d'entreprises à Strasbourg | Acte 5",
  description:
    "Depuis plus de 30 ans la spécificité d'Acte 5 est d'écrire des saynètes et des sketches sur mesure pour votre spectacle d'entreprise."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={"SPECTACLE D'ENTREPRISE"}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/spectacle-entreprise',
              text: "Spectacle d'entreprise"
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <Image
            className="rounded-sm"
            src={'/assets/event/services/spectacle/spectacle.jpg'}
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="Spectacle d'entreprise"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Depuis plus de 30 ans la spécificité d’Acte 5 est d’écrire des saynètes pour les
              entreprises.
            </h3>
            <p className="body text-pretty">
              Par exemple, lors d’une convention, vous souhaitez faire passer des messages ou
              illustrer une problématique à vos parties prenantes, Acte 5 écrit pour vous des
              sketches sur mesure, intimement liés à votre sujet. La mise en scène de ces messages
              s’adapte à votre événement. Cette écriture spécifique est un réel outil qui favorise
              la prise de conscience.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédents spectacles d'entreprises organisés à Strasbourg et en Alsace"
        categorie="Spectacle d'entreprise"
      ></LastEvent>
    </main>
  );
}
