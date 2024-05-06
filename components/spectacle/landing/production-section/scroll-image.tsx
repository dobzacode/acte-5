'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollImage({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, smooth: 0.5 });
  const y = useTransform(scrollYProgress, [1, 0.1, 0], [-900, 400, 860]);
  const springY = useSpring(y, { damping: 40 });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <motion.div
      className={cn('absolute right-0 h-[30rem] w-1/3', className)}
      style={{ y: springY }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
