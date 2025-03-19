import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import LastEventSkeleton from '@/components/skeleton/last-event-skeleton';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import image from '/public/assets/event/services/anniversaire/anniversaire.jpg';
export const metadata: Metadata = {
  title: "Organisateur d'Anniversaire pour entreprise à Strasbourg | Acte 5",
  description:
    "Célébrer un anniversaire permet à l'entreprise d'immerger ses partenaires dans son intimité et ainsi de dévoiler son âme."
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'ANNIVERSAIRE'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Événement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
              text: "Anniversaire d'entreprise"
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Oh, mais elle ne fait pas son âge, l&apos;ancienne. Centenaire vous dites ? Oh, celle-là
            est bien plus jeune, 10 ans c&apos;est déjà un bel âge. Un peu moins ? Beaucoup plus ?
            Elle jubile de célébrer son anniversaire…
          </h2>
          <Image
            priority={true}
            className="rounded-sm"
            src={image}
            sizes={'(max-width: 640px) 100vw, (min-width: 640px) 80vw'}
            width={800}
            height={800}
            alt="anniversaire"
          ></Image>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Célébrer dignement un anniversaire demande de l’anticipation, de l’envie et de
              l’imagination.
            </h3>
            <p className="body text-pretty">
              Nous prenons en charge l&apos;ensemble de la communication (avant, pendant, après).
              <br /> Que vous ayez 10 ans ou 100 ans, vous souhaitez célébrer votre longévité, vos
              dernières réussites, insuffler un nouvel élan prêt à marquer les esprits, ou encore
              réaffirmer vos valeurs.
              <br />
              <br /> Dans un esprit classique ou mélancolique, futuriste ou préhistorique, poétique
              ou chevaleresque, nous trouvons avec vous le style qui vous sied le mieux. Humour,
              magie, réalité virtuelle, spectacle aérien, nous avons forcément ce qu&apos;il vous
              faut pour faire de{' '}
              <strong>votre anniversaire un moment unique et inoubliable !</strong>
            </p>
          </div>
          
        </DivWrapper>
      </section>
      <Suspense fallback={<LastEventSkeleton />}>
        <LastEvent
          h2="Nos précédents anniversaires d'entreprises organisés à Strasbourg en Alsace"
          categorie="Anniversaire"
        ></LastEvent>
      </Suspense>
    </main>
  );
}
