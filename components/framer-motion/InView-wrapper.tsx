'use client';

import { MotionStyle, Variants, motion } from 'framer-motion';

export default function InviewWrapper({
  style,
  variant,
  children,
  className,
  viewport,
  inverseOnExit,
  id
}: {
  style?: MotionStyle | undefined;
  variant: Variants;
  children: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
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
