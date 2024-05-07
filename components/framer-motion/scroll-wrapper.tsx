'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollWrapper({
  children,
  className,
  tag = 'div',
  inverted = false
}: {
  children: React.ReactNode;
  className?: string;
  tag?: string;
  inverted?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: parentRef,
    target: ref
  });

  const positiveTranslation = useTransform(
    scrollYProgress,
    [0, 0.05, 0.75, 1],
    [0, 0, 0, inverted ? -960 : 960]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.75, 1], [1, 1, 1, 0]);

  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent className={className} parentRef={parentRef}>
      <motion.div
        style={{
          x: useSpring(positiveTranslation, { damping: 20 }),
          overflow: 'hidden',
          opacity: opacity
        }}
        ref={ref}
        className={cn(
          ' card container ml-auto flex h-fit items-center gap-xl rounded-l-sm bg-white p-sm shadow-xl max-tablet:p-md tablet:rounded-l-5xl',
          inverted &&
            'card  ml-0 mr-auto flex-row-reverse rounded-l-none rounded-r-sm shadow-xl tablet:rounded-l-none tablet:rounded-r-5xl'
        )}
      >
        {children}
      </motion.div>
    </MotionComponent>
  );
}
