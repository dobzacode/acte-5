'use client';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/temoignages/page';
import {
  ComingFromBottomVariant,
  ComingFromLeftVariant,
  ComingFromRightVariant,
  TextSliderVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import ProjectCarousel from './carousel/project-carousel';

export default function ProjectSection({ events }: { events: EventWithImgAndIndex[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedEvent, setSelectedEvent] = useState<EventWithImgAndIndex | null>(null);

  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const foundEvent = events.find((event) => event.index === selectedIndex);
    setSelectedEvent(foundEvent || null);
  }, [selectedIndex, events]);

  return (
    <section className="laptop:section-px flex justify-between gap-xl laptop:container max-laptop:flex-col laptop:mx-auto">
      <InviewWrapper variant={ComingFromLeftVariant}>
        <AnimatePresence mode="wait">
          {selectedEvent && (
            <InviewWrapper
              inverseOnExit
              key={v4()}
              variant={TextSliderVariant}
              className="max-laptop:section-px flex flex-col gap-xl laptop:w-1/2"
            >
              <>
                <h2 className="heading--large text-pretty text-primary-400">
                  {selectedEvent.client}
                </h2>
                <p className="sub-heading">{selectedEvent.description}</p>
              </>
            </InviewWrapper>
          )}
        </AnimatePresence>{' '}
      </InviewWrapper>
      <InviewWrapper
        className="laptop:fade-x relative flex justify-center overflow-x-hidden laptop:w-1/2"
        variant={isLaptop ? ComingFromRightVariant : ComingFromBottomVariant}
      >
        <ProjectCarousel
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          events={events}
        ></ProjectCarousel>
      </InviewWrapper>
    </section>
  );
}
