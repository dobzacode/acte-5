'use client';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/temoignages/page';
import { ComingFromRightVariant, TextSliderVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import ProjectCarousel from './carousel/project-carousel';

export default function ProjectSection({ events }: { events: EventWithImgAndIndex[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedEvent, setSelectedEvent] = useState<EventWithImgAndIndex | null>(null);

  useEffect(() => {
    const foundEvent = events.find((event) => event.index === selectedIndex);
    setSelectedEvent(foundEvent || null);
  }, [selectedIndex, events]);

  return (
    <section className="section-px flex justify-between gap-xl laptop:container max-laptop:flex-col laptop:mx-auto">
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <InviewWrapper
            inverseOnExit
            key={v4()}
            variant={TextSliderVariant}
            className="flex flex-col gap-xl laptop:w-1/2"
          >
            <>
              <h2 className="heading--large text-pretty text-primary-400">
                {selectedEvent.client}
              </h2>
              <p className="sub-heading">{selectedEvent.description}</p>
            </>
          </InviewWrapper>
        )}
      </AnimatePresence>
      <InviewWrapper
        className="fade-x relative overflow-x-hidden laptop:w-1/2"
        variant={ComingFromRightVariant}
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
