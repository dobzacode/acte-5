'use client';

import UiButton from '@/components/ui/ui-button';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex   min-h-[calc(100vh-11.7rem)] flex-col items-center  justify-center  px-lg py-lg">
      <section className="flex flex-col items-center justify-center gap-md">
        <h1 className="text-4xl font-bold leading-3xl">500</h1>
        <p className="body max-w-[400px] text-center">
          Oops, une erreur est survenue. Veuillez vérifier l&apos;URL ou revenir à la page
          d&apos;accueil.
        </p>
        <UiButton variant="solid" color="primary">
          <Link href="/">RETOUR À LA PAGE D&apos;ACCUEIL</Link>
        </UiButton>
      </section>
    </main>
  );
}
