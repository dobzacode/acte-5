import LastEventVideo from '@/components/event/nos-services/last-event-video';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Réalisation de vidéos d'entreprises | Acte 5",
  description:
    "Nous conceptualisons et réalisons vos vidéos d'entreprise sur mesure. Clip promotionnel, de remerciement, web-série, film institutionnel, ..."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={"VIDEO D'ENTREPRISE"}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/video-entreprise',
              text: "Vidéo d'entreprise"
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-normal">
            Nous conceptualisons et réalisons vos vidéos d'entreprise sur mesure
          </h2>
          <Image
            className="rounded-sm"
            src={'/placeholder-image.png'}
            width={800}
            height={800}
            alt="convention-entreprise-strasbourg"
          ></Image>
          <div className="flex flex-col gap-md">
            <p className="body text-pretty">
              Support numérique par excellence, la vidéo d'entreprise est un réel atout pour
              communiquer sur l'image, les valeurs, ou encore la stratégie.
              <br />
              <br /> Clip promotionnel, de remerciement ou pour les vœux, web-série, film
              institutionnel sont autant de réalisations que l'on peut développer avec l'outil
              vidéo.
              <br />
              <br />
              Acte 5 vous concocte un scénario sur mesure, car votre projet ne ressemble jamais au
              projet d'un autre. Le « plus » Acte 5 : nos comédiens donnent vie à votre histoire en
              y ajoutant la touche d'humour qui fait la différence.
              <br />
              <br />
              Notre équipe de tournage audiovisuel intervient en Alsace et dans le Grand-Est.
              <br />
              <br />À votre écoute pour créer ensemble votre projet vidéo.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEventVideo
        h2="Nos précédentes créations de vidéo d'entreprise"
        categorie="Vidéo d'entreprise"
      ></LastEventVideo>
    </main>
  );
}
