import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl max-laptop:container max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl tablet:pt-7xl laptop:max-w-[50rem]">
      <TitleSection
        className="px-0"
        title={'ANNIVERSAIRE'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
          {
            href: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
            text: 'Anniversaire'
          }
        ]}
      ></TitleSection>
      <DivWrapper
        variant={ComingFromRightVariant}
        className="flex flex-col gap-2xl mobile-large:gap-3xl"
        tag="section"
      >
        <h2 className="sub-heading font-normal">
          Oh, mais elle ne fait pas son âge, l&apos;ancienne. Centenaire vous dîtes ? Oh, celle-là
          est bien plus jeune, 10 ans c&apos;est déjà un bel âge. Un peu moins ? Beaucoup plus ?
          Elle jubile de célébrer son anniversaire…
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
            Célébrer dignement un anniversaire demande de l’anticipation, de l’envie et de
            l’imagination.
          </h3>
          <p className="body text-pretty">
            Nous prenons en charge, l&apos;ensemble de la communication (avant, pendant, après).
            <br /> Que vous ayez 10 ans ou 100 ans, vous souhaitez célébrer votre longévité, vos
            dernières réussites, insuffler un nouvel élan prêt à marquer les esprits, ou encore
            réaffirmer vos valeurs.
            <br />
            <br /> Dans un esprit classique ou mélancolique, futuriste ou préhistorique, poétique ou
            chevaleresque, nous trouvons avec vous le style qui vous sied le mieux. Humour, magie,
            réalité virtuelle, spectacle aérien, nous avons forcément ce qu&apos;il vous faut pour
            faire de votre anniversaire un moment unique et sur mesure !
          </p>
        </div>
        <div className="flex flex-col gap-md">
          <h3 className="heading text-primary-400">Organisateur d'anniversaire à Strasbourg</h3>
          <p className="body text-pretty">
            Une société connait plusieurs phases de développement, de croissance et de péripéties
            diverses. Elle grandit en cultivant sa mémoire. L’anniversaire est l’événement idéal
            pour rappeler le positionnement et l’évolution de l’entreprise au sein d’un
            environnement en mutation. L’historique de ses activités, de son évolution, les moments
            forts de son existence témoignent d’un savoir-faire capable de rassurer ses partenaires
            et de fidéliser encore plus ses collaborateurs.
            <br />
            <br /> Célébrer un anniversaire permet à l’entreprise d’immerger ses partenaires dans
            son intimité et ainsi dévoiler son âme.
          </p>
        </div>
      </DivWrapper>
    </main>
  );
}