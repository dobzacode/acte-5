'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Footer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'mx-auto  px-xl py-4xl tablet:container',
        pathname.includes('evenemement') ? 'text-white' : 'text-black'
      )}
    >
      {children}
    </div>
  );
}
