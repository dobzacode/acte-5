'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import 'yet-another-react-lightbox/styles.css';

import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { EventWithImg } from './last-event';

type PropType = {
  options?: EmblaOptionsType;
  events: EventWithImg[];
};

const ServiceCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  if (!props.events) return null;

  return (
    <>
      <div className="   py-xl">
        <div className="" ref={emblaRef}>
          <div className="member_embla__container gap-lg ">
            {props.events.map((event, index) => (
              <div
                className="rounded-extra-small card member_embla__slide flex w-fit flex-col items-center gap-lg overflow-hidden px-0 pt-0 last:mr-lg "
                key={index}
              >
                <div className="relative aspect-square w-[15rem] rounded-t-md">
                  <Image
                    fill
                    className=" object-cover"
                    src={event?.src}
                    placeholder="blur"
                    blurDataURL={event?.blurSrc}
                    alt={
                      event?.imageGallery[0].alt ? event.imageGallery[0].alt : `Image ${index + 1}`
                    }
                  ></Image>
                </div>
                <div className="flex max-w-[20ch] flex-col items-center gap-md text-pretty text-center">
                  <p className="sub-heading   whitespace-nowrap">
                    <strong>{event.client}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;
