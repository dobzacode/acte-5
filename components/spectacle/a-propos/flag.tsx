'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { v4 } from 'uuid';

export default function Flag({ inverted, className }: { inverted?: boolean; className?: string }) {
  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');
  const viewport = { once: true, margin: `0px 0px -200px 0px` };

  console.log(isLaptop);

  if (isLaptop)
    return (
      <div
        key={v4()}
        className={cn(
          'flex w-full justify-center overflow-hidden ',
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
            'relative z-10 aspect-[5/2] w-1/2 overflow-hidden ',
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
            1998
          </InviewWrapper>
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
            {' '}
            Lorem ipsum
          </InviewWrapper>
        </div>
      </div>
    );

  return (
    <div
      key={v4()}
      className={cn(
        'max-laptop:section-px flex w-full justify-center overflow-hidden',
        inverted && 'flex-row-reverse',
        className,
        ' max-laptop:gap-md '
      )}
    >
      <InviewWrapper
        viewport={viewport}
        variant={
          isLaptop
            ? {
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
              }
            : !inverted
            ? ComingFromLeftVariant
            : ComingFromRightVariant
        }
        className={cn(
          'relative z-10 aspect-[5/3] w-2/3 shrink-0 overflow-hidden  laptop:w-1/2',
          inverted ? 'rounded-r-sm' : 'rounded-l-sm',
          'max-laptop:rounded-sm'
        )}
      >
        <Image src="/placeholder-image.png" alt="image" fill className="object-cover"></Image>
      </InviewWrapper>
      <div
        className={cn(
          'heading--large relative z-10 flex grow flex-col gap-sm overflow-hidden bg-primary-400',
          inverted ? 'pr-xl text-end' : 'pl-xl',
          'max-laptop:z-0 max-laptop:overflow-visible max-laptop:pl-sm max-laptop:pr-0'
        )}
      >
        <InviewWrapper
          viewport={viewport}
          variant={
            isLaptop
              ? {
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
                }
              : !inverted
              ? ComingFromLeftVariant
              : ComingFromRightVariant
          }
          tag="p"
        >
          1998
        </InviewWrapper>
        <InviewWrapper
          viewport={viewport}
          variant={
            isLaptop
              ? {
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
                }
              : !inverted
              ? ComingFromLeftVariant
              : ComingFromRightVariant
          }
          tag="p"
        >
          Lorem ipsum
        </InviewWrapper>
      </div>
    </div>
  );
}
