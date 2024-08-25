'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import CategoryPicker from './category-picker';

export const SERVICES = [
  {
    href: '/agence-evenementielle-strasbourg/services/inauguration-entreprise',
    text: 'Inauguration',
    src: '/assets/event/services/inauguration.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
    text: 'Convention',
    src: '/assets/event/services/convention.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
    text: 'Anniversaire',
    src: '/assets/event/services/anniversaire.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
    text: 'Cérémonie des médailles',
    src: '/assets/event/services/medailles.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
    text: 'Cérémonie des vœux',
    src: '/assets/event/services/voeux.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
    text: 'Portes ouvertes',
    src: '/assets/event/services/portes.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/soiree-gala',
    text: 'Soirée de Gala',
    src: '/assets/event/services/gala.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-entreprise',
    text: "Spectacle d'entreprise",
    src: '/assets/event/services/spectacle.jpg',
    category: 'spectacle'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-clef-en-main',
    text: 'Spectacle clef en main',
    src: '/assets/event/services/spectacle-clef-en-main.jpg',
    category: 'spectacle'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-sur-mesure',
    text: 'Spectacle sur mesure',
    src: '/assets/event/services/spectacle-sur-mesure.jpg',
    category: 'spectacle'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/team-building',
    text: 'Team building',
    src: '/assets/event/services/teambuilding.jpg',
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/identite-visuelle',
    text: 'Identité visuelle',
    src: '/assets/event/services/design.jpg',
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/video-entreprise',
    text: "Vidéo d'entreprise",
    src: '/assets/event/services/video.jpg',
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/support-de-communication',
    text: 'Support de communication',
    src: '/assets/event/services/support.jpg',
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/edition',
    text: 'Edition',
    src: '/assets/event/services/edition.jpg',
    category: 'graphisme'
  }
];

export default function ServiceGalerie({}) {
  const params = useSearchParams();
  const [actualParams, setActualParams] = useState<string>(
    params.get('categorie') ?? 'evenementiel'
  );
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px', once: true });

  useEffect(() => {
    console.log(pathname);
    pathname === '/agence-evenementielle-strasbourg/services' &&
      setActualParams(params.get('categorie') ?? 'evenementiel');
    // actualParams ??
    //   document.getElementById('service-galerie')?.scrollIntoView({ behavior: 'smooth' });
  }, [params]);

  console.log(actualParams);

  return (
    <section
      ref={ref}
      className="inner-section-gap inner-section-py relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-primary-400 duration-medium"
    >
      <nav
        id={'service-galerie'}
        className="body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white"
      >
        <CategoryPicker actualParams={actualParams}></CategoryPicker>
      </nav>

      {isInView && (
        <ul className="section-px grid grid-cols-2 justify-center gap-sm laptop:container mobile-large:grid-cols-3 laptop:mx-auto">
          <AnimatePresence mode="wait">
            {SERVICES.filter((service) => service.category === actualParams).map(
              (service, index) => {
                return (
                  <motion.li
                    key={`${service.text}-${index}`}
                    className="group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm bg-black shadow-md duration-medium hover:rounded-t-sm hover:shadow-xl"
                    initial={{ opacity: 0, y: -10, pointerEvents: 'none' }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      pointerEvents: 'auto',
                      transition: {
                        opacity: { duration: 0.5, delay: index * 0.3 },
                        pointerEvents: { delay: index * 0.3 },
                        y: { duration: 0.3, delay: index * 0.3 }
                      }
                    }}
                    exit={{ opacity: 0 }}
                    style={{ zIndex: 30 - index }}
                  >
                    <Link
                      scroll={false}
                      className="group relative z-40 flex h-full w-full flex-col-reverse duration-medium after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/100 after:to-transparent after:to-30%"
                      href={service.href}
                    >
                      <motion.h3
                        className={`sub-heading before-bg relative z-50 text-pretty px-md text-white duration-slow hover:duration-fast`}
                        initial={{
                          opacity: 0,
                          y: 300,
                          maxHeight: 0,
                          paddingTop: 0,
                          paddingBottom: 0
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          paddingTop: '1rem',
                          paddingBottom: '1rem',
                          maxHeight: 100,
                          transition: {
                            opacity: { duration: 0.1, delay: index * 0.3 },
                            maxHeight: { duration: 0.2, delay: index * 0.3 },
                            paddingTop: { duration: 0.2, delay: index * 0.3 },
                            paddingBottom: { duration: 0.2, delay: index * 0.3 },
                            y: { duration: 0.2, delay: index * 0.3 }
                          }
                        }}
                        exit={{ opacity: 0 }}
                      >
                        {service.text}
                      </motion.h3>
                      <Image
                        fill
                        sizes={'(min-width: 1024px) 50vw, 100vw'}
                        className={`object-cover duration-medium group-hover:scale-[102%]`}
                        placeholder="blur"
                        blurDataURL={service.src}
                        src={service.src}
                        alt={`${service}`}
                      ></Image>
                    </Link>
                  </motion.li>
                );
              }
            )}
          </AnimatePresence>
        </ul>
      )}
    </section>
  );
}
