'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useState } from 'react';

import 'yet-another-react-lightbox/styles.css';

import NextJsImage from '@/components/ui/image-carousel/carousel/nextjs-image';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Member } from './team-section';

type PropType = {
  options?: EmblaOptionsType;
  imageArr: Member[] | { url: string; alt?: string; blurSrc: string }[];
};

const MemberCarousel: React.FC<PropType> = (props) => {
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
      <div className="member_embla   py-xl">
        <div className="emba__viewport" ref={emblaRef}>
          <div className="member_embla__container justify-center gap-sm tablet:gap-md">
            {props.imageArr.map((image, index) => (
              <div
                className={cn(
                  'rounded-extra-small  relative flex w-[6rem] shrink-0 flex-col items-center gap-lg px-0 pt-0 last:mr-lg tablet:w-[8rem] laptop:w-[11rem]',
                  'name' in image
                    ? 'card member_embla__slide'
                    : 'w-[10rem] overflow-hidden rounded-xs tablet:w-[15rem]'
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

                {'name' in image && (
                  <div className="flex max-w-[20ch] flex-col items-center gap-md text-pretty text-center">
                    <p className="sub-heading   whitespace-nowrap">
                      <strong>{(image as Member).name}</strong>
                    </p>
                    <p className="body">{(image as Member).work}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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

export default MemberCarousel;
