import DivHoverWrapper from '@/components/framer-motion/hover-wrapper';
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
    <DivHoverWrapper
      tag="li"
      variant={{
        hover: {
          scale: 1.03,
          transition: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        },
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
            opacity: { duration: 0.2, delay: index * 0.3 },
            pointerEvents: { delay: index * 0.3 },
            y: { duration: 0.3, delay: index * 0.3 }
          }
        },
        exit: {
          opacity: 0,
          transition: {
            y: { duration: 0.2, delay: index * 0.3 }
          }
        }
      }}
      className="card mb-auto h-fit w-full shrink-0 gap-md overflow-hidden rounded-xs px-0 py-0"
    >
      <Link
        className="flex h-fit flex-col gap-md"
        href={`/spectacles-strasbourg/a-laffiche/${spectacle.slug.current}`}
      >
        <Image
          sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
          alt={spectacle.mainImage.alt ?? ''}
          src={spectacle.url}
          blurDataURL={spectacle.blurSrc}
          width={400}
          height={400}
          placeholder="blur"
          className="object-cover"
        ></Image>
      </Link>
    </DivHoverWrapper>
  );
}
