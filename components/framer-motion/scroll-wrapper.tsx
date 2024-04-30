'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollWrapper({
  children,
  ref,
  className,
  startPosition,
  endPosition = 0,
  reveal
}: {
  children: React.ReactNode;
  ref: React.RefObject<HTMLUListElement>;
  className?: string;
  startPosition: number;
  endPosition?: number;
  reveal: string;
}) {
  const childrenRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: childrenRef,
    container: ref,
    offset: ['end end', 'start start'],
    smooth: 20
  });
  const positiveTranslation = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [startPosition, startPosition / 20, 0, 0]
  );

  const revealValue = useTransform(scrollYProgress, [0.95, 1], ['0%', '100%']);
  const springValue = useSpring(revealValue, { damping: 20, stiffness: 100 });

  return (
    <motion.div
      className={className}
      ref={childrenRef}
      style={{ x: positiveTranslation, overflow: 'hidden' }}
    >
      {children}
      <motion.p style={{ height: springValue }}>{reveal}</motion.p>
    </motion.div>
  );
}
