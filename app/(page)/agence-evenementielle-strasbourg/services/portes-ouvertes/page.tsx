import LastEvent from '@/components/event/nos-services/last-event';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          title={'PORTES OUVERTES'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
              text: 'Portes ouvertes'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-normal">
            Ouvrir les portes pour permettre la découverte de son activité reste un moment crucial
            dans la vie de l&apos;entreprise. Découvrir, rencontrer, être émerveiller, voici ce
            qu&apos;on souhaite transmettre à ceux qui vous rendent visite…
          </h2>
          <Image
            className="rounded-sm"
            src={'/placeholder-image.png'}
            width={800}
            height={800}
            alt="convention-entreprise-strasbourg"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Une journée « Portes Ouvertes » est un acte fort de communication
            </h3>
            <p className="body text-pretty">
              C&apos;est aussi un vecteur important de l&apos;image que véhicule l&apos;entreprise.
              L&apos;entreprise éprouve le besoin de mieux se faire connaître de ses partenaires, de
              la presse, du grand public, de tous ceux intéressés par ses activités ou ses produits.
              <br />
              <br /> Cette journée doit être préparée avec minutie, chaque détail compte, on met les
              petits plats dans les grands. Une présentation haute en couleur ou une ambiance plus
              feutrée selon vos goûts laissera, à vos visiteurs, une impression forte évoluant dans
              un univers harmonieux, festif, ou encore inattendu. A chaque étape nous sommes
              présents pour assurer l&apos;ordonnancement optimal de l&apos;événement. Bref, un
              déroulé sans fausse note.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Des portes ouvertes avec des sketches joués par des comédiens ? Des musiciens ? Des
              acrobates ? Des magiciens ?
            </h3>
            <p className="body text-pretty">
              Nous les avons sous la main et ils apportent le divertissement que vous recherchez.
              Désolé, nous ne faisons pas les animaux sauvages (quoi que… ). Imaginer un décor pour
              la circonstance, l&apos;accompagner de vidéo et de musique, l&apos;habiller de
              lumière… Nous répondons à toutes vos envies. Votre espace devient un lieu de
              découverte, les participants et les invités évoluent dans un cadre accueillant,
              propice à l&apos;exploration.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédentes organisations de portes ouvertes à Strasbourg et en Alsace"
        categorie="Portes ouvertes"
      ></LastEvent>
    </main>
  );
}
