import Flag from './flag';
import Stake from './stake';
import image1 from '/public/assets/spectacle/apropos/apropos_1.jpg';
import image2 from '/public/assets/spectacle/apropos/apropos_2.png';
import image3 from '/public/assets/spectacle/apropos/apropos_3.jpg';

export const TEXT_DATE = [
  {
    date: 'XXXX',
    src: image1,
    text: "L'histoire d'Acte 5 commence rue des Orphelins, dans le quartier emblématique de la Krutenau à Strasbourg. C'est là que quatre passionnés - Daniel Chambet Ithier, Patrick Missoffe, Muriel et Patrick Chevalier - ouvrent les portes de l'Ange d'Or, un café-théâtre qui deviendra le berceau de leur aventure artistique."
  },
  {
    date: '1979',
    src: image2,
    text: "La troupe y présente son premier spectacle, une parodie audacieuse du mouvement scout de Baden-Powell, s'inspirant notamment de la bande dessinée Hamster Jovial de Gotlib. Ce spectacle rencontre un succès retentissant et pose les bases de ce qui deviendra une longue et belle épopée."
  },
  {
    date: '1988',
    src: image3,
    text: 'La troupe déménage dans la salle du Cheval Blanc à Schiltigheim, où de nouveaux talents, comme Christian Daniel et Christian Hahn, viennent enrichir la compagnie.'
  },
  {
    date: '1994',
    src: image3,
    text: 'Acte 5 trouve son foyer définitif dans la salle des fêtes de Schiltigheim, affirmant ainsi sa place dans le paysage culturel local.'
  }
];

export default function TimelapseSection() {
  return (
    <section className="laptop:section-px max-mobile-large:section-px relative flex w-full flex-col justify-between gap-9xl py-9xl">
      <Stake></Stake>
      {TEXT_DATE.map(({ date, text, src }, index) => (
        <Flag src={src} key={index} inverted={index % 2 !== 0} date={date} text={text}></Flag>
      ))}
    </section>
  );
}
