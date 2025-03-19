'use client';

import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export interface Member {
  alt: string;
  name: string;
  work: string;
  description: string;
  src: string;
}

const members: Member[] = [
  {
    alt: 'Brinbelle Chambet',
    name: 'Brinbelle CHAMBET',
    src: '/assets/event/a-propos/brinbelle_chambet.jpg',
    work: "Directrice d'agence",
    description:
      "Prendre le temps de discuter, de se poser et d'échanger pour comprendre les problématiques entreprises, c'est là, sa recette d'un événement réussi. Reine de l'expression active, c'est avec élégance et courage qu'elle est à la tête de l'équipe Acte 5 en tant que directrice depuis plus de 7 ans. Spécialiste de la conception et de l'organisation d'événement, elle met son regard acéré au service de votre événement d'entreprise. Elle vous accompagne dans la création de votre message et dans sa mise en œuvre. Vous proposer le bon mot, le bon timing, le bon habillage, le bon art, tels sont ses atouts ! Supervision des spectacles, management d'artistes et accompagnement à la mise en scène font aussi partie de ses multiples talents."
  },
  {
    alt: 'Charles-Alain Billard',
    name: 'Charles-Alain BILLARD',
    src: '/assets/event/a-propos/charles_alain_billard.jpg',
    work: 'Responsable développement commercial et chargé de production de la Revue Scoute',
    description:
      "Tel un couteau suisse aux fonctionnalités insoupçonnées, il est l'homme de toutes les situations. Préparer un événement comme un sportif qui va aux jeux olympiques, imaginer un concept de communication d'ici en y mettant de l'ailleurs, négocier férocement en toute décontraction sont quelques-unes des nombreuses cordes qu'il possède à son arc. Décrocher la lune pour mettre des étoiles dans les yeux ne lui pose pas de problème, pourvu que le client soit satisfait !"
  },
  {
    alt: 'Sophie Brobecker',
    src: '/assets/event/a-propos/sophie_brobecker.jpg',
    name: 'Sophie BROBECKER',
    work: 'Responsable administratif et financier',
    description:
      "Bosseuse acharnée, elle a le don d'être plus précise qu'un micromètre. Certes les chiffres sont maitrisés, contrôlés et passés à la moulinette, mais elle n'a pas à rougir de sa prose efficiente. Les nombres se transforment tout aussi facilement en lettres, une vraie reine et maestro des « chiffres et des lettres » pour une gestion rigoureusement efficace. Productrice infatigable qui vous suit un dossier de tellement près que cela frôle parfois le harcèlement, elle est en charge de la gestion financière et administrative de l'agence. Sophie supervise également la production de spectacles d'humour et apporte son style et son amour du décalé à la conception des événements de l'agence."
  },
  {
    alt: 'Yannique Antrope',
    name: 'Yannique ANTROPE',
    work: 'Directrice artistique',
    src: '/assets/event/a-propos/yannique_antrope.jpg',
    description:
      "C'est un peu la reine de l'Indesign pour des mises en page dynamiques et originales, de Photoshop pour rendre la vie encore plus belle et d'Illustrator pour nous offrir des dessins vectoriels puissants et précis. En plus de la création, la chaîne graphique n'a plus de secret pour elle et les imprimeurs sont devenus de véritables collègues de travail. Lectrice invétérée, elle aime manier la plume pour les projets rédactionnels. Lui confier son projet artistique c'est être certain d'obtenir le bon trait graphique et l'extrême rigueur de son œil de lynx dans la relecture !"
  },
  {
    alt: 'Alexis Koessel',
    name: 'Alexis KOESSEL',
    src: '/assets/event/a-propos/alexis_koessel.jpg',
    work: 'Chargé de projet événementiel et spectacle',
    description:
      "À la fois fan d'Excel, bricoleur hors pair, photographe et vidéaste autodidacte ou encore expert des réseaux sociaux (liste non exhaustive), ce touche-à-tout est le chargé de projet idéal pour organiser des événements réussis. Efficace aussi bien dans la création que sur le terrain, il aime rencontrer les gens et solutionner les problématiques de dernière minute. Alexis est également en charge de la production des spectacles d'Acte 5 ainsi que du développement de la communication digitale sur les réseaux sociaux pour l'agence Acte 5, la Revue Scoute et le théâtre La Scène. Savoir se mettre en quatre pour satisfaire les clients, tel est le crédo d'Alexis !"
  },
  {
    alt: 'Daniel Chambet-Ithier',
    name: 'Daniel CHAMBET-ITHIER',
    work: 'Gérant et producteur de la Revue Scoute',
    src: '/assets/event/a-propos/daniel_chambet_ithier.jpg',
    description:
      "Retraitable depuis longtemps, ce personnage peu recommandable s'accroche à son poste, tel le bigorneau sur la coque du Pen Duick. Il est le seul de l'agence à se voir beau, génial, efficace, généreux, enthousiaste, charismatique. Les autres le trouvent plutôt banal et n'osent pas lui dire. Et ils ont raison car il n'a pas tort. Daniel, en plus d'être le gérant de cette belle entreprise, supervise et met en scène la Revue Scoute chaque année."
  }
];

