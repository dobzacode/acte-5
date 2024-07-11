'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { Variants } from 'framer-motion';
import Image from 'next/image';

const COMPETENCE = [
  {
    name: 'EVENEMENTIEL',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: "SPECTACLE D'ENTREPRISE",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'GRAPHISME',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  }
];

const variantLeft: Variants = {
  hidden: { x: -700, opacity: 0 },
  enter: { x: 0, opacity: 1 }
};

const variantRight: Variants = {
  hidden: { x: 700, opacity: 0 },
  enter: { x: 0, opacity: 1 }
};

export default function CompetenceSection() {
  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  return (
    <ul className=" section-px relative flex flex-col gap-xl  mobile-large:gap-3xl ">
      {isLaptop
        ? COMPETENCE.map((item, index) => {
            return (
              <InviewWrapper
                key={`${item.name}-${index}`}
                className=" sticky top-0 cursor-pointer "
                variant={index % 2 === 0 ? variantLeft : variantRight}
              >
                <li className="group  relative flex   w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl   duration-extra-slow hover:bg-primary-400 hover:duration-0">
                  <h3 className="heading--large relative z-20 w-full font-medium text-black duration-medium group-hover:text-primary-400">
                    {item.name}
                  </h3>
                  <p className="heading relative z-10 w-fit translate-x-[104%] font-light text-white  duration-medium group-hover:translate-x-0">
                    {item.description}
                  </p>
                  <Image
                    className="z-10 duration-medium group-hover:-translate-x-1/2 group-hover:rounded-r-sm "
                    fill
                    src={'/placeholder-image.png'}
                    alt=""
                    objectFit="cover"
                  ></Image>
                </li>
              </InviewWrapper>
            );
          })
        : COMPETENCE.map((item, index) => {
            return (
              <InviewWrapper
                key={`${item.name}-mobile-${index}`}
                className=" sticky top-0 cursor-pointer"
                variant={index % 2 === 0 ? ComingFromLeftVariant : ComingFromRightVariant}
              >
                <li className="card flex flex-col gap-lg px-0 pb-sm pt-0">
                  <div className="group  relative flex   w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl duration-extra-slow ">
                    <h3 className="heading--large relative z-20 w-full text-center font-medium text-black duration-medium ">
                      {item.name}
                    </h3>
                    <Image
                      className="z-10 duration-medium  "
                      fill
                      src={'/placeholder-image.png'}
                      alt=""
                      objectFit="cover"
                    ></Image>
                  </div>
                  <p className="body relative z-10 w-fit px-sm font-light  duration-medium ">
                    {item.description}
                  </p>
                </li>
              </InviewWrapper>
            );
          })}
    </ul>
  );
}
