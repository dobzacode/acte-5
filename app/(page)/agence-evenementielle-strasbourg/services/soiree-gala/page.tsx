import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/gala/gala.jpg';

export const metadata: Metadata = {
  title: 'Organisation de soirée de Gala à Strasbourg | Acte 5',
  description:
    "Vous envisagez un événement de prestige, à l'adresse de vos collaborateurs, de vos partenaires, de vos clients."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'SOIRÉE DE GALA'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/soiree-gala',
              text: 'Soirée de gala'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Des chaussures de ski sur un tapis rouge, des escarpins vernis sur le sable, pieds nus
            sur une piste de danse, boire du champagne comme de l&apos;eau…
          </h2>
          <Image
            priority={true}
            placeholder="blur"
            className="rounded-sm"
            src={image}
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="Soirée de gala"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Vous envisagez un événement de prestige, à l&apos;adresse de vos collaborateurs, de
              vos partenaires, de vos clients.
            </h3>
            <p className="body text-pretty">
              Paillettes, tapis rouge, bulles de champagne. Soirée toute en sobriété si cela vous
              dit (tout est possible !). Une invitation est un privilège.
              <br />
              <br /> Pour qu&apos;elle soit particulièrement réussie, cette
              <strong> soirée de gala pour entreprise</strong> est minutieusement organisée par une
              équipe de professionnels. Soirée classique ou prestation originale, elle reflète un
              certain standing et offre une image valorisante. Quoiqu&apos;il en soit, elle doit
              marquer les esprits. Cette fête officielle, prestigieuse, crée la surprise dans une
              ambiance particulièrement choisie. Après avoir mis au point sa concenption avec vous,
              nous prenons en charge la coordination générale de la soirée, du lieu, de la
              décoration, de la logistique, de l&apos;équipement, du choix des prestations, des
              artistes invités et, last but not least, de la sélection du traiteur.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Le moment exceptionnel de votre soirée de gala d'entreprise
            </h3>
            <p className="body text-pretty">
              Le repas est le moment exceptionnel et capital de la soirée. Il doit être plein de
              raffinement et de surprises, une rencontre des saveurs dans une atmosphère
              inoubliable. Des divertissements (spectacle, animation, etc…) sont proposés dans le
              cadre d&apos;une soirée de gala mémorable. <br />
              <br />
              Mémorable ? Vous voulez en garder la trace ? Graver le souvenir ? Nous nous en
              occupons. Puisque qu&apos;on peut tout faire: Photobooth, reportage photo, livre ou
              encore vidéo souvenir.
            </p>
          </div>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédentes soirées de gala pour entreprises organisées à Strasbourg et en Alsace"
          categorie="Soirée de gala"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
