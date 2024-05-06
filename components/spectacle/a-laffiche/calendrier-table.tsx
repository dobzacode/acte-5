'use client';

import { RevueScouteActuelleQueryResponse, Spectacle } from '@/sanity/lib/queries';
import CalendrierRow from './calendrier-row';

export default function CalendrierTable({
  spectacles,
  revueScoute,
  datesArr
}: {
  spectacles: Spectacle[];
  revueScoute: RevueScouteActuelleQueryResponse;
  datesArr: any[];
}) {
  console.log(datesArr);
  return (
    <div className="flex flex-col items-center gap-sm">
      <p className="heading font-bold text-white">MOIS, ANNEE</p>
      <ul>
        <CalendrierRow></CalendrierRow>
      </ul>
    </div>
  );
}
