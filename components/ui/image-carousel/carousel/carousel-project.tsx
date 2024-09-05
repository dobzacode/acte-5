'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Image as ImageSanity } from '@/sanity/lib/queries';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import ImagePulsing from '../../image-pulsing';
import NextJsImage from './nextjs-image';

type CarouselProjectProps = {
  imageArr: Omit<ImageSanity, 'asset' | '_type'>[];
  className?: string;
  innerClassName?: string;
  outerClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
};

const CarouselProject: React.FC<CarouselProjectProps> = ({
  imageArr,
  className,
  innerClassName,
  outerClassName,
  previousClassName,
  nextClassName
}) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const lightboxSlides = imageArr.map((item) => ({
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
  }));

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        className={(cn('flex max-w-[100vw] items-center gap-md laptop:mx-auto'), outerClassName)}
      >
        <CarouselContent>
          {imageArr.map((image, index) => (
            <CarouselItem key={`${image}-${index}`} className={cn(className)}>
              <ImagePulsing
                key={index}
                
                width={800}
                height={800}
                className={cn(innerClassName)}
                sizes={'(max-width: 640px) 100vw, 50vw'}
                src={image.url}
                placeholder="blur"
                blurDataURL={image.blurSrc}
                alt={`Image ${index}`}
                onClick={() => openLightbox(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <>
          <CarouselPrevious
            className={cn('absolute left-sm top-1/2 -translate-y-1/2', previousClassName)}
          />
        </>
        <>
          <CarouselNext
            className={cn('absolute right-sm top-1/2 -translate-y-1/2', nextClassName)}
          />
        </>
      </Carousel>

      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={closeLightbox}
        plugins={[Zoom]}
        slides={lightboxSlides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default CarouselProject;
