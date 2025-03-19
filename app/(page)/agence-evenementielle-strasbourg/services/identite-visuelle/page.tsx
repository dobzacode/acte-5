import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/identite/identite.jpg';

export const metadata: Metadata = {
  title: "Création d'identité graphique à Strasbourg | Acte 5",
  description:
    "L'image, c'est ce qui donne la première impression, les sens et crée l'envie de pousser la porte pour entrer dans la boutique."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'IDENTITÉ VISUELLE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
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
          <h2 className="sub-heading font-semibold">
            L'image, c'est ce qui donne la première impression, les sens et crée l'envie de pousser
            la porte pour entrer dans la boutique. Une création graphique impactante et efficace
            marque les esprits et reste dans les mémoires
          </h2>
          <Image
            priority={true}
            className="rounded-sm"
            src={image}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="Identité visuelle"
          ></Image>

          <p className="body text-pretty">
            Notre studio graphique réalise le lifting de votre logo, la traduction visuelle de votre
            message, l'habillage de votre événement aux couleurs de votre marque.
            <br />
            <br /> Tout d'abord, faisons connaisance ! Pour concevoir une image qui vous corresponde
            à la perfection, notre premier travail est de comprendre en profondeur l'univers de
            votre entreprise, ses atouts et ses challenges.
            <br /> Nous vous proposons ensuite des pistes créatives qui sont affinées jusqu'à
            aboutir à une charte graphique complète et parfaitement déclinable sur tous vos supports
            de communication.
          </p>
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédents projets d'identités visuelles"
          categorie="Identité visuelle"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
