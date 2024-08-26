import { sanityFetch } from '@/sanity/lib/fetch';
import {
  DateItem,
  REVUESCOUTEACTUELLE_QUERY,
  RevueScouteActuelleQueryResponse,
  SPECTACLES_AVEC_DATES_QUERY,
  SpectaclesAvecDatesQueryResponse
} from '@/sanity/lib/queries';

import { ComingFromBottomVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { Image } from 'sanity';
import BigCalendrierTable from './big-calendrier-table';
import CalendrierTable from './calendrier-table';

export interface DateItemCal extends DateItem {
  titre: string;
  type: 'La Revue Scoute' | 'Spectacle';
  picture: Image;
}

export default async function Calendrier({ isBig }: { isBig?: boolean }) {
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

  return (
    <>
      {!isBig ? (
        <InviewWrapper tag="div" variant={ComingFromBottomVariant}>
          <CalendrierTable
            className={isBig ? 'laptop:hidden' : ''}
            revueScoute={revueScoute}
            datesArr={datesArr}
          ></CalendrierTable>
        </InviewWrapper>
      ) : (
        <>
          <BigCalendrierTable revueScoute={revueScoute} datesArr={datesArr}></BigCalendrierTable>

          <CalendrierTable
            className={'laptop:hidden'}
            revueScoute={revueScoute}
            datesArr={datesArr}
          ></CalendrierTable>
        </>
      )}
    </>
  );
}
