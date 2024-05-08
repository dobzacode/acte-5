'use client';

import { Variants, motion } from 'framer-motion';

export default function DivHoverWrapper({
  variant,
  children,
  className
}: {
  variant: Variants;
  children: React.ReactNode;
  inverseOnExit?: boolean;
  className?: string;
}) {
  return (
    <motion.div exit="exit" className={className} variants={variant} whileHover="hover">
      {children}
    </motion.div>
  );
}
