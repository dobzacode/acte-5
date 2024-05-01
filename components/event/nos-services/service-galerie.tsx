'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const SERVICES = [
  {
    href: '/evenement/nos-services/inauguration',
    text: 'Inauguration',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/convention',
    text: 'Convention',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/anniversaire',
    text: 'Anniversaire',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/ceremonie-des-medailles',
    text: 'Cérémonie des médailles',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/ceremonie-des-voeux',
    text: 'Cérémonie des vœux',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/portes-ouvertes',
    text: 'Portes ouvertes',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/soiree-de-gala',
    text: 'Soirée de Gala',
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/spectacle-d-entreprise',
    text: "Spectacle d'entreprise",
    src: '/placeholder-image.png'
  },
  {
    href: '/evenement/nos-services/team-building',
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
                className="relative"
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
                <Link className="flex flex-col-reverse gap-md" href={service.href}>
                  <motion.h3
                    className={`sub-heading relative `}
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
                    className={`relative `}
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
