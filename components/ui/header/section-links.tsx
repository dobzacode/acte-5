import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SectionLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="flex h-full ">
      <li
        className={cn(
          'relative flex w-[100px] origin-center justify-center overflow-hidden rounded-l-xs  text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-200 before:to-primary-50 mobile-large:w-[120px]  ',
          pathname.includes('agence-evenementielle-strasbourg') &&
            'text-black before:translate-x-0',
          pathname.includes('spectacle') || pathname.includes('agence-evenementielle-strasbourg')
            ? 'before:duration-medium'
            : ''
        )}
      >
        <Link href="/agence-evenementielle-strasbourg">Evenementiel</Link>
      </li>
      <li
        className={cn(
          'relative flex w-[80px] origin-center justify-center overflow-hidden rounded-r-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-x-full before:rounded-xs before:bg-gradient-to-t before:from-primary-200 before:to-primary-50 hover:text-black  mobile-large:w-[90px]',
          pathname.includes('spectacles-strasbourg') && 'text-black before:translate-x-0',
          pathname.includes('spectacles-strasbourg') ||
            pathname.includes('agence-evenementielle-strasbourg')
            ? 'before:duration-medium'
            : ''
        )}
      >
        <Link href="/spectacles-strasbourg">Spectacle</Link>
      </li>
    </ul>
  );
}
