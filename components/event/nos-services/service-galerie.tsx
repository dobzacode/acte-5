'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export const SERVICES = [
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
  },
  {
    href: '/agence-evenementielle-strasbourg/services/strategie-communication',
    text: 'Stratégie de communication',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/identite-visuelle',
    text: 'Identité visuelle',
    src: '/placeholder-image.png'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/video-entreprise',
    text: "Vidéo d'entreprise",
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
                className=" group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm border border-black/10 bg-white shadow-md duration-medium   hover:scale-110 hover:rounded-t-sm hover:shadow-xl hover:before:max-w-full "
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
                <Link
                  className=" relative z-40 flex h-full w-full flex-col-reverse after:absolute  after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/50 after:to-transparent"
                  href={service.href}
                >
                  <motion.h3
                    className={`sub-heading before-bg relative z-50 text-pretty px-md text-white duration-slow     hover:duration-fast`}
                    initial={{ opacity: 0, y: 300, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
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
                    exit={{ opacity: 0, y: 300 }}
                  >
                    {service.text}
                  </motion.h3>

                  <Image
                    fill
                    sizes={'(min-width: 1024px) 50vw, 100vw'}
                    className={` object-cover duration-medium`}
                    src={service.src}
                    alt={`${service}`}
                  ></Image>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
