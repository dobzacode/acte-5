'use client';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/projets/page';
import { cn, getCategoryWithSubCategory } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectSection({ events }: { events: EventWithImgAndIndex[] }) {
  // const [searchTerm, setSearchTerm] = useState('');
  const [categorie, setCategorie] = useState<'Evenementiel' | 'Spectacle' | 'Graphisme' | null>(
    null
  );

  return (
    <section className="laptop:section-px flex flex-col justify-between gap-xl laptop:container laptop:mx-auto">
      <div className="mx-auto flex w-fit gap-sm">
        {/* <div className="border-input flex h-fit w-fit items-center justify-center gap-sm rounded-xs border px-3">
          <Search className="stroke-foreground" size={16} />
          <input
            className="body placeholder:text-muted-foreground flex h-10 w-[23ch] rounded-xs bg-background font-medium file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            color="primary"
            placeholder="Rechercher un événement..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
        <nav className="body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white">
          <ul className="[&>li>button]:body flex h-full [&>li]:px-md [&>li]:py-xs">
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-black',
                !categorie ? 'text-primary' : 'hover:text-black'
              )}
            >
              <button
                onClick={() => {
                  setCategorie(null);
                }}
              >
                Tout voir
              </button>
            </li>
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-black',
                categorie === 'Evenementiel' ? 'text-primary' : 'hover:text-black'
              )}
            >
              <button
                onClick={() => {
                  setCategorie('Evenementiel');
                }}
              >
                Evenementiel
              </button>
            </li>
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-y-full before:bg-black',
                categorie === 'Spectacle' ? 'text-primary' : 'hover:text-black'
              )}
            >
              <button
                onClick={() => {
                  setCategorie('Spectacle');
                }}
              >
                Spectacle d'entreprise
              </button>
            </li>
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-black',
                categorie === 'Graphisme' ? 'text-primary' : 'hover:text-black'
              )}
            >
              <button
                onClick={() => {
                  setCategorie('Graphisme');
                }}
              >
                Graphisme
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <section className="relative flex h-full min-h-[60rem] justify-center overflow-x-clip duration-medium">
        <ul className="section-px grid grid-cols-2 justify-center gap-sm self-start laptop:container mobile-large:grid-cols-3 laptop:mx-auto">
          <AnimatePresence mode="wait">
            {categorie
              ? events
                  .filter((event) => getCategoryWithSubCategory(event.categorie) === categorie)
                  // .filter((event) => event.titre.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map((event, index) => {
                    return (
                      <motion.li
                        key={`${event.titre}-${index}-${categorie}`}
                        className="group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm bg-black shadow-md duration-medium hover:scale-110 hover:rounded-t-sm hover:shadow-xl hover:before:max-w-full"
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
                          className="group relative z-40 flex h-full w-full flex-col-reverse after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/100 after:to-transparent after:to-30%"
                          href={`/`}
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
                            {event.titre}
                          </motion.h3>
                          <Image
                            fill
                            sizes={'(min-width: 1024px) 50vw, 100vw'}
                            className={`object-cover duration-medium group-hover:scale-[102%]`}
                            placeholder="blur"
                            blurDataURL={event.blurSrc}
                            src={event.src}
                            alt={`${event}`}
                          ></Image>
                        </Link>
                      </motion.li>
                    );
                  })
              : events
                  // .filter((event) => event.titre.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map((event, index) => {
                    return (
                      <motion.li
                        key={`${event.titre}-${index}`}
                        className="group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm bg-black shadow-md duration-medium hover:scale-110 hover:rounded-t-sm hover:shadow-xl hover:before:max-w-full"
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
                          className="group relative z-40 flex h-full w-full flex-col-reverse after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/100 after:to-transparent after:to-30%"
                          href={`/`}
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
                            {event.titre}
                          </motion.h3>
                          <Image
                            fill
                            sizes={'(min-width: 1024px) 50vw, 100vw'}
                            className={`object-cover duration-medium group-hover:scale-[102%]`}
                            placeholder="blur"
                            blurDataURL={event.blurSrc}
                            src={event.src}
                            alt={`${event}`}
                          ></Image>
                        </Link>
                      </motion.li>
                    );
                  })}
          </AnimatePresence>
        </ul>
      </section>
    </section>
  );
}
