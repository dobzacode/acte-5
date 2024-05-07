import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Stratégie de communication à Strasbourg | Acte 5',
  description:
    'Vous avez des informations à transmettre, beaucoup de choses à dire, mais vous ne savez pas par quel bout commencer ? Acte 5 met son expertise et son savoir-faire au service de votre communication.'
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'STRATÉGIE DE COMMUNICATION'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/strategie-communication',
              text: 'Stratégie de communication'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-normal">
            Vous avez des informations à transmettre, beaucoup de choses à dire, mais vous ne savez
            pas par quel bout commencer et où vous voulez en venir ? Acte 5 met son expertise et son
            savoir-faire au service de votre communication.
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
              Pour atteindre son objectif, un message doit être clair, impactant, acheminé par les
              bons canaux de communication et viser la bonne cible.
            </h3>
            <p className="body text-pretty">
              On n'utilise pas le même langage pour pour challenger une équipe de cadres dynamiques
              que pour animer un rassemblement de jeunes pas encore actifs ! L'équipe Acte 5
              conseille et accompagne les entreprises dans leur stratégie de communication, interne
              comme externe, en déployant un large éventail d'outils.
              <br /> Sondage, plan média, stratégie de discours, définition d'axes de communication,
              conception, rédactionnel, veille concurrentielle, réflexion participative, nous
              définissons ensemble la formule qui convient le mieux à vos problématiques afin de
              diffuser vos messages avec force et conviction.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédents projets de stratégie de communication"
        categorie="Stratégie de communication"
      ></LastEvent>
    </main>
  );
}
