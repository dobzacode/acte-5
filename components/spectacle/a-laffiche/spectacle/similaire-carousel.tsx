'use client';

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

  return (
    <>
      <Carousel className="section-px flex max-w-[100vw] items-center justify-center gap-md laptop:mx-auto [&>div]:rounded-sm">
        <CarouselPrevious className="relative" />

        <CarouselContent className="laptop-large:-ml-sm">
          {props.imageArr.map((image, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              className="mb-auto basis-full mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3 laptop-large:pr-sm"
            >
              <Link
                scroll={false}
                href={`/spectacles-strasbourg/a-laffiche/${image.slug.current}`}
                className={cn(
                  'card relative flex h-fit flex-col items-center gap-md overflow-hidden rounded-sm border-0 p-0 shadow-none'
                )}
                key={index}
              >
                <Image
                  width={400}
                  height={400}
                  className={cn('h-fit w-full grow cursor-pointer overflow-hidden rounded-sm')}
                  sizes={'(max-width: 640px) 100vw, 50vw'}
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={image.blurSrc}
                  alt={`Image ${image.titre}`}
                ></Image>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="relative" />
      </Carousel>
    </>
  );
};

export default SimilaireCarousel;
