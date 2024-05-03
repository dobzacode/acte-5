'use client';

import { useState } from 'react';
import DateRow from './date-row';

export interface DateProps {
  ville: string;
  information: string;
  lien: string;
  index: string;
  date: string;
}

const TEMPARR = [
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '0',
    date: '2024-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '1',
    date: '2024-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '2',
    date: '2024-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '3',
    date: '2024-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '4',
    date: '2024-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '5',
    date: '2025-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '6',
    date: '2025-01-12'
  },
  {
    ville: 'Strasbourg',
    information:
      'Du 12 janvier au 25 février 2024 à la Briqueterie, rue de la 2e Division Blindée à Schiltigheim. À 20h30, dimanche à 17h',
    lien: 'https://www.larevuescoute.fr/strasbourg',
    index: '7',
    date: '2025-01-12'
  }
];

export default function DateTable() {
  const [actualDate, setActualDate] = useState<string | null>(null);

  return (
    <ul className="flex w-full flex-col gap-sm  px-0 ">
      {TEMPARR.map((item, index) => (
        <DateRow
          index={index}
          setActualDate={setActualDate}
          actualDate={actualDate}
          date={item}
        ></DateRow>
      ))}
    </ul>
  );
}
