import { sanityFetch } from '@/sanity/lib/fetch';
import {
  DateItem,
  REVUESCOUTEACTUELLE_QUERY,
  RevueScouteActuelleQueryResponse,
  SPECTACLES_AVEC_DATES_QUERY,
  SpectaclesAvecDatesQueryResponse
} from '@/sanity/lib/queries';

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { Image } from 'sanity';
import CalendrierTable from './calendrier-table';

export interface DateItemCal extends DateItem {
  titre: string;
  type: 'La Revue Scoute' | 'Spectacle';
  picture: Image;
}

export default async function Calendrier() {
  const spectacles = await sanityFetch<SpectaclesAvecDatesQueryResponse>({
    query: SPECTACLES_AVEC_DATES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  const revueScoute = await sanityFetch<RevueScouteActuelleQueryResponse>({
    query: REVUESCOUTEACTUELLE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!spectacles || !revueScoute) {
    return notFound();
  }

  let datesArr: DateItemCal[] = [];
  revueScoute[0].date.map((spectacle) => {
    datesArr.push({
      ...spectacle,
      titre: revueScoute[0].titre,
      type: 'La Revue Scoute',
      picture: { ...revueScoute[0].mainImage }
    });
  });
  spectacles.map((spectacle) => {
    if (!spectacle.dates) return;
    spectacle.dates.map((date) => {
      datesArr.push({
        ...date,
        titre: spectacle.titre,
        type: 'Spectacle',
        picture: { ...spectacle.mainImage }
      });
    });
  });

  datesArr.sort((a, b) => {
    return a.dates[0].localeCompare(b.dates[0]);
  });

  return <CalendrierTable revueScoute={revueScoute} datesArr={datesArr}></CalendrierTable>;
}
