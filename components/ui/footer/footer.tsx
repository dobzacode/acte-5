'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import FooterContent from './footer-content';

export default function Footer() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'mx-auto  px-xl py-4xl tablet:container',
        pathname.includes('evenemement') ? 'text-white' : 'text-black'
      )}
    >
      <FooterContent></FooterContent>
    </div>
  );
}
