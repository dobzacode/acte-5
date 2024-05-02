import LastEvent from '@/components/event/nos-services/last-event';
import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventsQueryResponse } from '@/sanity/lib/queries';
import { groq } from 'next-sanity';
import Image from 'next/image';

export default async function Page() {
  const events = await sanityFetch<EventsQueryResponse>({
    query: groq`*[_type == "evenement" && categorie == "Cérémonie des médailles"]`,
    perspective: 'published',
    stega: false
  });

  return (
    <main className="main relative mx-auto gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl  max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
        {' '}
        <TitleSection
          className="px-0 "
          title={'CÉRÉMONIE DES MÉDAILLES'}
          element={[
            { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
            { href: '/agence-evenementielle-strasbourg/services', text: 'Nos services' },
            {
              href: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
              text: 'Cérémonie des médailles'
            }
          ]}
        ></TitleSection>
        <DivWrapper
          variant={ComingFromRightVariant}
          className="flex flex-col gap-2xl mobile-large:gap-3xl"
          tag="section"
        >
          <h2 className="sub-heading text-pretty font-normal ">
            Une cérémonie de médailles pour une entreprise en réussite, fière de son succès
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
              Une cérémonie de médailles pour une entreprise en réussite, fière de son succès
            </h3>
            <p className="body text-pretty">
              Une entreprise en réussite, fière de son succès salue aussi bien ses collaborateurs
              fidèles que ceux honorés pour une longue carrière professionnelle. Elle tient en haute
              estime ses partenaires de longue date. Cette cérémonie de médailles est le témoignage
              de la reconnaissance de l&apos;entreprise envers les acteurs de sa réussite. Réception
              au déroulé précis… sans anicroche, sans contretemps… car nous aurons pris le temps
              nécessaire pour en peaufiner les détails.
            </p>
          </div>
          <div className="flex flex-col gap-md">
            <h3 className="heading text-primary-400">
              Nous pouvons donner du sens à ce que beaucoup voient comme une simple cérémonie
              solennelle et compassée.
            </h3>
            <p className="body text-pretty">
              Nous préparons avec rigueur les moments forts qui vous tiennent à cœur. Pour un
              enchaînement parfait, il est indispensable que cela soit préparé par des
              professionnels. Une trame joliment dessinée sans dévoiler tout le travail de
              préparation, c&apos;est notre métier !
              <br />
              <br /> La cérémonie des médailles peut être agrémentée par un cocktail, par une
              animation musicale, théâtrale ou encore artistique, afin de prolonger la convivialité
              de ce moment.
            </p>
          </div>
        </DivWrapper>
      </section>
      <LastEvent
        h2="Nos précédentes cérémonies des médailles organisés à Strasbourg en Alsace"
        categorie="Cérémonie des médailles"
      ></LastEvent>
    </main>
  );
}
