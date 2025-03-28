'use client';

import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function Flag({
  inverted,
  className,
  date,
  text,
  src,
  button
}: {
  inverted?: boolean;
  className?: string;
  date?: string;
  text: string;
  src?: StaticImageData;
  button?: React.ReactNode;
}) {
  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');
  const isMobile = useBetterMediaQuery('(max-width: 500px)');

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
        {src ? (
          <DivWrapper
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
              'relative z-10 aspect-[5/3] w-1/2 shrink-0 overflow-hidden',
              inverted ? 'rounded-r-sm' : 'rounded-l-sm'
            )}
          >
            <Image src={src} placeholder="blur" alt="image" fill className="object-cover"></Image>
          </DivWrapper>
        ) : (
          <div className="w-1/2 shrink-0 overflow-hidden"></div>
        )}
        <div
          className={cn(
            'heading--large relative z-10 flex grow flex-col gap-sm overflow-hidden bg-primary-400',
            inverted ? 'pr-xl text-end' : 'pl-xl'
          )}
        >
          {date && (
            <DivWrapper
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
            </DivWrapper>
          )}
          <DivWrapper
            className="heading font-light"
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
          </DivWrapper>

          {button && (
            <Link href="/spectacles-strasbourg/revue-scoute">
              <DivWrapper
                tag="span"
                variant={{
                  hidden: {
                    opacity: 0,
                    x: !inverted ? -400 : 400
                  },
                  enter: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      x: { delay: 0.5, type: 'spring', damping: 30 },
                      opacity: { duration: 0.2, delay: 0.5 }
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: !inverted ? -400 : 400
                  }
                }}
                className="sub-heading shadow-primary-sm 0 mt-sm flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-black bg-white px-md py-sm text-black laptop:gap-sm laptop:px-lg laptop:py-md"
              >
                {button}
              </DivWrapper>
            </Link>
          )}
        </div>
      </div>
    );

  if (isMobile)
    return (
      <DivWrapper
        variant={inverted ? ComingFromRightVariant : ComingFromLeftVariant}
        key={`${date}-mobile`}
        className={cn(
          'max-laptop:section-px flex w-full justify-center overflow-hidden max-mobile-large:flex-col',
          inverted && 'flex-row-reverse',
          className,
          'max-laptop:px-0 max-mobile-large:w-fit max-mobile-large:rounded-sm max-mobile-large:border max-mobile-large:border-default-50 max-mobile-large:bg-white max-mobile-large:shadow-md',
          'max-laptop:gap-md max-mobile-large:relative max-mobile-large:z-50 max-mobile-large:!pb-md'
        )}
      >
        {src ? (
          <div
            className={cn(
              'relative z-10 aspect-[5/3] w-1/2 shrink-0 overflow-hidden max-mobile-large:w-full laptop:w-1/2',
              inverted ? 'rounded-r-sm' : 'rounded-l-sm',
              'max-laptop:rounded-sm max-mobile-large:rounded-b-none'
            )}
          >
            <Image src={src} placeholder="blur" alt="image" fill className="object-cover"></Image>
          </div>
        ) : (
          <div className="w-1/2 shrink-0 overflow-hidden"></div>
        )}
        <div
          className={cn(
            'heading relative z-10 flex grow flex-col gap-sm overflow-hidden max-mobile-large:bg-white max-mobile-large:text-black mobile-large:bg-primary-400',
            inverted ? 'pr-xl text-end' : 'pl-xl',
            'max-laptop:z-0 max-laptop:overflow-visible max-laptop:pl-sm max-laptop:pr-0 max-mobile-large:pl-sm max-mobile-large:pr-sm max-mobile-large:text-center'
          )}
        >
          <div>{date}</div>
          <div className="sub-heading">{text}</div>
          {button && (
            <Link
              href="/spectacles-strasbourg/revue-scoute"
              className="sub-heading group relative mx-auto mt-sm flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-1 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium hover:before:max-w-full laptop:gap-sm"
            >
              <span>{button}</span>
              <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
            </Link>
          )}
        </div>
      </DivWrapper>
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
      {src ? (
        <DivWrapper
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
            'relative aspect-[5/3] w-1/2 shrink-0 overflow-hidden max-mobile-large:w-full laptop:w-1/2',
            inverted ? 'rounded-r-sm' : 'rounded-l-sm',
            'max-laptop:rounded-sm max-mobile-large:rounded-b-none'
          )}
        >
          <Image src={src} placeholder="blur" alt="image" fill className="object-cover"></Image>
        </DivWrapper>
      ) : (
        <div className="w-1/2 shrink-0 overflow-hidden"></div>
      )}
      <div
        className={cn(
          'heading relative z-10 flex grow flex-col gap-sm overflow-hidden max-mobile-large:bg-white max-mobile-large:text-black mobile-large:bg-primary-400',
          inverted ? 'pr-xl text-end' : 'pl-xl',
          'max-laptop:z-0 max-laptop:overflow-visible max-laptop:pl-sm max-laptop:pr-0 max-mobile-large:pl-sm max-mobile-large:pr-sm max-mobile-large:text-center'
        )}
      >
        <DivWrapper
          variant={
            isLaptop
              ? {
                  hidden: {
                    x: !inverted ? -400 : 400,
                    opacity: 0
                  },
                  enter: {
                    opacity: 1,
                    x: 0,
                    transition: {
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
        </DivWrapper>
        <DivWrapper
          className="sub-heading"
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
        </DivWrapper>

        {button && (
          <Link href="/spectacles-strasbourg/revue-scoute">
            <DivWrapper
              tag="span"
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
              className="sub-heading shadow-primary-sm 0 relative -z-10 mt-sm flex w-fit items-center gap-xs rounded-sm border-b-2 border-r-2 border-black bg-white px-md py-sm text-black laptop:gap-sm laptop:px-lg laptop:py-md"
            >
              {button}
            </DivWrapper>
          </Link>
        )}
      </div>
    </div>
  );
}
