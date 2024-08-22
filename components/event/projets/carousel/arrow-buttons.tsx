import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/projets/page';
import { cn } from '@/lib/utils';
import { EmblaCarouselType } from 'embla-carousel';
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  setSelectedIndex?: (index: number) => void,
  events?: EventWithImgAndIndex[]
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (!setSelectedIndex || !events) return;
    const prevIndex = selectedIndex === 0 ? events.length - 1 : selectedIndex - 1;
    if (!setSelectedIndex) return;
    setSelectedIndex(prevIndex);
  }, [emblaApi, setSelectedIndex]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (!setSelectedIndex || !events) return;
    const nextIndex = selectedIndex === events.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(nextIndex);
  }, [emblaApi, setSelectedIndex]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={cn(
        `project_embla__button embla__button--prev`,
        'origin-right !rounded-l-sm !rounded-r-none border-1 border-solid border-gray-400 duration-fast hover:border-primary-300 hover:bg-primary-300 active:border-primary-300 [&>svg>path]:hover:fill-white'
      )}
      type="button"
      {...restProps}
    >
      <svg className="project_embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={cn(
        `project_embla__button embla__button--next`,
        'origin-left !rounded-l-none !rounded-r-sm border-1 border-solid border-gray-400 duration-fast hover:border-primary-300 hover:bg-primary-300 active:border-primary-300 [&>svg>path]:hover:fill-white'
      )}
      type="button"
      {...restProps}
    >
      <svg className="project_embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};
