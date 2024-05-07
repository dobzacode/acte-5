import { Spectacle } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default function SpectacleCard({
  spectacle
}: {
  spectacle: Spectacle & { url: string; blurSrc: string };
}) {
  return (
    <li className="card w-full shrink-0 gap-md px-0 pt-0  duration-medium hover:scale-105 hover:shadow-2xl tablet:w-1/3 laptop:w-1/4 laptop-large:w-1/5">
      <Link
        className="flex flex-col gap-md"
        href={`/spectacles-strasbourg/a-laffiche/${spectacle.slug.current}`}
      >
        <div className="relative h-[20rem] w-full">
          <Image
            sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
            alt={spectacle.mainImage.alt ?? ''}
            src={spectacle.url}
            blurDataURL={spectacle.blurSrc}
            fill
            placeholder="blur"
            className="rounded-xs object-cover"
          ></Image>
        </div>
        <p className="sub-heading px-sm text-center font-medium">{spectacle.titre}</p>
      </Link>
    </li>
  );
}
