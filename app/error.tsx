'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-lg py-lg">
      <section className="flex flex-col items-center justify-center gap-md">
        <h1 className="font-[Quasimoda] text-4xl font-bold leading-3xl">500</h1>
        <p className="body max-w-[400px] text-center">
          Oops, une erreur est survenue. Veuillez vérifier l&apos;URL ou revenir à la page
          d&apos;accueil.
        </p>

        <Link
          className="body shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm bg-primary-400 px-md py-sm text-white laptop:gap-sm"
          href="/"
        >
          Retour à la page d&apos;accueil
        </Link>
      </section>
    </main>
  );
}
