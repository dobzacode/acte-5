import { sanityFetch } from '@/sanity/lib/fetch';
import { EVENT_QUERY, EventQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { ComingFromRightVariant } from '../../../framer-motion/div-variants';
import DivWrapper from '../../../framer-motion/div-wrapper';
import TitleSection from '../../../ui/title-section';
import LastEvent from '../../nos-services/last-event-image';
import Project from './project';

export default async function ProjectpageContent({ params }: { params: { projet: string } }) {
  const project = await sanityFetch<EventQueryResponse>({
    query: EVENT_QUERY,
    params: { slug: params.projet },
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!project) {
    return notFound();
  }

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center gap-2xl px-0 pt-5xl laptop:pt-7xl">
      <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl laptop:max-w-[50rem]">
        <TitleSection
          className="px-0"
          h1Css={'heading--sub-extra-large'}
          title={project.titre.toUpperCase()}
          element={[
            { text: 'Evenement', href: '/agence-evenementielle-strasbourg' },
            { text: 'Projets', href: '/agence-evenementielle-strasbourg/projets' },
            { text: project.titre, href: project.slug.current }
          ]}
        ></TitleSection>
        <DivWrapper
          className="flex flex-col gap-2xl overflow-hidden laptop:container mobile-large:gap-3xl laptop:mx-auto"
          variant={ComingFromRightVariant}
          inverseOnExit={false}
        >
          <Project project={project} />
        </DivWrapper>
      </section>

      <LastEvent actualSlug={project.slug.current} h2="Découvrez nos autres projets"></LastEvent>
    </main>
  );
}
