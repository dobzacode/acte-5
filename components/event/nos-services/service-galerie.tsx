'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const SERVICES = [
  {
    href: '/agence-evenementielle-strasbourg/services/inauguration-entreprise',
    text: 'Inauguration',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
    text: 'Convention',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
    text: 'Anniversaire',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
    text: 'Cérémonie des médailles',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
    text: 'Cérémonie des vœux',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
    text: 'Portes ouvertes',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/soiree-gala',
    text: 'Soirée de Gala',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-entreprise',
    text: "Spectacle d'entreprise",
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/team-building',
    text: 'Team building',
    src: '/placeholder-image.png'
  }
];

export default function ServiceGalerie({}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px', once: true });

  return (
    <section ref={ref} className=" section-px min-h-screen w-full laptop:container laptop:mx-auto">
      {isInView && (
        <ul className=" grid grid-cols-2  justify-center gap-x-sm gap-y-md  mobile-large:grid-cols-3 mobile-large:gap-x-lg mobile-large:gap-y-xl tablet:gap-y-2xl ">
          {SERVICES.map((service, index) => {
            return (
              <motion.li
                className=" group relative  h-full w-full overflow-hidden rounded-b-sm rounded-t-sm border border-black/10 bg-white shadow-md duration-medium before:absolute before:left-0 before:top-0 before:h-full before:w-full before:max-w-0 before:bg-primary-400 before:duration-medium  hover:scale-110 hover:rounded-t-sm hover:shadow-xl hover:before:max-w-full "
                initial={{ opacity: 0, y: -300, pointerEvents: 'none' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  pointerEvents: 'auto',
                  transition: {
                    opacity: { duration: 0.2, delay: index * 0.3 },
                    pointerEvents: { delay: index * 0.3 },
                    y: { duration: 0.3, delay: index * 0.3 }
                  }
                }}
                exit={{ opacity: 0, y: -300 }}
                style={{ zIndex: 30 - index }}
              >
                <Link className=" flex flex-col-reverse" href={service.href}>
                  <motion.h3
                    className={`sub-heading before-bg relative  text-pretty px-md duration-slow hover:duration-fast   group-hover:text-white `}
                    initial={{ opacity: 0, y: -300, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      maxHeight: 100,
                      transition: {
                        opacity: { duration: 0.1, delay: index * 0.3 + 0.3 },
                        maxHeight: { duration: 0.2, delay: index * 0.3 + 0.3 },
                        paddingTop: { duration: 0.2, delay: index * 0.3 + 0.3 },
                        paddingBottom: { duration: 0.2, delay: index * 0.3 + 0.3 },
                        y: { duration: 0.2, delay: index * 0.3 + 0.3 }
                      }
                    }}
                    exit={{ opacity: 0, y: -300 }}
                  >
                    {service.text}
                  </motion.h3>
                  <div className="relative aspect-square  overflow-hidden rounded-b-none">
                    <Image
                      fill
                      className={` object-cover duration-medium`}
                      src={service.src}
                      alt={`${service}`}
                    ></Image>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
