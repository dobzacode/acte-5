'use client';

import { RevueScouteActuelleQueryResponse } from '@/sanity/lib/queries';
import { useState } from 'react';

import DivWrapper from '@/components/framer-motion/div-wrapper';
import { AnimatePresence } from 'framer-motion';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { DateItemCal } from './calendrier';
import CalendrierRow from './calendrier-row';

const filtrerDatesParMois = (mois: number, annee: number, datesArr: DateItemCal[]) => {
  const uniqueItems = new Set<string>();
  const result = [];

  for (const dateItem of datesArr) {
    const filteredDates = dateItem.dates.filter((date) => {
      const dateObj = new Date(date);
      return dateObj.getMonth() === mois && dateObj.getFullYear() === annee;
    });

    if (filteredDates.length > 0) {
      if (!uniqueItems.has(dateItem._key)) {
        uniqueItems.add(dateItem._key);
        result.push({
          ...dateItem,
          dates: filteredDates
        });
      }
    }
  }

  return result;
};

export default function BigCalendrierTable({
  datesArr,
  revueScoute
}: {
  datesArr: DateItemCal[];
  revueScoute: RevueScouteActuelleQueryResponse;
}) {
  const dateActuelle = new Date();
  const moisActuel = dateActuelle.getMonth();
  const anneeActuelle = dateActuelle.getFullYear();

  const [moisSelectionne, setMoisSelectionne] = useState<number>(moisActuel);
  const [anneeSelectionnee, setAnneeSelectionnee] = useState<number>(anneeActuelle);

  const handleMoisChange = (direction: 'next' | 'prev') => {
    let prochainMois = direction === 'next' ? moisSelectionne + 3 : moisSelectionne - 3;
    let prochaineAnnee = anneeSelectionnee;

    if (prochainMois >= 12) {
      prochainMois = prochainMois % 12;
      prochaineAnnee += Math.floor((moisSelectionne + 3) / 12);
    } else if (prochainMois < 0) {
      prochainMois = 12 + prochainMois;
      prochaineAnnee -= Math.ceil(Math.abs(prochainMois) / 12);
    }

    setMoisSelectionne(prochainMois);
    setAnneeSelectionnee(prochaineAnnee);
  };

  const monthsToDisplay = [0, 1, 2].map((offset) => {
    const date = new Date(anneeSelectionnee, moisSelectionne + offset, 1);
    return {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  });

  return (
    <div className="mx-auto laptop:container max-laptop:hidden">
      <div className="card relative mx-auto flex w-full flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl">
        <div className="flex w-full items-center justify-between gap-lg">
          <p className="laptop-large:heading--sub-large tablet:heading grid w-full grid-cols-3 gap-md text-black tablet:font-bold laptop-large:font-semibold">
            {monthsToDisplay.map(({ month, year }, index) => (
              <span
                className="flex w-full items-center justify-between gap-md self-center whitespace-nowrap"
                key={`${year}-${month}`}
              >
                {new Date(year, month)
                  .toLocaleString('fr-FR', {
                    month: 'long'
                  })
                  .toUpperCase()}{' '}
                {index < monthsToDisplay.length - 1}
                {index === 2 && (
                  <span className="flex h-fit shrink-0 whitespace-nowrap rounded-xs shadow-sm">
                    <button
                      className="rounded-l-xs border border-black/10 bg-white p-sm text-black duration-medium hover:bg-black active:scale-105 hover:[&>*]:scale-105 [&>*]:hover:text-white"
                      onClick={() => handleMoisChange('prev')}
                    >
                      <LuChevronLeft className="duration-medium" size={30}></LuChevronLeft>
                    </button>
                    <button
                      className="rounded-r-xs border border-black/10 bg-white p-sm text-black duration-medium hover:bg-black active:scale-105 hover:[&>*]:scale-105 [&>*]:hover:text-white"
                      onClick={() => handleMoisChange('next')}
                    >
                      <LuChevronRight className="duration-medium" size={30}></LuChevronRight>
                    </button>
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-sm">
          <AnimatePresence mode="wait">
            {monthsToDisplay.map(({ month, year }, colIndex) => (
              <div key={`${year}-${month}`} className="col h-full">
                <ul className="flex h-full flex-col gap-sm">
                  {filtrerDatesParMois(month, year, datesArr).map((dateItem, index) => (
                    <DivWrapper
                      key={`${dateItem._key}-${month}-${year}`}
                      className="w-full"
                      style={{ zIndex: 30 - index }}
                      variant={{
                        hidden: { maxHeight: '0rem', y: 100 },
                        enter: {
                          maxHeight: '10rem',
                          y: 0,
                          transition: {
                            y: {
                              type: 'spring',
                              damping: 20
                            },
                            opacity: {
                              duration: 0.2,
                              delay: index * 0.1
                            },
                            duration: 0.5,
                            delay: index * 0.1
                          }
                        },
                        exit: {
                          maxHeight: '0rem',
                          y: 100,
                          opacity: 0,
                          transition: {
                            y: {
                              type: 'spring',
                              damping: 20
                            },
                            opacity: {
                              duration: 0.1,
                              delay: 0.2 + index * 0.1
                            },
                            duration: 0.5,
                            delay: index * 0.1
                          }
                        }
                      }}
                      tag="li"
                    >
                      <CalendrierRow dateItem={dateItem}></CalendrierRow>
                    </DivWrapper>
                  ))}
                  {filtrerDatesParMois(month, year, datesArr).length === 0 && (
                    <DivWrapper
                      key={`empty-${month}-${year}`}
                      className="pointer-events-none relative h-full w-full"
                      variant={{
                        hidden: { maxHeight: '0rem', y: 100 },
                        enter: {
                          maxHeight: '7.4rem',
                          y: 0,
                          transition: {
                            y: {
                              type: 'spring',
                              damping: 20
                            },
                            opacity: {
                              duration: 0.2
                            },
                            duration: 0.5
                          }
                        },
                        exit: {
                          maxHeight: '0rem',
                          y: 100,
                          opacity: 0,
                          transition: {
                            y: {
                              type: 'spring',
                              damping: 20
                            },
                            opacity: {
                              duration: 0.1,
                              delay: 0.2
                            },
                            duration: 0.5
                          }
                        }
                      }}
                      tag="li"
                    >
                      <CalendrierRow></CalendrierRow>
                    </DivWrapper>
                  )}
                </ul>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
