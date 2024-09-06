'use client';

import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import { v4 } from 'uuid';

interface StaggeredTextProps {
  children: string;
  className?: string;
  variant: Variants;
  staggerValue?: number;
  once?: boolean;
  margin?: string;
  delay?: number;
  inview?: boolean;
}

export default function StaggeredText({
  children,
  className,
  variant,
  staggerValue = 0.05,
  once = true,
  margin,
  delay = 0,
  inview = true
}: StaggeredTextProps) {
  return (
    <motion.p
      transition={{ staggerChildren: staggerValue, delayChildren: delay }}
      initial="hidden"
      whileInView={inview ? undefined : 'enter'}
      animate={inview ? 'enter' : undefined}
      viewport={{ once: once, margin: margin }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={cn(className, 'h-fit')}
    >
      {children.split(' ').map((word) => {
        return (
          <span key={`${word}-word-${v4()}`} className="inline-block">
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
