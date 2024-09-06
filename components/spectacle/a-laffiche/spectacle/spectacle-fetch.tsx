import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SPECTACLE_QUERY, SpectacleQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import SpectacleCalendar from './spectacle-calendar';
import SpectacleContent from './spectacle-content';

export default async function SpectacleFetch({ params }: { params: { spectacle: string } }) {
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
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-xl mobile-large:gap-2xl laptop:max-w-[50rem]">
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={spectacle.titre.toUpperCase()}
          element={[
            { text: 'Spectacle', href: '/spectacles-strasbourg' },
            { text: "A l'affiche", href: '/spectacles-strasbourg/a-laffiche' },
            { text: spectacle.titre, href: spectacle.slug.current }
          ]}
        ></TitleSection>
        <DivWrapper
          className="flex flex-col gap-2xl overflow-hidden laptop:container mobile-large:gap-xl laptop:mx-auto"
          variant={ComingFromRightVariant}
          inverseOnExit={false}
        >
          <SpectacleContent spectacle={spectacle} />
        </DivWrapper>
        {spectacle?.dates && (
          <section className="inner-section-gap flex flex-col place-self-start">
            <InviewWrapper
              className="heading--large text-primary-400"
              tag="h3"
              variant={ComingFromLeftVariant}
            >
              Calendrier des dates
            </InviewWrapper>

            <SpectacleCalendar
              dates={spectacle?.dates.map((date) => ({
                ...date,
                type: 'Spectacle',
                titre: spectacle.titre
              }))}
            ></SpectacleCalendar>
          </section>
        )}
      </section>
    </>
  );
}
