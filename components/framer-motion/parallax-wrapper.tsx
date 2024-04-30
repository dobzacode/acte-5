'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxWrapper({
  children,
  className,
  isNegative = true,
  factor = 600,
  offset = ['0 1', '1 0']
}: {
  children: React.ReactNode;
  className?: string;
  isNegative?: boolean;
  factor?: number;
  offset?: [string, string];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as any });
  const translation = useTransform(
    scrollYProgress,
    [0, 1],
    isNegative ? [0, -factor] : [0, factor]
  );

  return (
    <motion.div className={className} ref={ref} style={{ y: translation }}>
      {children}
    </motion.div>
  );
}
