import Link from 'next/link';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default async function NotFound() {
  return (
    <main className="flex   min-h-[calc(100vh-11.7rem)] flex-col items-center  justify-center  px-lg py-lg">
      <section className="flex flex-col items-center justify-center gap-md">
        <h1 className="font-[Quasimoda] text-4xl font-bold leading-3xl">404</h1>
        <p className="body max-w-[400px] text-center">
          La page que vous recherchez n&apos;existe pas. Veuillez vérifier l&apos;URL ou revenir à
          la page d&apos;accueil.
        </p>
        <Link
          className="sub-heading shadow-primary-sm 0 flex w-fit items-center gap-xs rounded-sm   bg-primary-400 px-md py-sm text-white laptop:gap-sm laptop:px-lg laptop:py-md "
          href="/"
        >
          RETOUR À LA PAGE D&apos;ACCUEIL
        </Link>
      </section>
    </main>
  );
}
