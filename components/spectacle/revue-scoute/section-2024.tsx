import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import CustomPortableText from '@/components/sanity/portable-text';
import { decodeAssetId } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { REVUESCOUTEACTUELLE_QUERY, RevueScouteActuelleQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import DateTable from '../landing/scoute-section/date-table';
import DistributionSection from './distribution-section';

export default async function Section2024() {
  const revueScouteActuelle = await sanityFetch<RevueScouteActuelleQueryResponse>({
    query: REVUESCOUTEACTUELLE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!revueScouteActuelle) {
    return notFound();
  }

  let mainUrl;
  try {
    const { width, height } = decodeAssetId(revueScouteActuelle[0].mainImage?.asset._ref);
    mainUrl = await urlForImage(revueScouteActuelle[0].mainImage)
      .width(width)
      .height(height)
      .dpr(2)
      .quality(80)
      .url();
  } catch (e) {
    console.error(e);
    mainUrl = null;
  }

  return (
    <section className="section-px main-gap flex flex-col laptop:container laptop:mx-auto">
      <section className="inner-section-gap flex flex-col">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          {revueScouteActuelle[0].titre}
        </InviewWrapper>
        <div className="inner-section-gap flex w-full max-laptop:flex-col">
          {mainUrl && (
            <InviewWrapper
              variant={ComingFromLeftVariant}
              className="relative h-fit shrink-0 overflow-hidden rounded-xs laptop:w-1/3"
            >
              <Image
                src={mainUrl}
                sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, 90vw'}
                alt={revueScouteActuelle[0].mainImage.alt ?? ''}
                className="h-full w-full"
                width={800}
                height={800}
              ></Image>
            </InviewWrapper>
          )}
          <InviewWrapper variant={ComingFromRightVariant} className="w-full">
            <CustomPortableText
              textSize="laptop-large:sub-heading body"
              value={revueScouteActuelle[0].description}
            ></CustomPortableText>
          </InviewWrapper>
        </div>
      </section>
      <section className="inner-section-gap flex flex-col">
        <InviewWrapper
          className="heading--sub-extra-large text-primary-400"
          tag="h2"
          variant={ComingFromLeftVariant}
        >
          Les dates
        </InviewWrapper>
        <DateTable stops={revueScouteActuelle[0].date}></DateTable>
      </section>

      <DistributionSection distribution={revueScouteActuelle[0].distribution}></DistributionSection>
    </section>
  );
}
