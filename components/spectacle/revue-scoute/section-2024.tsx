import { ComingFromLeftVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import CustomPortableText from '@/components/sanity/portable-text';
import { sanityFetch } from '@/sanity/lib/fetch';
import { REVUESCOUTEACTUELLE_QUERY, RevueScouteActuelleQueryResponse } from '@/sanity/lib/queries';
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

        <CustomPortableText value={revueScouteActuelle[0].description}></CustomPortableText>
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

      <DistributionSection distribution={revueScouteActuelle[0].distribution}></DistributionSection>
    </section>
  );
}
