import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl max-laptop:container max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl tablet:pt-7xl laptop:max-w-[50rem]">
      <TitleSection
        className="px-0"
        title={'SOIRÉE DE GALA'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
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
        <h2 className="sub-heading font-normal">
          Des chaussures de ski sur un tapis rouge, des escarpins vernis sur le sable, pieds nus sur
          une piste de danse, boire du champagne comme de l&apos;eau…
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
            Chaque année, vous envisagez un événement de prestige, à l&apos;adresse de vos
            collaborateurs, de vos partenaires, de vos clients.
          </h3>
          <p className="body text-pretty">
            Paillettes, tapis rouge, bulles de champagne. Soirée toute en sobriété si cela vous dit
            (tout est possible !). Une invitation est un privilège.
            <br />
            <br /> Pour qu&apos;elle soit particulièrement réussie, cette soirée de gala pour
            entreprise est minutieusement organisée par une équipe de professionnels. Soirée
            classique ou prestation originale, elle reflète un certain standing et offre une image
            valorisante pour ses invités. Quoiqu&apos;il en soit, elle doit marquer les esprits.
            Cette fête officielle, prestigieuse, créée la surprise dans une ambiance
            particulièrement choisie. Après avoir mis au point, avec vous, sa conception, nous
            prenons en charge la coordination générale de la soirée, du lieu, de la décoration, de
            la logistique, de l&apos;équipement, du choix des prestations, des artistes invités et,
            last but not least, de la sélection du traiteur.
          </p>
        </div>
        <div className="flex flex-col gap-md">
          <h3 className="heading text-primary-400">
            Le moment exceptionnel de votre soirée de gala d'entreprise
          </h3>
          <p className="body text-pretty">
            Le repas est le moment exceptionnel et capital de la soirée. Il doit être plein de
            raffinement et de surprises, une rencontre des saveurs dans une atmosphère inoubliable.
            Des divertissements (spectacle, animation, etc…) sont proposés dans le cadre d&apos;une
            soirée de gala mémorable. <br />
            <br />
            Mémorable ? Vous voulez en garder la trace ? Graver le souvenir ? Nous nous en occupons.
            Puisque qu&apos;on peut tout faire….
          </p>
        </div>
      </DivWrapper>
    </main>
  );
}
