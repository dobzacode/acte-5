import { Spectacle } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default function SpectacleCard({
  spectacle
}: {
  spectacle: Spectacle & { url: string; blurSrc: string };
}) {
  return (
    <li className="card flex w-1/6 flex-col gap-md px-0 pt-0">
      <Link href={`/spectacles-strasbourg/a-laffiche/${spectacle.slug.current}`}>
        <div className="relative h-[20rem] w-full">
          <Image
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
