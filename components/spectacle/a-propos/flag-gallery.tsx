'use client';

import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import Image from 'next/image';

export default function FlagGallery({ inverted }: { inverted?: boolean }) {
  return (
    <div className="flex h-full w-full">
      <div className="relative flex  w-1/2 flex-row-reverse items-center">
        <InviewWrapper
          variant={{
            hidden: {
              opacity: 0,
              x: !inverted ? 400 : -400
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
              x: !inverted ? 400 : -400
            }
          }}
          className="relative"
        >
          <Image
            src="/placeholder-image.png"
            alt="image"
            className="relative z-10 shrink-0 rounded-sm"
            width={400}
            height={400}
          ></Image>
        </InviewWrapper>
        <Image
          src="/placeholder-image.png"
          alt="image"
          className="relative z-10 h-fit rounded-sm"
          width={300}
          height={300}
        ></Image>
        <Image
          src="/placeholder-image.png"
          alt="image"
          className="relative z-10 h-fit rounded-sm"
          width={300}
          height={300}
        ></Image>
        <Image
          src="/placeholder-image.png"
          alt="image"
          className="relative z-10 h-fit rounded-sm"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="relative z-10 h-full w-1/2 bg-primary-400 py-8xl"></div>
    </div>
  );
}
