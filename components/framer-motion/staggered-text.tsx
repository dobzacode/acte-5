'use client';

import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';

interface StaggeredTextProps {
  children: string;
  className?: string;
  variant: Variants;
  staggerValue?: number;
  once?: boolean;
  margin?: string;
  delay?: number;
}

export default function StaggeredText({
  children,
  className,
  variant,
  staggerValue = 0.05,
  once = true,
  margin,
  delay = 0
}: StaggeredTextProps) {
  return (
    <motion.p
      transition={{ staggerChildren: staggerValue, delayChildren: delay }}
      initial="hidden"
      whileInView="enter"
      viewport={{ once: once, margin: margin }}
      exit="exit"
      className={cn(className)}
    >
      {children.split(' ').map((word) => {
        return (
          <span className="inline-block">
            {word.split('').map((char, index) => {
              return (
                <motion.span className="inline-block" variants={variant} key={char + '-' + index}>
                  {char}
                </motion.span>
              );
            })}
            <span className="inline-block">&nbsp;</span>
          </span>
        );
      })}
    </motion.p>
  );
}
