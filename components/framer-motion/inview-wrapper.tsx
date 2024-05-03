'use client';

import { MotionStyle, Variants, motion } from 'framer-motion';

export default function InviewWrapper({
  style,
  variant,
  children,
  className,
  viewport = { once: true, margin: '0px 0px -200px 0px' },
  inverseOnExit,
  id,
  tag = 'div'
}: {
  style?: MotionStyle | undefined;
  variant: Variants;
  children: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
  id?: string;
  tag?: string;
}) {
  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      id={id}
      style={style}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={className}
      variants={variant}
      viewport={viewport}
      whileInView="enter"
      initial="hidden"
      exit={inverseOnExit ? 'exit' : 'hidden'}
    >
      {children}
    </MotionComponent>
  );
}
