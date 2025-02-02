'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function CategoryPicker({ actualParams }: { actualParams: string }) {
  const router = useRouter();
  return (
    <ul className="[&>li>button]:body flex h-full [&>li]:px-md [&>li]:py-sm max-tablet:[&>li]:px-[0.35rem] max-tablet:[&>li]:py-xs max-mobile-medium:[&>li]:!text-xs">
      <li
        className={cn(
          'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-black',
          actualParams === 'evenementiel' ? 'text-primary' : 'hover:text-black'
        )}
      >
        <button
          onClick={() => {
            router.push('/agence-evenementielle-strasbourg/services?categorie=evenementiel', {
              scroll: false
            });
          }}
        >
          Evenementiel
        </button>
      </li>
      <li
        className={cn(
          'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:translate-y-full before:bg-black',
          actualParams === 'spectacle' ? 'text-primary' : 'hover:text-black'
        )}
      >
        <button
          onClick={() => {
            router.push('/agence-evenementielle-strasbourg/services?categorie=spectacle', {
              scroll: false
            });
          }}
        >
          Spectacle d'entreprise
        </button>
      </li>
      <li
        className={cn(
          'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap py-xs text-default-400 duration-medium before:absolute before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-black',
          actualParams === 'graphisme' ? 'text-primary' : 'hover:text-black'
        )}
      >
        <button
          onClick={() => {
            router.push('/agence-evenementielle-strasbourg/services?categorie=graphisme', {
              scroll: false
            });
          }}
        >
          Design graphique
        </button>
      </li>
    </ul>
  );
}
