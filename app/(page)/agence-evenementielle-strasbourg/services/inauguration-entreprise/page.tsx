import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/inauguration/inauguration.jpg';

export const metadata: Metadata = {
  title: "Inauguration d'entreprise à Strasbourg | Acte 5",
  description:
    "L'inauguration est un moment décisif qui inspire un nouvel élan pour votre entreprise. Elle fera date et portera votre marque au-delà des murs."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={"INAUGURATION D'ENTREPRISE"}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
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
          <h2 className="sub-heading font-semibold">
            Comme des oiseaux de bon augure… Longue vie… Carpe Diem…Bon vent… Bonne route… « Y a
            plus qu’à !»… C’est parti ! Autant d’expressions de vocabulaire que nous pouvons
            retrouver dans un discours inaugural pour souhaiter la réussite d'un nouveau projet.
          </h2>
          <Image
            priority={true}
            className="rounded-sm"
            src={image}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="inauguration"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              L'inauguration est un moment décisif qui inspire un nouvel élan pour votre entreprise
            </h3>
            <p className="body text-pretty">
              Elle fera date et portera votre marque au-delà des murs.{' '}
              <strong>L&apos;inauguration d&apos;un lieu nouveau</strong> est un moment particulier
              pour votre entreprise et son développement. L&apos;occasion de réunir vos clients, vos
              partenaires, ou encore vos collaborateurs et vos prestataires pour saluer votre
              réussite. C&apos;est une opération de communication qui présente vos produits, vos
              services, vos savoir-faire, votre identité.{' '}
              <strong>L&apos;inauguration est une mise en valeur de vos activités</strong> et
              l&apos;opportunité d&apos;installer une représentation positive de votre entreprise.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Nous vous accompagnons dans le choix des prestations pour votre inauguration
            </h3>
            <p className="body text-pretty">
              Concevoir les invitations, créer l&apos;identité visuelle, trouver les animations
              pertinentes, définir le filage et trouver le bon traiteur qui charmera vos invités.
              Votre événement est orchestré avec attention et soin pour asseoir votre réputation.
              <br />
              <br /> Du cocktail classique, cérémonieux, inattendu, festif à l&apos;innovation
              personnalisée, de la mise en valeur par un habillage lumière à la création d&apos;une
              vidéo (corporate, retrospective, inaugurale, de lancement), du projet le plus fou à la
              maitrise parfaite de votre budget,{' '}
              <strong>
                ACTE 5 vous propose une solution sur-mesure, qui correspond à vos besoins.
              </strong>
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes inaugurations organisées à Strasbourg en Alsace"
          categorie="Inauguration"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
