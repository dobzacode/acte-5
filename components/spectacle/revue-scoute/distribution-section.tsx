import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { decodeAssetId, notEmpty } from '@/lib/utils';
import { DistributionItem } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';

export default async function DistributionSection({
  distribution
}: {
  distribution: DistributionItem[];
}) {
  const withUrl =
    (await Promise.all(
      distribution.map(async (item) => {
        try {
          const { width, height } = decodeAssetId(item.picture.asset._ref);
          const url = await urlForImage(item.picture)
            .width(width)
            .height(height)
            .dpr(2)
            .quality(80)
            .url();
          const blurSrc = urlForImage(item.picture).width(20).quality(20).url();
          return { ...item, blurSrc, url };
        } catch (e) {
          return null;
        }
      })
    )) ?? [];

  const imageArr = withUrl.filter(notEmpty);

  return (
    <section className="inner-section-gap flex w-full flex-col">
      <InviewWrapper
        className="heading--sub-extra-large text-primary-400"
        tag="h2"
        variant={ComingFromLeftVariant}
      >
        Les artistes
      </InviewWrapper>
      <ul className="relative -z-10 grid w-full grid-cols-3 items-center gap-sm mobile-large:gap-lg tablet:grid-cols-4 laptop-large:grid-cols-5">
        {imageArr.map((people, index) => {
          return (
            <InviewWrapper
              key={people._key}
              tag="li"
              style={{ zIndex: 30 - index }}
              variant={{
                hidden: {
                  opacity: 0,
                  y: 200
                },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    y: { delay: 0.5 + index * 0.05, type: 'spring', damping: 20 },
                    opacity: { duration: 0.2, delay: 0.5 + index * 0.05 }
                  }
                },
                exit: {
                  opacity: 0,
                  y: 200
                }
              }}
              className="card relative flex h-full w-full flex-col gap-md overflow-hidden px-0 pt-0"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                  blurDataURL={people.blurSrc}
                  placeholder="blur"
                  src={people.url}
                  alt="image"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <div className="flex flex-col gap-xs">
                <p className="sub-heading px-sm text-center">{people.nom}</p>
                {people.role && (
                  <p className="body px-sm text-center font-medium text-black/50 max-laptop:text-xs">
                    {people.role}
                  </p>
                )}
              </div>
            </InviewWrapper>
          );
        })}
      </ul>
    </section>
  );
}
