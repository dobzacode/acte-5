'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef } from 'react';

import 'yet-another-react-lightbox/styles.css';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/projets/page';

import { cn } from '@/lib/utils';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons';

const TWEEN_FACTOR_BASE = 0.3;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  options?: EmblaOptionsType;
  events: EventWithImgAndIndex[];
  setSelectedIndex: (index: number) => void;
  className?: string;
  selectedIndex: number;
};

const ProjectCarousel: React.FC<PropType> = (props) => {
  const { options, className, events, setSelectedIndex, selectedIndex } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: (obj) => {
      obj.on('select', () => setSelectedIndex(obj.selectedScrollSnap()));
      return true;
    }
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, setSelectedIndex, events);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.project_embla__slide__number') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);

    emblaApi.on('reInit', setTweenNodes).on('reInit', setTweenFactor);
  }, [emblaApi]);

  console.log(selectedIndex);

  return (
    <>
      <div
        className={cn(
          'project_embla container relative overflow-hidden rounded-sm pb-sm',
          className
        )}
      >
        <div className="relative rounded-sm" ref={emblaRef}>
          <div className="project_embla__container">
            {events.map((event, index) => (
              <div
                className="project_embla__slide relative aspect-square h-[20rem] flex-[0_0_100%] cursor-pointer overflow-hidden rounded-sm mobile-large:h-[30rem]"
                key={index}
              >
                <div
                  className={cn(
                    `project_embla__slide__number relative h-full rounded-sm shadow-medium`
                  )}
                >
                  <Image
                    sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                    fill
                    className="object-cover"
                    src={event.src}
                    placeholder="blur"
                    blurDataURL={event.blurSrc}
                    alt={`${event.client} image `}
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center pt-sm">
          <div className="flex h-fit w-fit rounded-sm shadow-medium max-tablet:scale-90 [&>button]:active:scale-110">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
