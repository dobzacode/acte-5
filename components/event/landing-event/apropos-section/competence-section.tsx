'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import evenementimage from '/public/assets/event/landing/competence/evenementiel.png';
import spectacleimage from '/public/assets/event/landing/competence/spectacle.png';
import placeholder from '/public/placeholder-image.png';

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
    src: placeholder,
    description:
      'La communication visuelle habille nos événements et nos spectacles, mais pas seulement...'
  }
];

const variantLeft: Variants = {
  hidden: { x: -700, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 700, opacity: 0 }
};

const variantRight: Variants = {
  hidden: { x: 700, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: -700, opacity: 0 }
};

export default function CompetenceSection() {
  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  return (
    <ul className="section-px relative flex flex-col gap-xl mobile-large:gap-3xl">
      {isLaptop
        ? COMPETENCE.map((item, index) => {
            return (
              <InviewWrapper
                tag="li"
                key={`${item.name}-${index}`}
                className="sticky top-0"
                variant={index % 2 === 0 ? variantLeft : variantRight}
              >
                <Link
                  scroll={false}
                  href={`/agence-evenementielle-strasbourg/services?categorie=${item.category}`}
                  className="group relative flex w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl duration-extra-slow hover:bg-primary-400 hover:duration-0"
                >
                  <h3 className="heading--large max-laptop-large:heading--sub-large relative z-20 w-full font-medium text-white duration-medium group-hover:text-primary-400">
                    {item.name}
                  </h3>
                  <p className="heading relative z-10 w-fit translate-x-[104%] !font-[Avenir] !font-light text-white duration-medium group-hover:translate-x-0">
                    {item.description}
                  </p>
                  <Image
                    placeholder={'blur'}
                    src={item.src ?? '/placeholder-image.png'}
                    className="z-10 object-cover object-top duration-medium group-hover:-translate-x-1/2 group-hover:rounded-r-sm"
                    fill
                    alt=""
                  ></Image>
                </Link>
              </InviewWrapper>
            );
          })
        : COMPETENCE.map((item, index) => {
            return (
              <InviewWrapper
                tag="li"
                key={`${item.name}-mobile-${index}`}
                className="sticky top-0"
                variant={index % 2 === 0 ? ComingFromLeftVariant : ComingFromRightVariant}
              >
                <Link
                  scroll={false}
                  href={`/agence-evenementielle-strasbourg/services?categorie=${item.category}`}
                  className="card flex flex-col p-0"
                >
                  <div className="group relative flex w-full items-center justify-between gap-3xl overflow-hidden rounded-sm rounded-b-none px-2xl py-xl duration-extra-slow">
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
