'use client';

import { RevueScouteActuelleQueryResponse } from '@/sanity/lib/queries';
import { useCallback, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import DivWrapper from '@/components/framer-motion/div-wrapper';
import { AnimatePresence } from 'framer-motion';
import { DateItemCal } from './calendrier';
import CalendrierRow from './calendrier-row';

export default function CalendrierTable({
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

  const filtrerDatesParMois = (mois: number) => {
    return datesArr.filter((dateItem) => new Date(dateItem.dates[0]).getMonth() === mois);
  };

  const moisSuivant = useCallback(() => {
    let prochainMois = moisSelectionne !== null ? moisSelectionne + 1 : moisActuel + 1;
    let prochaineAnnee = anneeSelectionnee;

    if (prochainMois > 11) {
      prochainMois = 0;
      prochaineAnnee++;
    }

    setMoisSelectionne(prochainMois);
    setAnneeSelectionnee(prochaineAnnee);
  }, [moisSelectionne, anneeSelectionnee]);

  const moisPrecedent = useCallback(() => {
    let moisPrecedent = moisSelectionne !== null ? moisSelectionne - 1 : moisActuel - 1;
    let anneePrecedente = anneeSelectionnee;

    if (moisPrecedent < 0) {
      moisPrecedent = 11;
      anneePrecedente--;
    }

    setMoisSelectionne(moisPrecedent);
    setAnneeSelectionnee(anneePrecedente);
  }, [moisSelectionne, anneeSelectionnee]);

  return (
    <div className="card mx-auto flex w-full max-w-[40rem] flex-col items-center justify-center gap-md overflow-hidden rounded-sm bg-white shadow-xl">
      <div className="flex w-full items-center justify-between gap-lg">
        <p className="heading--sub-large font-bold text-black">
          {moisSelectionne !== null && (
            <span>
              {new Date(anneeSelectionnee, moisSelectionne)
                .toLocaleString('fr-FR', {
                  month: 'long'
                })
                .toUpperCase()}{' '}
              {anneeSelectionnee}
            </span>
          )}
        </p>
        <div className="h-fit pt-[4px]">
          <button
            className="rounded-l-sm border border-black/10 bg-white p-sm text-black duration-medium hover:bg-black active:scale-105 hover:[&>*]:scale-105 [&>*]:hover:text-white"
            onClick={() => moisPrecedent()}
          >
            <LuChevronLeft className="duration-medium" size={30}></LuChevronLeft>
          </button>
          <button
            className="rounded-r-sm border border-black/10 bg-white p-sm text-black duration-medium hover:bg-black active:scale-105 hover:[&>*]:scale-105 [&>*]:hover:text-white"
            onClick={() => moisSuivant()}
          >
            <LuChevronRight className="duration-medium" size={30}></LuChevronRight>
          </button>
        </div>
      </div>

      <ul className="flex w-full flex-col gap-sm">
        <AnimatePresence mode="wait">
          {filtrerDatesParMois(moisSelectionne).length > 0 ? (
            filtrerDatesParMois(moisSelectionne).map((dateItem, index) => (
              <DivWrapper
                key={dateItem._key}
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
            ))
          ) : (
            <DivWrapper
              key={'empty'}
              className="pointer-events-none relative w-full"
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
        </AnimatePresence>
      </ul>
    </div>
  );
}
