'use client';

import { Variants } from 'framer-motion';

export const ComingFromTopVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -100
  },
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 100
  }
};

export const ComingFromBottomVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -100
  }
};

export const ComingFromLeftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  enter: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 100
  }
};

export const ComingFromRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  enter: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
};

export const FromTopStaggerVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 4
  },
  enter: (i) => ({
    opacity: 1,
    y: 0
  }),
  exit: {
    opacity: 0,
    y: -100
  }
};
