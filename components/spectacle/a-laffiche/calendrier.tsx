import { sanityFetch } from '@/sanity/lib/fetch';
import {
  SPECTACLES_AVEC_DATES_QUERY,
  SpectaclesAvecDatesQueryResponse
} from '@/sanity/lib/queries';

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function Calendrier() {
  const spectacles = await sanityFetch<SpectaclesAvecDatesQueryResponse>({
    query: SPECTACLES_AVEC_DATES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles) {
    return notFound();
  }

  return <ul></ul>;
}
