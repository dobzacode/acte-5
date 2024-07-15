import BrandLogo from '@/public/assets/brand/logo.svg';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width, height }: LogoProps) {
  return (
    <Link scroll={false} href="/">
      <BrandLogo width={width} height={height} className={className} />
    </Link>
  );
}
