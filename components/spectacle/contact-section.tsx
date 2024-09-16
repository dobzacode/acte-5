import { cn } from '@nextui-org/react';
import AnimatedPart from './animated-part.tsx';

export default function ContactSection({
  isSpectacle = false,
  className
}: {
  isSpectacle?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative z-20 flex h-fit w-full items-center justify-center overflow-hidden bg-black mobile-large:rounded-tl-4xl tablet:rounded-tl-6xl laptop:rounded-tl-8xl',
        className
      )}
    >
      <AnimatedPart isSpectacle={isSpectacle}></AnimatedPart>
    </section>
  );
}
