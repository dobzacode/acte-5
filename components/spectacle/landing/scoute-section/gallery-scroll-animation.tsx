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

  const positiveYTranslation = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const negativeYTranslation = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const positiveXTranslation = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const negativeXTranslation = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[3000px] w-full pt-4xl">
      <div className="sticky top-1/2 flex   items-center justify-center ">
        <motion.div
          style={{ scale: scale, x: positiveXTranslation, rotate: positiveRotate, opacity }}
          className=" card absolute mx-auto aspect-square h-[20rem]  origin-center  bg-black"
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, x: negativeXTranslation, rotate: negativeRotate, opacity }}
          className=" card absolute mx-auto aspect-square h-[20rem]  origin-center  bg-black"
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, y: positiveYTranslation, opacity }}
          className=" card absolute mx-auto aspect-square h-[20rem]  origin-center  bg-black"
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, y: negativeYTranslation, opacity }}
          className=" card absolute mx-auto aspect-square h-[20rem]  origin-center  bg-black"
        >
          <Image className="object-cover" src="/placeholder-image.png" fill alt=""></Image>
        </motion.div>
      </div>
    </div>
  );
}
