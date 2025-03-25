import { sanityFetch } from '@/sanity/lib/fetch';
import { PARAMETRES_QUERY, ParametresQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import Flag from './flag';
import Stake from './stake';
import image1 from '/public/assets/spectacle/apropos/apropos_1.jpg';
import image2 from '/public/assets/spectacle/apropos/apropos_2.png';
import image3 from '/public/assets/spectacle/apropos/apropos_3.jpg';
import image4 from '/public/assets/spectacle/apropos/apropos_4.png';
import image5 from '/public/assets/spectacle/apropos/apropos_5.jpg';
import image6 from '/public/assets/spectacle/apropos/apropos_6.jpg';

export const TEXT_DATE = [
  {
    date: '1974',
    src: image4,
    text: "L'histoire de la Revue Scoute commence rue des Orphelins, dans le quartier emblématique de la Krutenau à Strasbourg. C'est là que quatre passionnés - Daniel Chambet Ithier, Patrick Missoffe, Murielle et Patrick Chevalier - ouvrent les portes de l'Ange d'Or, un café-théâtre qui deviendra le berceau de leur aventure artistique."
  },
  {
    date: '1979',
    src: image2,
    text: "La troupe y présente son premier spectacle, une parodie audacieuse du mouvement scout de Baden-Powell, s'inspirant notamment de la bande dessinée Hamster Jovial de Gotlib. Ce spectacle rencontre un succès retentissant et pose les bases de ce qui deviendra une longue et belle épopée."
  },
  {
    date: '1988',
    src: image3,
    text: 'La troupe déménage dans la salle du Cheval Blanc à Schiltigheim, où de nouveaux talents, comme Patricia Weller, Yvette Stahl, Christian Daniel et Christian Hahn, viennent enrichir la compagnie.'
  },
  {
    date: '1994',
    src: image1,
    text: 'La Revue Scoute trouve son foyer définitif dans la salle des fêtes de Schiltigheim, faisant de ce lieu son ancrage et un rendez-vous incontournable du paysage culturel régional.'
  },
  {
    date: '2001 et 2002',
    text: 'Les « anciens », fondateurs de la Revue Scoute, remontent sur scène dans deux spectacles de la Revue Croûtes : Bienvenue chez Guévara en 2001 et Les vieux en face des trous en 2002.'
  },
  {
    date: '2014',
    src: image5,
    text: "35 ans de rire, ça se fête ! Pour l'occasion, la Revue Scoute voit les choses en grand et s'installe au Zénith de Strasbourg avec « Party Zénithale », un spectacle unique qui a accueilli 6 000 spectateurs. Une centaine de comédiens, musiciens, danseurs et guest stars étaient réunis sur scène pour une soirée mémorable !"
  },
  {
    date: "AUJOURD'HUI",
    src: image6,
    text: "La Revue Scoute existe depuis plus de 45 ans, mais elle n'a pas pris une ride. Chaque année, de nouveaux auteurs et comédiens intègrent la troupe, pour y apporter un regard neuf, tout en restant fidèles à l'esprit frondeur qui fait la marque de fabrique de ce spectacle, devenu aujourd'hui une institution dans le paysage culturel alsacien."
  }
];

export default async function TimelapseSection() {
  const parametres = await sanityFetch<ParametresQueryResponse>({
    query: PARAMETRES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  const buttonText = parametres?.[0]?.tourneeBoutton ?? 'Découvrir la tournée 2024';

  return (
    <section className="laptop:section-px max-mobile-large:section-px relative flex w-full flex-col justify-between gap-9xl py-9xl">
      <Stake></Stake>
      {TEXT_DATE.map(({ date, text, src }, index) => (
        <Flag
          key={index}
          src={src}
          inverted={index % 2 !== 0}
          date={date}
          text={text}
          button={date === "AUJOURD'HUI" ? buttonText : undefined}
        />
      ))}
    </section>
  );
}
