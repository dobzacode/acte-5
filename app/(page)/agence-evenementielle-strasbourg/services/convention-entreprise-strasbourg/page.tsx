import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl max-laptop:container max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl tablet:pt-7xl laptop:max-w-[50rem]">
      <TitleSection
        className="px-0"
        title={"CONVENTION D'ENTREPRISE"}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
          {
            href: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
            text: "Convention d'entreprise"
          }
        ]}
      ></TitleSection>
      <DivWrapper
        variant={ComingFromRightVariant}
        className="flex flex-col gap-2xl mobile-large:gap-3xl"
        tag="section"
      >
        <h2 className="sub-heading font-normal">
          Conventionnelle ou non ? Académique ou décalée ? On brise les conventions, tout en
          respectant leur raison d&apos;être. Grâce aux conventions, les entreprises fédèrent et
          rassemblent les publics, donnent l&apos;opportunité à leurs parties prenantes de partager
          un bon moment, transmettent les informations et communiquent sur les stratégies à mettre
          en place. Convivialité et sentiment d&apos;appartenance sont au rendez-vous !
        </h2>
        <Image
          className="rounded-sm"
          src={'/placeholder-image.png'}
          width={800}
          height={800}
          alt="convention-entreprise-strasbourg"
        ></Image>
        <div className="flex flex-col gap-md">
          <h3 className="heading text-primary-400">Pourquoi organiser une convention ?</h3>
          <p className="body text-pretty">
            Vous avez le besoin de transmettre un message fort à vos collaborateurs, à vos
            partenaires. Avec vous, nous définissons l&apos;ensemble des priorités de la
            manifestation. Nous imaginons un projet sur mesure dans un lieu adéquat et nous vous
            proposons, ainsi, le format le plus adapté. Votre discours est enrichi par un habillage
            inventif, une mise en scène de vos idées et de vos actions. Par le biais de supports
            variés (habillage scénique, vidéo, lumière, son, communication visuelle et graphique…)
            nous vous accompagnons dans l&apos;expression de votre message. <br />
            <br /> Un rythme est trouvé, une animation mise en place, accompagnée selon vos
            souhaits, par une série d&apos;animations ludiques ou artistiques.
          </p>
        </div>
        <div className="flex flex-col gap-md">
          <h3 className="heading text-primary-400">Vecteur de la cohésion en entreprise</h3>
          <p className="body text-pretty">
            En entrant dans l&apos;intimité de votre entreprise, de vos métiers, de vos activités,
            nous prenons le temps de comprendre vos problématiques. Notre valeur ajoutée : soutenir
            votre propos avec les arts du spectacle et le rendre accessible, compréhensible du plus
            grand nombre.
            <br />
            <br /> L&apos;objectif de la démarche vise, entre autres, à maintenir la cohésion de
            toutes les forces vives de l&apos;entreprise. Elle permet le lancement de nouvelles
            stratégies tout en donnant la possibilité aux collaborateurs d&apos;en devenir acteur.
            C&apos;est l&apos;occasion pour l&apos;entreprise et les managers de renouveler la
            confiance en leurs équipes.
          </p>
        </div>
      </DivWrapper>
    </main>
  );
}