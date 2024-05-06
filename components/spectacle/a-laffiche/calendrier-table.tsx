'use client';

import CalendrierRow from './calendrier-row';

export default function CalendrierTable({ spectacles }) {
  return (
    <div>
      <p className="sub-heading font-bold text-white">MOIS, ANNEE</p>
      <ul>
        <CalendrierRow></CalendrierRow>
      </ul>
    </div>
  );
}
