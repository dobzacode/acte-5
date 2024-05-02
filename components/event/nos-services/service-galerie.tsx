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
    <section ref={ref} className="min-h-screen">
      {isInView && (
        <ul className="section-px container mx-auto flex flex-wrap justify-center gap-lg">
          {SERVICES.map((service, index) => {
            return (
              <motion.li
                className=" group relative overflow-hidden  rounded-b-sm rounded-t-sm duration-fast before:absolute before:left-0 before:top-0 before:h-full before:max-h-0 before:w-full before:bg-primary-400 before:duration-medium hover:rounded-t-sm hover:before:max-h-full "
                initial={{ opacity: 0, y: -300 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    opacity: { duration: 0.2, delay: index * 0.3 },
                    y: { duration: 0.3, delay: index * 0.3 }
                  }
                }}
                exit={{ opacity: 0, y: -300 }}
                style={{ zIndex: 30 - index }}
              >
                <Link className=" flex flex-col-reverse gap-sm" href={service.href}>
                  <motion.h3
                    className={`sub-heading before-bg  relative py-2 duration-medium  group-hover:-mt-1 group-hover:ml-2 group-hover:text-white `}
                    initial={{ opacity: 0, y: -300 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        opacity: { duration: 0.1, delay: index * 0.3 + 0.3 },
                        y: { duration: 0.2, delay: index * 0.3 + 0.2 }
                      }
                    }}
                    exit={{ opacity: 0, y: -300 }}
                  >
                    {service.text}
                  </motion.h3>
                  <Image
                    className={`relative rounded-sm duration-medium group-hover:rounded-b-none`}
                    src={service.src}
                    alt={`${service}`}
                    width={400}
                    height={300}
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
