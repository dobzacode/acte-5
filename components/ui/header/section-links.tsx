import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SectionLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/evenement"
        className={cn(
          'transition-medium relative flex w-[110px] origin-center justify-center overflow-hidden rounded-l-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-50  before:to-primary-100  before:duration-medium',
          pathname.includes('evenement') && 'text-black before:translate-x-0'
        )}
      >
        Evenementiel
      </Link>
      <Link
        href="/spectacle"
        className={cn(
          'transition-medium relative flex w-[80px] origin-center justify-center overflow-hidden rounded-r-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-50 before:to-primary-100  before:duration-medium  hover:text-black',
          pathname.includes('spectacle') && 'text-black before:translate-x-0'
        )}
      >
        Spectacle
      </Link>
    </>
  );
}
