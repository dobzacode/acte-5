import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SectionLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex h-full w-full">
      <li
        className={cn(
          'relative flex w-[120px] origin-center justify-center overflow-hidden rounded-l-xs  text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-200  before:to-primary-50  ',
          pathname.includes('evenement') && 'text-black before:translate-x-0',
          pathname.includes('spectacle') || pathname.includes('evenement')
            ? 'before:duration-medium'
            : ''
        )}
      >
        <Link href="/evenement">Evenementiel</Link>
      </li>
      <li
        className={cn(
          'relative flex w-[90px] origin-center justify-center overflow-hidden rounded-r-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-200 before:to-primary-50  hover:text-black',
          pathname.includes('spectacle') && 'text-black before:translate-x-0',
          pathname.includes('spectacle') || pathname.includes('evenement')
            ? 'before:duration-medium'
            : ''
        )}
      >
        <Link href="/spectacle">Spectacle</Link>
      </li>
    </ul>
  );
}
