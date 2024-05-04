'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Stake({}) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: [-0.15, 1.25] });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={targetRef}
      className="absolute left-1/2 top-0 z-20 h-full -translate-x-1/2 overflow-hidden rounded-full bg-white px-sm"
    >
      <motion.div
        style={{ height }}
        className="absolute left-0 top-0 z-20 w-full rounded-b-[0.3rem] bg-black"
      ></motion.div>
    </div>
  );
}
