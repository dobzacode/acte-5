'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import pic1 from '/public/assets/spectacle/landing/scoute_1.jpg';
import pic2 from '/public/assets/spectacle/landing/scoute_2.jpg';
import pic3 from '/public/assets/spectacle/landing/scoute_3.jpg';

export default function GalleryScrollAnimation({}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0.40', '1.33 1'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const positiveRotate = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const negativeRotate = useTransform(scrollYProgress, [0, 1], [-1, -30]);

  const positiveYTranslation = useTransform(scrollYProgress, [0, 0.7, 1], ['0', '30vw', '50vw']);
  const negativeYTranslation = useTransform(scrollYProgress, [0, 0.7, 1], ['0', '-30vw', '-50vw']);

  const positiveXTranslation = useTransform(scrollYProgress, [0, 0.7, 1], ['0vw', '50vw', '60vw']);
  const negativeXTranslation = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ['0vw', '-50vw', '-60vw']
  );

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div ref={ref} className="relative -z-10 h-[2000px] w-full pt-5xl max-tablet:hidden">
      <div className="sticky top-1/2 flex items-center justify-center">
        <motion.div
          style={{ scale: scale, x: positiveXTranslation, rotate: positiveRotate, opacity }}
          className="absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm"
        >
          <Image
            className="object-cover"
            src={pic3}
            placeholder="blur"
            sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
            fill
            alt="Photo de spectacle"
          ></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, x: negativeXTranslation, rotate: negativeRotate, opacity }}
          className="absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm"
        >
          <Image
            className="object-cover"
            src={pic2}
            placeholder="blur"
            fill
            alt="Photo de spectacle"
          ></Image>
        </motion.div>

        <motion.div
          style={{ scale: scale, y: positiveYTranslation, opacity }}
          className="absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm"
        >
          <Image
            className="object-cover"
            src={pic1}
            placeholder="blur"
            fill
            alt="Photo de spectacle"
          ></Image>
        </motion.div>
        <motion.div
          style={{ scale: scale, y: negativeYTranslation, opacity }}
          className="absolute mx-auto aspect-square h-[20rem] origin-center overflow-hidden rounded-sm"
        >
          <Image
            className="object-cover"
            src="/assets/spectacle/landing/scoute_6.jpg"
            fill
            alt="Photo de spectacle"
          ></Image>
        </motion.div>
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, 1]),
            scale: useTransform(scrollYProgress, [0, 0.1, 1], [0.8, 0.8, 1])
          }}
          className="absolute -z-10 mx-auto mb-6xl mt-5 text-center text-black"
        >
          <p className="sub-heading max-w-[50ch] text-pretty">
            Le plus grand cabaret satirique d&apos;alsace se moque de tout et de tout le monde
            depuis plus de 40 ans dans un spectacle unique en Français.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
