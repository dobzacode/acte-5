import { sanityFetch } from '@/sanity/lib/fetch';
import {
  REVUESCOUTEACTUELLE_QUERY,
  RevueScouteActuelleQueryResponse,
  SPECTACLES_AVEC_DATES_QUERY,
  SpectaclesAvecDatesQueryResponse
} from '@/sanity/lib/queries';

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import CalendrierTable from './calendrier-row';

export default async function Calendrier() {
  const spectacles = await sanityFetch<SpectaclesAvecDatesQueryResponse>({
    query: SPECTACLES_AVEC_DATES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  const revueScouteActuelle = await sanityFetch<RevueScouteActuelleQueryResponse>({
    query: REVUESCOUTEACTUELLE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles && !revueScouteActuelle) {
    return notFound();
  }

  console.log(spectacles);

  return <CalendrierTable spectacles={spectacles}></CalendrierTable>;
}
