'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Flag({
  inverted,
  className,
  date,
  text
}: {
  inverted?: boolean;
  className?: string;
  date?: string;
  text: string;
}) {
  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');
  const isMobile = useBetterMediaQuery('(max-width: 500px)');
  const viewport = { once: true, margin: `0px 0px -200px 0px` };

  console.log(isLaptop);

  if (isLaptop)
    return (
      <div
        key={`${date}-laptop`}
        className={cn(
          'flex w-full justify-center overflow-hidden',
          inverted && 'flex-row-reverse',
          className
        )}
      >
        <InviewWrapper
          viewport={viewport}
          variant={{
            hidden: {
              opacity: 0,
              x: !inverted ? 1000 : -1000
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                x: { type: 'spring', damping: 20 },
                opacity: { duration: 0.2 }
              }
            },
            exit: {
              opacity: 0,
              x: !inverted ? 1000 : -1000
            }
          }}
          className={cn(
            'relative z-10 aspect-[5/2] w-1/2 shrink-0 overflow-hidden',
            inverted ? 'rounded-r-sm' : 'rounded-l-sm'
          )}
        >
          <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
        </InviewWrapper>
        <div
          className={cn(
            'heading--large relative z-10 flex grow flex-col gap-sm overflow-hidden bg-primary-400',
            inverted ? 'pr-xl text-end' : 'pl-xl'
          )}
        >
          {date && (
            <InviewWrapper
              viewport={viewport}
              variant={{
                hidden: {
                  opacity: 0,
                  x: !inverted ? -400 : 400
                },
                enter: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    x: { delay: 0, type: 'spring', damping: 30 },
                    opacity: { duration: 0.2, delay: 0 }
                  }
                },
                exit: {
                  opacity: 0,
                  x: !inverted ? -400 : 400
                }
              }}
              tag="p"
            >
              {date}
            </InviewWrapper>
          )}
          <InviewWrapper
            className="heading font-light"
            viewport={viewport}
            variant={{
              hidden: {
                opacity: 0,
                x: !inverted ? -400 : 400
              },
              enter: {
                opacity: 1,
                x: 0,
                transition: {
                  x: { delay: 0.3, type: 'spring', damping: 30 },
                  opacity: { duration: 0.2, delay: 0.3 }
                }
              },
              exit: {
                opacity: 0,
                x: !inverted ? -400 : 400
              }
            }}
            tag="p"
          >
            {text}
          </InviewWrapper>
        </div>
      </div>
    );

  if (isMobile)
    return (
      <InviewWrapper
        viewport={viewport}
        variant={inverted ? ComingFromRightVariant : ComingFromLeftVariant}
        key={`${date}-mobile`}
        className={cn(
          'max-laptop:section-px flex w-full justify-center overflow-hidden max-mobile-large:flex-col',
          inverted && 'flex-row-reverse',
          className,
          'max-laptop:px-0 max-mobile-large:w-fit max-mobile-large:rounded-sm max-mobile-large:border max-mobile-large:border-default-50 max-mobile-large:bg-white max-mobile-large:shadow-md',
          'max-laptop:gap-md max-mobile-large:relative max-mobile-large:z-50 max-mobile-large:!pb-sm'
        )}
      >
        <div
          className={cn(
            'relative z-10 aspect-[5/3] w-1/2 shrink-0 overflow-hidden max-mobile-large:w-full laptop:w-1/2',
            inverted ? 'rounded-r-sm' : 'rounded-l-sm',
            'max-laptop:rounded-sm max-mobile-large:rounded-b-none'
          )}
        >
          <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
        </div>
        <div
          className={cn(
            'heading relative z-10 flex grow flex-col gap-sm overflow-hidden max-mobile-large:bg-white max-mobile-large:text-black mobile-large:bg-primary-400',
            inverted ? 'pr-xl text-end' : 'pl-xl',
            'max-laptop:z-0 max-laptop:overflow-visible max-laptop:pl-sm max-laptop:pr-0 max-mobile-large:pl-sm max-mobile-large:pr-sm max-mobile-large:text-center'
          )}
        >
          <div>{date}</div>
          <div className="sub-heading">{text}</div>
        </div>
      </InviewWrapper>
    );

  return (
    <div
      key={`${date}-tablet`}
      className={cn(
        'max-laptop:section-px flex w-full justify-center overflow-hidden max-mobile-large:flex-col',
        inverted && 'flex-row-reverse',
        className,
        'max-laptop:px-0 max-mobile-large:w-fit max-mobile-large:rounded-sm max-mobile-large:border max-mobile-large:border-default-50 max-mobile-large:bg-white max-mobile-large:shadow-md',
        'max-mobile-large:z- max-laptop:gap-md max-mobile-large:relative max-mobile-large:pb-sm'
      )}
    >
      <InviewWrapper
        viewport={viewport}
        variant={
          isLaptop
            ? {
                hidden: {
                  x: !inverted ? -400 : 400
                },
                enter: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    x: { delay: 0.3, type: 'spring', damping: 30 },
                    opacity: { duration: 0.2, delay: 0.3 }
                  }
                },
                exit: {
                  opacity: 0,
                  x: !inverted ? -400 : 400
                }
              }
            : !inverted
              ? ComingFromLeftVariant
              : ComingFromRightVariant
        }
        className={cn(
          'relative z-10 aspect-[5/3] w-1/2 shrink-0 overflow-hidden max-mobile-large:w-full laptop:w-1/2',
          inverted ? 'rounded-r-sm' : 'rounded-l-sm',
          'max-laptop:rounded-sm max-mobile-large:rounded-b-none'
        )}
      >
        <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
      </InviewWrapper>
      <div
        className={cn(
          'heading relative z-10 flex grow flex-col gap-sm overflow-hidden max-mobile-large:bg-white max-mobile-large:text-black mobile-large:bg-primary-400',
          inverted ? 'pr-xl text-end' : 'pl-xl',
          'max-laptop:z-0 max-laptop:overflow-visible max-laptop:pl-sm max-laptop:pr-0 max-mobile-large:pl-sm max-mobile-large:pr-sm max-mobile-large:text-center'
        )}
      >
        <InviewWrapper
          viewport={viewport}
          variant={
            isLaptop
              ? {
                  hidden: {
                    x: !inverted ? -400 : 400
                  },
                  enter: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      x: { delay: 0, type: 'spring', damping: 30 },
                      opacity: { duration: 0.2, delay: 0 }
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: !inverted ? -400 : 400
                  }
                }
              : !inverted
                ? ComingFromLeftVariant
                : ComingFromRightVariant
          }
          tag="p"
        >
          {date}
        </InviewWrapper>
        <InviewWrapper
          className="sub-heading"
          viewport={viewport}
          variant={
            isLaptop
              ? {
                  hidden: {
                    x: !inverted ? -400 : 400
                  },
                  enter: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      x: { delay: 0.3, type: 'spring', damping: 30 },
                      opacity: { duration: 0.2, delay: 0.3 }
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: !inverted ? -400 : 400
                  }
                }
              : !inverted
                ? ComingFromLeftVariant
                : ComingFromRightVariant
          }
          tag="p"
        >
          {text}
        </InviewWrapper>
      </div>
    </div>
  );
}
