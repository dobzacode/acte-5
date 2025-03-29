'use client';

import { FadeInVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import ImagePulsing from '@/components/ui/image-pulsing';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CategoryPicker from './category-picker';
import anniversairepic from '/public/assets/event/services/anniversaire.jpg';
import clefpic from '/public/assets/event/services/clef.jpg';
import conventionpic from '/public/assets/event/services/convention.jpg';
import designpic from '/public/assets/event/services/design.jpg';
import digitalepic from '/public/assets/event/services/digitale.jpg';
import editionpic from '/public/assets/event/services/edition.jpg';
import galapic from '/public/assets/event/services/gala.jpg';
import inaugurationpic from '/public/assets/event/services/inauguration.jpg';
import marquepic from '/public/assets/event/services/marque.jpg';
import medaillepic from '/public/assets/event/services/medailles.jpg';
import mesurepic from '/public/assets/event/services/mesure.jpg';
import portespic from '/public/assets/event/services/portes.jpg';
import scenographiepic from '/public/assets/event/services/scenographie.jpg';
import supportpic from '/public/assets/event/services/support.jpg';
import teambuildingpic from '/public/assets/event/services/teambuilding.jpg';
import videopic from '/public/assets/event/services/video.jpg';
import voeuxpic from '/public/assets/event/services/voeux.jpg';

export const SERVICES = [
  {
    href: '/agence-evenementielle-strasbourg/services/inauguration-entreprise',
    text: 'Inauguration',
    src: inaugurationpic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
    text: 'Convention / séminaire',
    src: conventionpic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
    text: "Anniversaire d'entreprise",
    src: anniversairepic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
    text: 'Cérémonie des médailles',
    src: medaillepic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
    text: 'Cérémonie des vœux',
    src: voeuxpic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
    text: 'Portes ouvertes',
    src: portespic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/soiree-gala',
    text: 'Soirée de Gala',
    src: galapic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/lancement-de-produit',
    text: 'Lancement de produit',
    src: marquepic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-clef-en-main',
    text: 'Spectacle clé en main',
    src: clefpic,
    category: 'spectacle'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/spectacle-sur-mesure',
    text: 'Spectacle sur mesure',
    src: mesurepic,
    category: 'spectacle'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/team-building',
    text: 'Team building',
    src: teambuildingpic,
    category: 'evenementiel'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/identite-visuelle',
    text: 'Identité visuelle',
    src: designpic,
    category: 'graphisme'
  },

  {
    href: '/agence-evenementielle-strasbourg/services/support-de-communication',
    text: 'Supports de communication',
    src: supportpic,
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/edition',
    text: 'Edition',
    src: editionpic,
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/scenographie',
    text: 'Scénographie',
    src: scenographiepic,
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/video-entreprise',
    text: "Vidéo d'entreprise",
    src: videopic,
    category: 'graphisme'
  },
  {
    href: '/agence-evenementielle-strasbourg/services/communication-digitale',
    text: 'Communication digitale',
    src: digitalepic,
    category: 'graphisme'
  }
];

export default function ServiceGalerie({}) {
  const params = useSearchParams();
  const [actualParams, setActualParams] = useState<string>(
    params.get('categorie') ?? 'evenementiel'
  );
  const pathname = usePathname();

  useEffect(() => {
    pathname === '/agence-evenementielle-strasbourg/services' &&
      setActualParams(params.get('categorie') ?? 'evenementiel');
  }, [params]);

  return (
    <section className="inner-section-gap inner-section-py relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-primary-400 duration-medium">
      <InviewWrapper
        variant={FadeInVariant}
        tag="nav"
        id={'service-galerie'}
        className="body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white"
      >
        <CategoryPicker actualParams={actualParams}></CategoryPicker>
      </InviewWrapper>

      <InviewWrapper
        variant={FadeInVariant}
        tag="ul"
        className="section-px grid w-full grid-cols-2 justify-center gap-sm laptop:container tablet:grid-cols-3 laptop:mx-auto laptop-large:max-w-[1200px] laptop-large:grid-cols-3 [&:has(li:nth-child(2):last-child)]:!grid-cols-[repeat(2,minmax(0,33%))] max-tablet:[&:has(li:nth-child(2):last-child)]:!grid-cols-[repeat(2,minmax(0,50%))] max-mobile-medium:[&:has(li:nth-child(2):last-child)]:!grid-cols-[repeat(2,minmax(0,50%))]"
      >
        <AnimatePresence mode="wait">
          {SERVICES.filter((service) => service.category === actualParams).map((service, index) => {
            return (
              <motion.li
                key={`${service.text}-${index}`}
                className="group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm bg-black shadow-md"
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
                <div className="h-full w-full duration-medium hover:grayscale">
                  <Link
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
                          opacity: { duration: 0.1, delay: (index / 1.5) * 0.3 },
                          maxHeight: { duration: 0.2, delay: (index / 1.5) * 0.3 },
                          paddingTop: { duration: 0.2, delay: (index / 1.5) * 0.3 },
                          paddingBottom: { duration: 0.2, delay: (index / 1.5) * 0.3 },
                          y: { duration: 0.2, delay: (index / 1.5) * 0.3 }
                        }
                      }}
                      exit={{ opacity: 0 }}
                    >
                      {service.text}
                    </motion.h3>
                    <ImagePulsing
                      skeletoncss={'h-full w-full object-cover absolute object-center'}
                      fill
                      sizes={'(min-width: 1024px) 50vw, 100vw'}
                      className={`h-full w-full object-cover duration-medium group-hover:scale-[102%]`}
                      placeholder="blur"
                      src={service.src}
                      alt={`${service}`}
                    ></ImagePulsing>
                  </Link>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </InviewWrapper>
    </section>
  );
}
