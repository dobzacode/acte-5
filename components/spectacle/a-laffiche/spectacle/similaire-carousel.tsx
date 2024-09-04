'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import 'yet-another-react-lightbox/styles.css';

import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Spectacle } from '@/sanity/lib/queries';
import Link from 'next/link';

interface WithUrl extends Spectacle {
  url: string;
  blurSrc: string;
  alt?: string;
}

type PropType = {
  options?: EmblaOptionsType;
  imageArr: WithUrl[];
};

const SimilaireCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <>
      <Carousel className="section-px flex max-w-[100vw] items-center justify-center gap-md laptop:mx-auto [&>div]:rounded-sm">
        <>
          <CarouselPrevious className="relative" />
        </>
        <CarouselContent className="laptop-large:-ml-sm">
          {props.imageArr.map((image, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              className="basis-full mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3 laptop-large:pr-sm"
            >
              <Link
                scroll={false}
                href={`/spectacles-strasbourg/a-laffiche/${image.slug.current}`}
                className={cn(
                  'card relative flex h-full flex-col items-center gap-md overflow-hidden rounded-sm border-0 p-0 shadow-xl'
                )}
                key={index}
              >
                <Image
                  width={400}
                  height={400}
                  className={cn(
                    'aspect-square h-full w-full grow cursor-pointer overflow-hidden rounded-t-sm object-cover',
                    'name' in image ? null : 'rounded-t-none'
                  )}
                  sizes={'(max-width: 640px) 100vw, 50vw'}
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={image.blurSrc}
                  alt={`Image ${image.titre}`}
                ></Image>

                <div className="flex flex-col items-center gap-sm text-pretty px-md pb-md text-center">
                  <p className="sub-heading text-ellipsis">
                    <strong>{image.titre}</strong>
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <>
          <CarouselNext className="relative" />
        </>
      </Carousel>
    </>
  );
};

export default SimilaireCarousel;
