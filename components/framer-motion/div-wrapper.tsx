'use client';

import { Variants, motion } from 'framer-motion';

export default function DivWrapper({
  variant,
  children,
  inverseOnExit = false,
  className
}: {
  variant: Variants;
  children: React.ReactNode;
  inverseOnExit?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      transition={{ duration: 1, ease: 'easeInOut' }}
      variants={variant}
      initial="hidden"
      exit={inverseOnExit ? 'exit' : 'hidden'}
      animate="enter"
    >
      {children}
    </motion.div>
  );
}
