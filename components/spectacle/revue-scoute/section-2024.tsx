import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import CustomPortableText from '@/components/sanity/portable-text';
import { sanityFetch } from '@/sanity/lib/fetch';
import { REVUESCOUTEACTUELLE_QUERY, RevueScouteActuelleQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import DateTable from '../landing/scoute-section/date-table';

export default async function Section2024() {
  const revueScouteActuelle = await sanityFetch<RevueScouteActuelleQueryResponse>({
    query: REVUESCOUTEACTUELLE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!revueScouteActuelle) {
    return notFound();
  }

  return (
    <section
      className="section-px flex flex-col
    gap-6xl laptop:container laptop:mx-auto "
    >
      <section className=" flex flex-col gap-xl ">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          {revueScouteActuelle[0].titre}
        </InviewWrapper>
        <div className="relative h-[30rem] w-full overflow-hidden rounded-sm">
          <Image src="/placeholder-image.png" fill alt="image" className="object-cover"></Image>
        </div>
        <p className="sub-heading text-pretty">
          {<CustomPortableText value={revueScouteActuelle[0].description}></CustomPortableText>}
        </p>
      </section>
      <section className=" flex flex-col gap-xl ">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Les dates
        </InviewWrapper>
        <DateTable stops={revueScouteActuelle[0].date}></DateTable>
      </section>
      <section className=" flex w-full flex-col gap-xl ">
        <InviewWrapper
          className="heading--sub-extra-large  text-primary-400 "
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Distribution
        </InviewWrapper>
        <ul className="flex w-full flex-wrap items-center  gap-md">
          {revueScouteActuelle[0].distribution.map(async (people, index) => {
            const url = await urlForImage(people.picture)
              .width(1920)
              .height(1080)
              .dpr(2)
              .quality(80)
              .url();
            const blurSrc = urlForImage(people.picture).width(20).quality(20).url();
            return (
              <InviewWrapper
                key={index}
                tag="li"
                style={{ zIndex: 20 - index }}
                variant={{
                  hidden: {
                    opacity: 0,
                    y: -200
                  },
                  enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      y: { delay: 0.5 + index * 0.1, type: 'spring', damping: 20 },
                      opacity: { duration: 0.2, delay: 0.5 + index * 0.1 }
                    }
                  },
                  exit: {
                    opacity: 0,
                    y: -200
                  }
                }}
                className="card relative flex max-w-[13rem]  flex-col gap-md overflow-hidden px-0 pt-0"
              >
                <div className="relative h-[15rem] w-[13rem]">
                  <Image
                    blurDataURL={blurSrc}
                    placeholder="blur"
                    src={url}
                    alt="image"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <p className="sub-heading px-sm text-center">{people.nom}</p>
              </InviewWrapper>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
