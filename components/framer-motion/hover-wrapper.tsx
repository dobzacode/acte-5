'use client';

import { Variants, motion } from 'framer-motion';

export default function DivHoverWrapper({
  variant,
  children,
  className,
  tag = 'div'
}: {
  variant: Variants;
  children: React.ReactNode;
  inverseOnExit?: boolean;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}) {
  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      initial="hidden"
      animate="enter"
      exit="exit"
      className={className}
      variants={variant}
      whileHover="hover"
    >
      {children}
    </MotionComponent>
  );
}
