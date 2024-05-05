'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useState } from 'react';

import 'yet-another-react-lightbox/styles.css';

import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

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

  const [selectedIndex, setSelectedIndex] = useState(0);
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

  return (
    <>
      <div className="member_embla   py-xl">
        <div className="emba__viewport" ref={emblaRef}>
          <div className="member_embla__container mx-auto w-fit gap-sm tablet:gap-md">
            {props.imageArr.map((image, index) => (
              <Link href={`/spectacles-strasbourg/a-laffiche/${image.slug.current}`}>
                <div
                  className={cn(
                    'rounded-extra-small card relative flex w-[6rem] shrink-0 flex-col items-center gap-lg bg-white px-0 pt-0 duration-medium  last:mr-lg hover:scale-105 hover:shadow-2xl tablet:w-[8rem] laptop:w-[18rem]',
                    ' overflow-hidden rounded-xs'
                  )}
                  key={index}
                >
                  <Image
                    width={400}
                    height={400}
                    onClick={() => {
                      openLightbox(index);
                    }}
                    className={cn(
                      'aspect-square cursor-pointer rounded-t-md object-cover',
                      'name' in image ? null : 'rounded-t-none'
                    )}
                    src={image.url}
                    placeholder="blur"
                    blurDataURL={image.blurSrc}
                    alt={image.alt ? image.alt : `Image ${index + 1}`}
                  ></Image>
                  <div className="flex max-w-[20ch] flex-col items-center gap-md text-pretty text-center">
                    <p className="sub-heading">
                      <strong>{image.titre}</strong>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilaireCarousel;
