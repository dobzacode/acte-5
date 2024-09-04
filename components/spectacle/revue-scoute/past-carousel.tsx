'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import NextJsImage from '@/components/ui/image-carousel/carousel/nextjs-image';
import { cn } from '@/lib/utils';
import { Image as SanityImage } from '@/sanity/lib/queries';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export default function PastCarousel({ imagesWithUrl }: { imagesWithUrl: SanityImage[] }) {
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

  const lightboxSlides = imagesWithUrl.map((item) => {
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
      <Carousel className="max-w-[100vw] [&>div]:rounded-sm">
        <CarouselContent className="justify-center laptop-large:-ml-sm">
          {imagesWithUrl.map((image, index) => (
            <CarouselItem
              key={index}
              onClick={() => {
                openLightbox(index);
              }}
              className="basis-1/2 mobile-large:basis-1/3 tablet:basis-1/4 laptop-large:basis-1/6 laptop-large:pr-sm"
            >
              <div
                className={cn(
                  'card relative flex h-full flex-col items-center gap-sm rounded-sm border-0 p-0 shadow-xl'
                )}
              >
                <Image
                  width={400}
                  height={400}
                  className={cn('aspect-square w-full cursor-pointer rounded-sm object-cover')}
                  sizes={'(max-width: 640px) 100vw, 50vw'}
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={image.blurSrc}
                  alt={image.alt ? image.alt : `Image ${index + 1}`}
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
}
