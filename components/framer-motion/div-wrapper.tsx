'use client';

import { Variants, motion } from 'framer-motion';

export default function DivWrapper({
  variant,
  children,
  inverseOnExit = false,
  className,
  tag = 'div',
  style,
  noExit = false,
  initial
}: {
  variant: Variants;
  children: React.ReactNode;
  inverseOnExit?: boolean;
  className?: string;
  tag?: string;
  style?: React.CSSProperties;
  noExit?: boolean;
  initial?: string;
}) {
  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      style={style}
      className={className}
      transition={{ duration: 1, ease: 'easeInOut' }}
      variants={variant}
      initial={initial ? initial : 'hidden'}
      exit={() => {
        if (noExit) return;
        return inverseOnExit ? 'exit' : 'hidden';
      }}
      animate="enter"
    >
      {children}
    </MotionComponent>
  );
}
