'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef } from 'react';

import 'yet-another-react-lightbox/styles.css';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/temoignages/page';

import { cn } from '@/lib/utils';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons';

const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  options?: EmblaOptionsType;
  events: EventWithImgAndIndex[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  className?: string;
};

const ProjectCarousel: React.FC<PropType> = (props) => {
  const { options, className, events, setSelectedIndex } = props;
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

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <>
      <div className={cn('project_embla container relative pb-sm ', className)}>
        <div className=" relative rounded-sm" ref={emblaRef}>
          <div className="project_embla__container ">
            {events.map((event, index) => (
              <div
                className="project_embla__slide relative   aspect-square h-[20rem] cursor-pointer  rounded-sm    mobile-large:h-[30rem] "
                key={index}
              >
                <div className="project_embla__slide__number relative  h-full w-full overflow-hidden rounded-sm shadow-medium">
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
          <div className="flex h-fit w-fit  rounded-sm shadow-medium max-tablet:scale-90 [&>button]:active:scale-110">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
