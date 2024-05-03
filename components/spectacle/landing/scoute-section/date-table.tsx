'use client';

import { useState } from 'react';
import DateRow from './date-row';

export interface DateProps {
  ville: string;
  information: string;
  lien: string;
  index: string;
}

const TEMPARR = [
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '0'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '1'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '2'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '3'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '4'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '5'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '6'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '7'
  }
];

export default function DateTable() {
  const [actualDate, setActualDate] = useState<string | null>(null);

  return (
    <ul className="flex w-full flex-col divide-y-1 rounded-md  px-0 shadow-inner">
      {TEMPARR.map((item, index) => (
        <DateRow setActualDate={setActualDate} actualDate={actualDate} date={item}></DateRow>
      ))}
    </ul>
  );
}
