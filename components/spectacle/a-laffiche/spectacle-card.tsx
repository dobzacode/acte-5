import DivWrapper from '@/components/framer-motion/div-wrapper';
import { Spectacle } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default function SpectacleCard({
  spectacle,
  index
}: {
  spectacle: Spectacle & { url: string; blurSrc: string };
  index: number;
}) {
  return (
    <DivWrapper
      tag="li"
      variant={{
        hidden: {
          opacity: 0,
          y: 300,
          pointerEvents: 'none'
        },
        enter: {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          transition: {
            opacity: { duration: 0.2, delay: 1.5 + index * 0.3 },
            pointerEvents: { delay: 1.5 + index * 0.3 },
            y: { duration: 0.3, delay: 1.5 + index * 0.3 }
          }
        },
        exit: {
          opacity: 0,
          y: 300,
          transition: {
            y: { duration: 0.2, delay: index * 0.3 }
          }
        }
      }}
      className="card h-fit w-full shrink-0 gap-md px-0 pt-0 duration-medium hover:scale-105 hover:shadow-2xl tablet:w-1/3 laptop:w-1/4 laptop-large:w-1/5"
    >
      <Link
        scroll={false}
        className="flex flex-col gap-md"
        href={`/spectacles-strasbourg/a-laffiche/${spectacle.slug.current}`}
      >
        <div className="relative aspect-square h-[20rem]">
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
    </DivWrapper>
  );
}
