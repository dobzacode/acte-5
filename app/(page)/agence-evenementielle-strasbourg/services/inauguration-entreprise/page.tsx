import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl max-laptop:container max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl tablet:pt-7xl laptop:max-w-[50rem]">
      <TitleSection
        className="px-0"
        title={"INAUGURATION D'ENTREPRISE"}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
          {
            href: '/agence-evenementielle-strasbourg/services/inauguration-entreprise',
            text: "Inauguration d'entreprise"
          }
        ]}
      ></TitleSection>
      <DivWrapper
        variant={ComingFromRightVariant}
        className="flex flex-col gap-2xl mobile-large:gap-3xl"
        tag="section"
      >
        <h2 className="sub-heading font-normal">
          Comme des oiseaux de bon augure… Longue vie… Carpe Diem…Bon vent… Bonne route… « Y a plus
          qu’à !»… C’est parti ! Autant d’expressions/vocabulaire que nous pouvons retrouver dans un
          discours inaugural pour souhaiter la réussite de ce nouveau projet.
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
            L'inauguration est un moment décisif qui inspire un nouvel élan pour votre entreprise
          </h3>
          <p className="body text-pretty">
            Elle fera date et portera votre marque au-delà des murs. L&apos;inauguration d&apos;un
            lieu nouveau, de locaux ou d&apos;un magasin est un moment particulier pour votre
            entreprise et son développement. L&apos;occasion de réunir vos clients, vos partenaires
            et vos prestataires pour saluer votre réussite. C&apos;est une opération de
            communication qui présente vos produits, vos services, vos savoir-faire, votre identité.
            L&apos;inauguration est une mise en valeur de vos activités et l&apos;opportunité
            d&apos;installer une représentation positive de votre entreprise.
          </p>
        </div>
        <div className="flex flex-col gap-md">
          <h3 className="heading text-primary-400">
            Nous vous accompagnons dans le choix de nos prestations pour votre inauguration
          </h3>
          <p className="body text-pretty">
            Concevoir les invitations, créer l&apos;identité visuelle, trouver les animations
            pertinentes, définir le filage, sélectionner le type de restauration et trouver le bon
            traiteur qui charmera vos invités. Cet événement est orchestré avec attention et soin
            pour asseoir votre réputation.
            <br />
            <br /> Du cocktail classique, cérémonieux, inattendu, festif à l&apos;innovation
            personnalisée, de la mise en valeur par un habillage lumière à la création d&apos;une
            vidéo (corporate, retrospective, inaugurale, de lancement), du projet le plus fou à la
            maitrise parfaite de votre budget, Acte 5 est le partenaire idéal pour organiser votre
            inauguration.
          </p>
        </div>
      </DivWrapper>
    </main>
  );
}