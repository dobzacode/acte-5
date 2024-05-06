import { sanityFetch } from '@/sanity/lib/fetch';
import {
  REVUESCOUTEACTUELLE_QUERY,
  RevueScouteActuelleQueryResponse,
  SPECTACLES_QUERY,
  SpectaclesQueryResponse
} from '@/sanity/lib/queries';

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import CalendrierTable from './calendrier-table';

export default async function Calendrier() {
  const spectacles = await sanityFetch<SpectaclesQueryResponse>({
    query: SPECTACLES_QUERY,
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

  const datesArr: any[] = [];
  if (revueScoute[0] && revueScoute[0].date && revueScoute[0].date.length > 0) {
    for (const dateItem of revueScoute[0].date) {
      if (dateItem.dates && dateItem.dates.length > 0) {
        for (const date of dateItem.dates) {
          const nouvelleDate = {
            ville: dateItem.ville,
            lien: dateItem.lien,
            _type: dateItem._type,
            description: dateItem.description,
            _key: dateItem._key,
            emplacement: dateItem.emplacement,
            date: date
          };

          datesArr.push(nouvelleDate);
        }
      }
    }
  }

  console.log(datesArr);

  return (
    <CalendrierTable
      spectacles={spectacles}
      revueScoute={revueScoute}
      datesArr={datesArr}
    ></CalendrierTable>
  );
}
