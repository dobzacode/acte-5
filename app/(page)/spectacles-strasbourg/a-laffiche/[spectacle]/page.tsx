import { SPECTACLES_QUERY, SPECTACLE_QUERY, SpectacleQueryResponse } from '@/sanity/lib/queries';

import { ComingFromBottomVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import SpectacleContent from '@/components/spectacle/a-laffiche/spectacle/spectacle-content';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

type Props = {
  params: { spectacle: string };
};

export async function generateStaticParams() {
  const spectacles = await sanityFetch<{ spectacle: string }[]>({
    query: `${SPECTACLES_QUERY}{"spectacle": slug.current}`,
    perspective: 'published',
    stega: false
  });

  return spectacles;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const spectacle = await sanityFetch<SpectacleQueryResponse>({
    query: SPECTACLE_QUERY,
    params: { slug: params.spectacle },
    stega: false
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(spectacle?.mainImage);

  return {
    title: spectacle?.metatitre,
    description: spectacle?.metadescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const spectacle = await sanityFetch<SpectacleQueryResponse>({
    query: SPECTACLE_QUERY,
    params: { slug: params.spectacle },
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacle) {
    return notFound();
  }

  return (
    <>
      <main className="relative mx-auto flex flex-col items-center justify-center gap-2xl px-0 pt-5xl laptop:pt-7xl">
        <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
          <TitleSection
            className="px-0"
            title={spectacle.titre.toUpperCase()}
            element={[
              { text: 'Spectacle', href: '/spectacles-strasbourg' },
              { text: 'A l"affiche', href: '/a-laffiche' },
              { text: spectacle.titre, href: spectacle.slug.current }
            ]}
          ></TitleSection>
          <DivWrapper
            className="flex flex-col gap-2xl  overflow-hidden laptop:container mobile-large:gap-xl laptop:mx-auto"
            variant={ComingFromBottomVariant}
            inverseOnExit={false}
          >
            <SpectacleContent spectacle={spectacle} />
          </DivWrapper>
        </section>
      </main>
    </>
  );
}