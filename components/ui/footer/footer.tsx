'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Footer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        '  relative z-40 border-t border-black  border-opacity-10   py-xl ',
        pathname.includes('evenemement') ? 'text-white' : 'text-black'
      )}
    >
      {children}
    </div>
  );
}
