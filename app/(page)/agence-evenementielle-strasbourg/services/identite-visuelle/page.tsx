import LastEvent from '@/components/event/nos-services/last-event';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Création d'identité graphique à Strasbourg | Acte 5",
  description:
    "L'image, c'est ce qui donne la première impression, qui chatouille les sens et donne envie de pousser la porte pour entrer dans la boutique."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="heading--sub-extra-large px-0"
          title={'IDENTITÉ VISUELLE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/identite-visuelle',
              text: 'Identité visuelle'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-normal">
            L'image, c'est ce qui donne la première impression, qui chatouille les sens et donne
            envie de pousser la porte pour entrer dans la boutique. Une création graphique
            impactante et efficace marque les esprits et reste dans les mémoires
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
              Notre studio graphique conçoit et réalise le lifting de votre marque
            </h3>
            <p className="body text-pretty">
              Mais aussi le rafraîchissement de votre logo, la traduction visuelle de votre message,
              l'habillage de votre événement aux couleurs de votre marque ou du thème de votre
              choix.
              <br />
              <br /> Notre directrice artistique prend ensuite en charge le montage et la
              réalisation de vos supports de communication, et ce jusqu'à la livraison du produit
              fini.
              <br />
              <br />
              Affiche, kakémono, flyer, dépliant, brochure, banderole, dossier de presse, diaporama,
              vidéo, goodies, mouton à cinq pattes, menhir personnalisé, voyage dans le temps,
              rencontre du troisième type, nous saurons concrétiser avec créativité et rigueur vos
              demandes les plus incongrues !
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédents projets d'identités visuelles"
        categorie="Identité visuelle"
      ></LastEvent>
    </main>
  );
}
