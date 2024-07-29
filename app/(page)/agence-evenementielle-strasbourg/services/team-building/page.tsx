import LastEvent from '@/components/event/nos-services/last-event-image';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Organisateur de Team Building à Strasbourg | Acte 5',
  description:
    'Quitter son bureau, se couper de son téléphone, ne pas lire ses mails, lâcher prise le temps d’un instant pour se retrouver avec soi-même dans le but de servir le groupe.'
};

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={'TEAM BUILDING'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/team-building',
              text: 'Team building'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading font-semibold">
            Quitter son bureau, se couper de son téléphone, ne pas lire ses mails, lâcher prise le
            temps d&apos;un instant pour se retrouver avec soi-même dans le but de servir le groupe.
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
              Nous imaginons des animations innovantes permettant de resserrer les liens entre vos
              collaborateurs.
            </h3>
            <p className="body text-pretty">
              Nous créerons pour vous la jungle urbaine, la lande désolée, la forêt hantée. Vous en
              avez assez de grimper aux arbres, nous vous offrons le lancer de haches. Les caisses
              sont vides, vous recherchez la chasse au trésor qui ne mène nulle part ? Vous
              l&apos;avez trouvée. Un défi culinaire sans intoxication alimentaire ? Les fourneaux
              vous attendent. Des incentives insensées incendiées ?
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Pour un jour ou deux, trouvez un rythme de travail différent pour vos collaborateurs.
            </h3>
            <p className="body text-pretty">
              <strong>Brisez le cadre quotidien de leurs activités</strong> et offrez une nouvelle
              perspective au collectif…. Vos équipes s&apos;entraident et s&apos;épanouissent dans
              des projets ludiques, sportifs, créatifs qui les amènent à trouver une nouvelle
              cohésion… source d&apos;une motivation renouvelée. Chaque compétence individuelle est
              sollicitée, elle apporte à l&apos;ensemble, en interaction avec les autres… un
              renforcement de ses possibilités, un nouveau potentiel à exploiter. Les forces
              conjointes forgeront une nouvelle unité des acteurs de votre société.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédents team building organisés à Strasbourg et en Alsace"
        categorie="Team Building"
      ></LastEvent>
    </main>
  );
}
