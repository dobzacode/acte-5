'use client';

import { MotionValue, useTransform } from 'framer-motion';

export default function UseParallax(value: MotionValue, distance: number | string) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
