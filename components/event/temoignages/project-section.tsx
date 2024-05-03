'use client';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/temoignages/page';
import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { useEffect, useState } from 'react';
import ProjectCarousel from './carousel/project-carousel';

export default function ProjectSection({ events }: { events: EventWithImgAndIndex[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  return (
    <section className="section-px flex justify-between gap-xl laptop:container laptop:mx-auto">
      <InviewWrapper variant={ComingFromLeftVariant} className="flex w-1/2 flex-col gap-xl">
        <h2 className="heading--sub-extra-large text-pretty text-primary-400">
          {events.find((event) => event.index === selectedIndex)?.client}
        </h2>
        <p className="sub-heading">
          {events.find((event) => event.index === selectedIndex)?.description}
        </p>
      </InviewWrapper>
      <ProjectCarousel
        className="w-1/2"
        options={{ loop: true }}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        events={events}
      ></ProjectCarousel>
    </section>
  );
}
