'use client';

import { MotionStyle, Variants, motion } from 'framer-motion';

export default function InviewWrapper({
  style,
  variant,
  children,
  className,
  viewport,
  inverseOnExit
}: {
  style?: MotionStyle | undefined;
  variant: Variants;
  children: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
}) {
  return (
    <motion.div
    style={style}
      initial="hidden"
      exit={inverseOnExit ? 'exit' : 'hidden'}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={className}
      variants={variant}
      viewport={viewport}
      whileInView="enter"
    >
      {children}
    </motion.div>
  );
}
