'use client';

import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Flag({ inverted, className }: { inverted?: boolean; className?: string }) {
  const viewport = { once: true, margin: '0px 0px -400px 0px' };
  return (
    <div
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
        className="relative z-10 aspect-[5/2] w-1/2 overflow-hidden rounded-l-sm"
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
}
