import { Variants } from 'framer-motion';
import Image from 'next/image';
import InviewWrapper from '../framer-motion/inview-wrapper';
import UiButton from '../ui/ui-button';

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

export default function AproposSection() {
  return (
    <section className="flex flex-col items-center gap-7xl px-4xl pb-5xl ">
      <ul className="container flex flex-col gap-2xl ">
        {COMPETENCE.map((item, index) => {
          return (
            <InviewWrapper
              viewport={{ once: true }}
              variant={index % 2 === 0 ? variantLeft : variantRight}
            >
              <li
                className="group  relative flex    w-full items-center justify-between gap-3xl overflow-hidden rounded-sm px-2xl py-xl duration-extra-slow hover:bg-primary-50 hover:duration-0"
                key={item.name}
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
            </InviewWrapper>
          );
        })}
      </ul>
      <div className="flex flex-col items-center gap-2xl">
        <p className="heading--sub-extra-large">Toujours pas convaincu ?</p>
        <UiButton size="lg" className=" w-fit " variant="solid" color="pastelPrimary">
          NON, JE SOUHAITE EN SAVOIR PLUS
        </UiButton>
      </div>
    </section>
  );
}
