import LastEvent from '@/components/event/nos-services/last-event';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:container max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        <TitleSection
          className="px-0"
          title={'CÉRÉMONIE DES VŒUX'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
              text: 'Cérémonie des voeux'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-normal">
            On ne met pas tous les vœux dans le même panier. Pas un mois de janvier ne se passe sans
            LA traditionnelle cérémonie des vœux. On en profite aussi pour tirer les rois, avec la
            célèbre galette !
          </h2>
          <Image
            className="rounded-sm"
            src={'/placeholder-image.png'}
            width={800}
            height={800}
            alt="convention-entreprise-strasbourg"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">Temps fort du début d&apos;année</h3>
            <p className="body text-pretty">
              La cérémonie des vœux est cérémonie est l&apos;occasion de dresser le bilan de
              l&apos;année écoulée, de vos actions passées et de souhaiter tous vos meilleurs vœux
              aux personnes qui vous entourent pour cette nouvelle année qui démarre.
              <br />
              <br />
              Mise en scène des valeurs de votre entreprise, cette cérémonie des vœux vous permet de
              faire des annonces, de dévoiler vos actions prochaines, de fixer de nouveaux
              objectifs, de vous projeter dans l&apos;avenir. La rencontre de vos équipes, parfois
              d&apos;horizons divers, dans un environnement détendu est l&apos;occasion de les
              fédérer et de les encourager à relever des défis renouvelés.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Quelle couleur inédite donner à cette cérémonie des vœux ?
            </h3>
            <p className="body text-pretty">
              Une cérémonie de vœux ne s&apos;improvise pas et nous vous apportons notre expérience
              dans la mise en place de cette manifestation. Une couleur associée à votre entreprise,
              un moment chaleureux partagé avec ceux qui participent à la vie de votre entreprise.
              Que ce soit dans vos locaux ou dans un lieu spécialement trouvé pour l&apos;occasion,
              nous favorisons une présentation élaborée avec soin. Vous avez des idées, partagez-les
              avec nous. Une panne d&apos;inspiration ? Nous proposons, nous concevons avec vous,
              vous validez.
              <br />
              <br /> D&apos;une simple cérémonie à un événement plus spectaculaire, nous couvrons
              toute la gamme des souhaits de nos clients, soucieux de répondre à leurs attentes en
              concordance avec leur image. Une mise en lumière, une animation particulière, créer
              les invitations, dessiner un logo, nous vous offrons un large choix de prestations
              selon les tendances et les envies.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédentes cérémonies des voeux à Strasbourg en Alsace"
        categorie="Cérémonie des voeux"
      ></LastEvent>
    </main>
  );
}