export default function TeamSection() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="inner-section-gap flex w-full flex-col items-center overflow-hidden overflow-x-hidden bg-primary-400 py-xl mobile-small:py-xl mobile-medium:py-2xl mobile-large:py-3xl tablet:mt-5xl tablet:py-4xl">
      <InviewWrapper
        variant={ComingFromTopVariant}
        className="section-px inner-section-gap flex flex-col items-center text-center laptop:container laptop:mx-auto"
      >
        <h2 className="heading--large text-white">Une agence pluri-indisciplinée...</h2>
        <p className="sub-heading max-w-[80ch] text-pretty text-white">
          Ne demandez pas une présentation académique de l&apos;équipe ! On s&apos;y ennuierait bien
          vite. Sachez simplement qu&apos;à eux 6, ils représentent 25 diplômes dont 2 de
          secouriste, 12 flocons, 10 étoiles, 1 flèche d&apos;argent, 1 de bronze, 4 permis B et 13
          galops. Mais voyons plutôt !
        </p>
      </InviewWrapper>

      <InviewWrapper
        viewport={{ once: true, margin: '200px 0px 200px 0px' }}
        variant={ComingFromBottomVariant}
        className="section-px w-full laptop:container laptop:mx-auto"
      >
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop-large:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="flex justify-center">
              <div
                className="card hover-flip group relative w-full cursor-pointer shadow-xl"
                onClick={() => toggleCard(index)}
              >
                <div
                  className={cn(
                    'relative aspect-[3/4] w-full transition-all duration-500',
                    flippedCards[index] ? 'rotate-y-180' : ''
                  )}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute flex h-full w-full flex-col rounded-sm"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="h-3/4 w-full">
                      <Image
                        width={400}
                        height={400}
                        className="h-full w-full rounded-sm object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={member.src}
                        alt={member.alt}
                      />
                    </div>
                    <div className="relative z-20 flex h-1/4 flex-col items-center justify-center gap-sm rounded-b-sm bg-white px-md text-center">
                      <p className="sub-heading text-ellipsis">
                        <strong>{member.name}</strong>
                      </p>
                      <p className="body text-sm">{member.work}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute z-20 flex h-full w-full flex-col items-center justify-start overflow-auto rounded-sm bg-white p-md pt-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <p className="body my-auto overflow-auto text-pretty text-center">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InviewWrapper>

      <style jsx>{`
        @media (hover: hover) {
          .group:hover div[style*='transform-style: preserve-3d'],
          .hover-flip:hover div[style*='transform-style: preserve-3d'] {
            transform: rotateY(180deg) !important;
          }
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        /* Fix transitions */
        div[style*='transform-style: preserve-3d'] {
          transition: transform 0.6s ease !important;
        }
        /* Ensure backface visibility works across browsers */
        .card div > div {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
