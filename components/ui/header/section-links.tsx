import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SectionLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="flex h-full">
      <li
        className={cn(
          'relative flex w-[110px] origin-center items-center justify-center overflow-hidden rounded-l-[0.3rem] py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-x-full before:rounded-[5px] before:bg-primary-400 mobile-large:w-[120px] tablet:rounded-l-xs',
          pathname.includes('agence-evenementielle-strasbourg')
            ? 'text-white before:translate-x-0'
            : 'hover:text-black',
          pathname.includes('spectacles-strasbourg') ||
            pathname.includes('agence-evenementielle-strasbourg')
            ? 'before:duration-medium'
            : 'before:duration-medium'
        )}
      >
        <Link scroll={false} href="/agence-evenementielle-strasbourg">
          Événementiel
        </Link>
      </li>
      <li
        className={cn(
          'relative flex w-[80px] origin-center items-center justify-center overflow-hidden rounded-r-[0.3rem] py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-x-full before:rounded-[5px] before:bg-primary-400 mobile-large:w-[90px] tablet:rounded-r-xs',
          pathname.includes('spectacles-strasbourg')
            ? 'text-white before:translate-x-0'
            : 'hover:text-black',
          pathname.includes('spectacles-strasbourg') ||
            pathname.includes('agence-evenementielle-strasbourg')
            ? 'before:duration-medium'
            : 'before:duration-medium'
        )}
      >
        <Link scroll={false} href="/spectacles-strasbourg">
          Spectacle
        </Link>
      </li>
    </ul>
  );
}
