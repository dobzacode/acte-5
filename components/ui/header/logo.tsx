'use client';

import BrandLogo from '@/public/assets/brand/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width, height }: LogoProps) {
  const pathname = usePathname();

  const href = () => {
    switch (true) {
      case pathname.includes('agence-evenementielle-strasbourg'):
        return '/agence-evenementielle-strasbourg';
      case pathname.includes('spectacles-strasbourg'):
        return '/spectacles-strasbourg';
      default:
        return '/';
    }
  };

  return (
    <Link href={href()}>
      <BrandLogo width={width} height={height} className={className} />
    </Link>
  );
}
