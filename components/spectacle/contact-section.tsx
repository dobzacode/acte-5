'use client';

import { cn } from '@nextui-org/react';

import { useRouter } from 'next/navigation.js';
import AnimatedPart from './animated-part.tsx';

export default function ContactSection({
  isSpectacle = false,
  className
}: {
  isSpectacle?: boolean;
  className?: string;
}) {
  const router = useRouter();

  return (
    <section
      className={cn(
        'relative z-20 flex h-fit w-full items-center justify-center overflow-hidden bg-black pl-md mobile-medium:pl-md mobile-large:pl-lg tablet:pl-xl laptop:pl-0',
        className
      )}
    >
      <AnimatedPart key={`animation-${router}`} isSpectacle={isSpectacle}></AnimatedPart>
    </section>
  );
}
