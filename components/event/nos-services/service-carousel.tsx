'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from '@/components/ui/image-carousel/carousel/nextjs-image';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

import {
  DotButton,
  NextButton,
  PrevButton
} from '@/components/ui/image-carousel/carousel/embla-carousel-arrows-dot-button';
import { EventWithImg } from './last-event';

type PropType = {
  options?: EmblaOptionsType;
  events?: EventWithImg[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true });
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

  if (!props.events) return null;

  const lightboxSlides = props.events.map((item) => {
    return {
      src: item.src,
      width: 3840,
      height: 2560,
      alt: item.imageGallery[0].alt ? item.imageGallery[0].alt : '',
      blurDataURL: item.blurSrc,
      srcSet: [
        { src: item.src, width: 320, height: 213 },
        { src: item.src, width: 640, height: 426 },
        { src: item.src, width: 1200, height: 800 },
        { src: item.src, width: 2048, height: 1365 },
        { src: item.src, width: 3840, height: 2560 }
      ]
    };
  });

  return (
    <>
      <div className="embla relative   ">
        <div
          className="relative mx-auto rounded-sm  max-tablet:container max-tablet:overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container   tablet:gap-lg">
            {props.events.map((image, index) => (
              <div
                onClick={() => {
                  openLightbox(index);
                }}
                className="embla__slide  relative flex cursor-pointer flex-col items-center  overflow-hidden rounded-sm  bg-white   shadow-xl tablet:basis-1/3"
                key={index}
              >
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <div className="relative aspect-square w-full">
                  <Image
                    fill
                    className="object-cover "
                    sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                    src={image.src}
                    placeholder="blur"
                    blurDataURL={image.blurSrc}
                    alt={
                      image.imageGallery[0].alt ? image.imageGallery[0].alt : `Image ${index + 1}`
                    }
                  ></Image>
                </div>
                <p className="sub-heading p-md text-black">{image.client}</p>
              </div>
            ))}
          </div>
          {props.events.length > 2 && (
            <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
              <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
              <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
            </div>
          )}
        </div>
        {props.events.length > 2 && (
          <div className="embla__dots absolute -bottom-xl z-[99] flex w-full">
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
        )}
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
