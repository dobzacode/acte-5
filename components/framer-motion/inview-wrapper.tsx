'use client';

import { MotionStyle, Variants, motion } from 'framer-motion';

export default function InviewWrapper({
  style,
  variant,
  children,
  className,
  viewport = { once: true, margin: '0px 0px 0px 0px' },
  inverseOnExit,
  id,
  tag = 'div',
  noExit,
  whileHover,
  ref,
  custom
}: {
  style?: MotionStyle | undefined;
  variant: Variants | undefined;
  children: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
  id?: string;
  tag?: string;
  noExit?: boolean;
  whileHover?: any;
  ref?: any;
  custom?: number;
}) {
  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      ref={ref}
      id={id}
      style={style}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={className}
      variants={variant}
      viewport={viewport}
      whileInView="enter"
      initial="hidden"
      whileHover={whileHover}
      exit={() => {
        if (noExit) return;
        return inverseOnExit ? 'exit' : 'hidden';
      }}
      custom={custom}
    >
      {children}
    </MotionComponent>
  );
}
