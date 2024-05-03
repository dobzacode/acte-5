'use client';

import { motion } from 'framer-motion';
import React from 'react';

const marqueeVariants = {
  animate: {
    x: [0, '-200rem'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear'
      }
    }
  }
};

const marqueeInvertedVariants = {
  animate: {
    x: ['-200rem', '0rem'], // Inversion des valeurs de déplacement
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear'
      }
    }
  }
};

const Marquee = ({ children, inverted }: { children: React.ReactNode; inverted?: boolean }) => {
  return (
    <div className="relative z-30">
      <div className="marquee flex h-fit items-center bg-primary-400  py-2xl tablet:py-3xl laptop-large:py-4xl">
        <motion.div
          className="track h-fit"
          variants={inverted ? marqueeInvertedVariants : marqueeVariants}
          animate="animate"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
