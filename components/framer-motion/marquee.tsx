'use client';

import React from 'react';

import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [0, -13153],
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

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-30">
      <div className="marquee flex items-center bg-primary-400">
        <motion.div className="track" variants={marqueeVariants} animate="animate">
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
