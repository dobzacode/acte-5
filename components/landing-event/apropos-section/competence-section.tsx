'use client';

import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { Variants } from 'framer-motion';
import Image from 'next/image';
import { v4 } from 'uuid';

const COMPETENCE = [
  {
    name: 'COMPETENCE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'COMPETENCE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'COMPETENCE',
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
    <ul className="max-laptop:section-px relative flex flex-col gap-xl mobile-large:gap-3xl tablet:gap-4xl laptop:gap-6xl laptop:px-2xl laptop-large:px-7xl">
      {COMPETENCE.map((item, index) => {
        return (
          <InviewWrapper
            viewport={{ once: true, margin: '-300px 0px -300px 0px' }}
            className=" sticky top-0 "
            variant={index % 2 === 0 ? variantLeft : variantRight}
          >
            {isLaptop ? (
              <li
                className="group  relative flex   w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl duration-extra-slow hover:bg-primary-50 hover:duration-0"
                key={v4()}
              >
                <h3 className="heading--large relative z-20 w-full font-medium text-black duration-medium group-hover:text-primary-400">
                  {item.name}
                </h3>
                <p className="heading relative z-10 w-fit translate-x-[104%] font-light  duration-medium group-hover:translate-x-0">
                  {item.description}
                </p>
                <Image
                  className="z-10 duration-medium group-hover:-translate-x-1/2 group-hover:rounded-r-2xl group-hover:shadow-medium"
                  fill
                  src={'/placeholder-image.png'}
                  alt=""
                  objectFit="cover"
                ></Image>
              </li>
            ) : (
              <li className="card flex flex-col gap-lg px-0 pb-sm" key={v4()}>
                <div className="group  relative flex   w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl duration-extra-slow ">
                  <h3 className="heading--large relative z-20 w-full font-medium text-black duration-medium ">
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
            )}
          </InviewWrapper>
        );
      })}
    </ul>
  );
}
