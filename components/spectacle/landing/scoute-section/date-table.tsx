'use client';

import { DateItem } from '@/sanity/lib/queries';
import { useState } from 'react';
import DateRow from './date-row';

const comparerDates = (a: DateItem, b: DateItem) => {
  const dateA = new Date(a.dates[0]);
  const dateB = new Date(b.dates[0]);

  return dateA.getTime() - dateB.getTime();
};

export default function DateTable({ stops }: { stops: DateItem[] }) {
  const [actualDate, setActualDate] = useState<string | null>(null);

  stops.sort(comparerDates);

  return (
    <ul className="flex w-full flex-col gap-sm  px-0 ">
      {stops.map((item, index) => (
        <DateRow
          index={index}
          key={item._key}
          setActualDate={setActualDate}
          actualDate={actualDate}
          date={item}
        ></DateRow>
      ))}
    </ul>
  );
}
