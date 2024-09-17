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
        'relative z-20 flex h-fit w-full items-center justify-center overflow-hidden bg-black pl-md mobile-medium:pl-md mobile-large:pl-lg tablet:pl-xl laptop:pl-0',
        className
      )}
    >
      <AnimatedPart isSpectacle={isSpectacle}></AnimatedPart>
    </section>
  );
}
