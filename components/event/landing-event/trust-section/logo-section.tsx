'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Logo } from '@/sanity/lib/queries';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';


export default function LogoSlider({
  logos,
  isTrustSection = true
}: {
  isTrustSection?: boolean;
  logos: (Logo & { url: string; blurSrc: string })[];
}) {
  return (
    <div className="relative z-40 flex w-full gap-md pt-md mobile-large:gap-md">
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{ loop: true, startIndex: 3 }}
        className="flex items-center gap-md laptop:mx-auto [&>div]:rounded-sm"
      >
        {isTrustSection ? (
          <CarouselContent className="laptop-large:-ml-sm">
            {logos.map((image, index) => {
              return index % 2 === 0 ? (
                <CarouselItem
                  key={image.title}
                  className="flex basis-1/3 flex-col justify-between mobile-large:basis-1/4 tablet:basis-1/5 laptop:basis-1/6 laptop-large:basis-[14.28%]"
                >
                  <div
                    className={cn(
                      'relative flex h-1/2 origin-center items-center justify-center gap-md rounded-sm bg-white aspect-square'
                    )}
                    key={index}
                  >
                    <Image
                      width={100}
                      height={100}
                      className={cn(
                        'w-full h-full object-contain p-md mobile-large:p-md tablet:p-lg'
                      )}
                      sizes={'(max-width: 640px) 33vw, 30vw'}
                      src={image.url}
                      placeholder="blur"
                      blurDataURL={image.blurSrc}
                      alt={image.logo.alt ? image.logo.alt : `Logo ${index + 1}`}
                    ></Image>
                  </div>

                  <div
                    className={cn(
                      'relative z-20 flex h-1/2 items-center justify-center gap-md rounded-sm bg-white aspect-square'
                    )}
                    key={index + 1}
                  >
                    {index + 1 > logos.length - 1 ? null : (
                      <Image
                        width={100}
                        height={100}
                        className={cn(
                          'w-full h-full object-contain p-md mobile-large:p-md tablet:p-lg'
                        )}
                        sizes={'(max-width: 640px) 33vw, 30vw'}
                        src={logos[index + 1].url}
                        placeholder="blur"
                        blurDataURL={logos[index + 1].blurSrc}
                        //@ts-ignore
                        alt={
                          logos[index + 1].logo.alt
                            ? logos[index + 1].logo.alt
                            : `Logo ${index + 1}`
                        }
                      ></Image>
                    )}
                  </div>
                </CarouselItem>
              ) : null;
            })}
          </CarouselContent>
        ) : (
          <CarouselContent>
            {logos.map((image, index) => (
              <CarouselItem
                key={image.title}
                className="flex shrink-0 basis-1/3 flex-col justify-between mobile-large:basis-1/4 laptop:basis-[17%] laptop-large:basis-[12.5%]"
              >
                <div
                  className={cn(
                    'relative flex h-full origin-center items-center justify-center gap-md rounded-sm bg-white aspect-square'
                  )}
                  key={index}
                >
                  <Image
                    width={100}
                    height={100}
                    className={cn('w-full h-full object-contain p-md')}
                    sizes={'(max-width: 640px) 100vw, 30vw'}
                    src={image.url}
                    placeholder="blur"
                    blurDataURL={image.blurSrc}
                    alt={image.logo.alt ? image.logo.alt : `Logo ${index + 1}`}
                  ></Image>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
      </Carousel>
    </div>
  );
}
