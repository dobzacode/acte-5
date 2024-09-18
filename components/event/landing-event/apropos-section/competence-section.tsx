'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import evenementimage from '/public/assets/event/landing/competence/evenementiel.png';
import graphismeimage from '/public/assets/event/landing/competence/graphisme.png';
import spectacleimage from '/public/assets/event/landing/competence/spectacle.png';

const COMPETENCE = [
  {
    name: 'EVENEMENTIEL',
    category: 'evenementiel',
    src: evenementimage,
    description: "La création et l'organisation d'événements sur mesure pour les entreprises."
  },
  {
    name: "SPECTACLE D'ENTREPRISE",
    category: 'spectacle',
    src: spectacleimage,
    description:
      'La création et la production de spectacles pour le grand public et les entreprises.'
  },
  {
    name: 'GRAPHISME',
    category: 'graphisme',
    src: graphismeimage,
    description:
      "Création de visuels sur mesure pour répondre à vos besoins et maximiser l'impact de vos messages."
  }
];

const variantLeft: Variants = {
  hidden: { x: -700, opacity: 0, pointerEvents: 'none' },
  enter: {
    x: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      x: {
        duration: 0.5
      },
      opacity: {
        duration: 0.5
      },
      pointerEvents: { delay: 0.5, duration: 0 }
    }
  },
  exit: { x: 700, opacity: 0 }
};

const variantRight: Variants = {
  hidden: { x: 700, opacity: 0, pointerEvents: 'none' },
  enter: {
    x: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      x: {
        duration: 0.8,
        ease: 'easeInOut'
      },
      opacity: {
        duration: 0.8,
        ease: 'easeInOut'
      },
      pointerEvents: { delay: 0.8, duration: 0 }
    }
  },
  exit: { x: -700, opacity: 0 }
};

export default function CompetenceSection() {
  return (
    <ul className="section-px relative flex w-full flex-col gap-xl mobile-large:gap-3xl">
      {COMPETENCE.map((item, index) => {
        return (
          <InviewWrapper
            viewport={{ margin: '-200px 0px -200px 0px' }}
            tag="li"
            key={`${item.name}-${index}`}
            className="sticky top-0 h-fit max-laptop:hidden"
            variant={index % 2 === 0 ? variantLeft : variantRight}
          >
            <Link
              scroll={false}
              href={`/agence-evenementielle-strasbourg/services?categorie=${item.category}`}
              className="group relative flex h-[20vh] max-h-[300px] w-full items-start justify-between gap-3xl overflow-hidden rounded-sm p-md delay-300 duration-extra-slow hover:bg-primary-400 hover:delay-0 hover:duration-0"
            >
              <h3 className="heading--large max-laptop-large:heading--sub-large relative z-20 w-full whitespace-nowrap font-medium text-white delay-300 duration-medium group-hover:-translate-y-[150%] group-hover:delay-0">
                {item.name}
              </h3>
              <p className="heading relative z-10 w-fit translate-x-[104%] !font-[Avenir] !font-light text-white duration-medium group-hover:translate-x-0 group-hover:delay-300">
                {item.description}
              </p>
              <Image
                placeholder={'blur'}
                src={item.src ?? '/placeholder-image.png'}
                className="object-cen z-10 object-cover duration-medium group-hover:-translate-x-1/2 group-hover:rounded-r-sm group-hover:delay-300"
                fill
                alt=""
              ></Image>
              <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/70 to-transparent to-50% delay-300 duration-medium group-hover:opacity-0 group-hover:delay-0"></div>
            </Link>
          </InviewWrapper>
        );
      })}
      {COMPETENCE.map((item, index) => {
        return (
          <InviewWrapper
            tag="li"
            key={`${item.name}-mobile-${index}`}
            className="sticky top-0 w-full laptop:hidden"
            variant={index % 2 === 0 ? ComingFromLeftVariant : ComingFromRightVariant}
          >
            <Link
              scroll={false}
              href={`/agence-evenementielle-strasbourg/services?categorie=${item.category}`}
              className="card flex flex-col p-0"
            >
              <div className="group relative flex w-full items-center justify-between gap-3xl overflow-hidden rounded-sm rounded-b-none py-xl duration-extra-slow">
                <h3 className="heading--large relative z-20 w-full text-center font-medium text-white duration-medium">
                  {item.name}
                </h3>
                <Image
                  src={item.src ?? '/placeholder-image.png'}
                  className="z-10 object-cover object-top duration-medium"
                  fill
                  placeholder={'blur'}
                  alt=""
                ></Image>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/70 to-transparent to-70% delay-300 duration-medium group-hover:opacity-0 group-hover:delay-0"></div>
              </div>
              <p className="body font-Linkght relative z-10 w-fit p-md duration-medium">
                {item.description}
              </p>
            </Link>
          </InviewWrapper>
        );
      })}
    </ul>
  );
}
