'use client';

import { Variants, motion } from 'framer-motion';

export default function InViewWrapper({
  variant,
  children,
  className,
  viewport,
  inverseOnExit
}: {
  variant: Variants;
  children: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
}) {
  return (
    <motion.div
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
