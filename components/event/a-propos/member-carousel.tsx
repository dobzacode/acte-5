'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import 'yet-another-react-lightbox/styles.css';

import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { Member } from './team-section';

type PropType = {
  options?: EmblaOptionsType;
  imageArr: Member[];
};

const MemberCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <>
      <div className="member_embla   py-xl">
        <div className="emba__viewport" ref={emblaRef}>
          <div className="member_embla__container gap-lg ">
            {props.imageArr.map((image, index) => (
              <div
                className="rounded-extra-small card member_embla__slide flex w-[6rem] flex-col items-center gap-lg px-0 pt-0 last:mr-lg tablet:w-[8rem] laptop:w-[11rem]"
                key={index}
              >
                <Image
                  width={400}
                  height={400}
                  className="aspect-square rounded-t-md object-cover"
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={image.blurSrc}
                  alt={image.alt ? image.alt : `Image ${index + 1}`}
                ></Image>
                <div className="flex max-w-[20ch] flex-col items-center gap-md text-pretty text-center">
                  <p className="sub-heading   whitespace-nowrap">
                    <strong>{image.name}</strong>
                  </p>
                  <p className="body">{image.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCarousel;
