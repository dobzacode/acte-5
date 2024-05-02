'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { Image as ImageSanity } from '@/sanity/lib/queries';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { DotButton, NextButton, PrevButton } from './embla-carousel-arrows-dot-button';
import NextJsImage from './nextjs-image';

type PropType = {
  options?: EmblaOptionsType;
  imageArr: Omit<ImageSanity, 'asset' | '_type'>[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    return emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const lightboxSlides = props.imageArr.map((item) => {
    return {
      src: item.url,
      width: 3840,
      height: 2560,
      alt: item.alt ? item.alt : '',
      blurDataURL: item.blurSrc,
      srcSet: [
        { src: item.url, width: 320, height: 213 },
        { src: item.url, width: 640, height: 426 },
        { src: item.url, width: 1200, height: 800 },
        { src: item.url, width: 2048, height: 1365 },
        { src: item.url, width: 3840, height: 2560 }
      ]
    };
  });

  return (
    <>
      <div className="embla container  relative">
        <div className="relative overflow-hidden rounded-sm" ref={emblaRef}>
          <div className="embla__container ">
            {props.imageArr.map((image, index) => (
              <div
                onClick={() => {
                  openLightbox(index);
                }}
                className="embla__slide relative aspect-square h-[20rem]  cursor-pointer overflow-hidden  rounded-sm mobile-large:h-[40rem]"
                key={index}
              >
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <Image
                  fill
                  className="object-cover"
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={image.blurSrc}
                  alt={image.alt ? image.alt : `Image ${index + 1}`}
                ></Image>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
        </div>
        <div className="embla__dots absolute bottom-0 z-[99] flex w-full">
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>

      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={() => closeLightbox()}
        plugins={[Zoom]}
        slides={lightboxSlides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default EmblaCarousel;
