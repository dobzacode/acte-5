'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function GalleryScrollAnimation({}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0.40', '1.33 1'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const positiveRotate = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const negativeRotate = useTransform(scrollYProgress, [0, 1], [-1, -30]);

  const positiveYTranslation = useTransform(scrollYProgress, [0, 0.7, 1], [0, 600, 1000]);
  const negativeYTranslation = useTransform(scrollYProgress, [0, 0.7, 1], [0, -600, -1000]);

  const positiveXTranslation = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1000, 1200]);
  const negativeXTranslation = useTransform(scrollYProgress, [0, 0.7, 1], [0, -1000, -1200]);

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[2000px] w-full pt-4xl">
      <div className="sticky top-1/2 flex   items-center justify-center ">
        <motion.div
          style={{ scale: scale, x: positiveXTranslation, rotate: positiveRotate, opacity }}
          className=" absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm  "
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, x: negativeXTranslation, rotate: negativeRotate, opacity }}
          className=" absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm  "
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>

        <motion.div
          style={{ scale: scale, y: positiveYTranslation, opacity }}
          className=" absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm  "
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, y: negativeYTranslation, opacity }}
          className=" absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm  "
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
      </div>
    </div>
  );
}
