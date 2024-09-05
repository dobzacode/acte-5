'use client';

import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { Calendar } from '@/components/ui/calendar';
import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { DateItem } from '@/sanity/lib/queries';
import { useDisclosure } from '@nextui-org/modal';
import { fr } from 'date-fns/locale';
import { useState } from 'react';
import DateModal from '../date-modal';

export type DateItemCalWithoutPic = DateItem & { type: 'Spectacle'; titre: string };

export default function SpectacleCalendar({ dates }: { dates: DateItemCalWithoutPic[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedDate, setSelectedDate] = useState<DateItemCalWithoutPic | null>(null);

  const handleDateClick = (date: Date) => {
    const selected = dates.find((item) =>
      item.dates.some((d) => new Date(d).toDateString() === date.toDateString())
    );
    setSelectedDate(selected || null);
    onOpen();
  };

  const stopDatesArray = dates.map((stop) =>
    stop.dates.map((date) => new Date(date).toDateString())
  );

  const flatStopDates = stopDatesArray.flat();

  const isTablet = useBetterMediaQuery('(min-width: 768px)');

  const colors = [
    'to-primary-400',
    'to-secondary-400',
    'to-blue-400',
    'to-slate-400',
    'to-destructive-400',
    'to-info-400'
  ];
  const modifiers = stopDatesArray.reduce<Record<string, Date[]>>((acc, dates, index) => {
    acc[`modifier_${index}`] = dates.map((date) => new Date(date));
    return acc;
  }, {});

  const modifiersClassNames = stopDatesArray.reduce<Record<string, string>>((acc, _, index) => {
    acc[`modifier_${index}`] =
      `bg-gradient-to-br from-transparent from-85% ${colors[index % colors.length]} rounded-xs text-destructive`;
    return acc;
  }, {});

  return (
    <InviewWrapper variant={ComingFromRightVariant} className="h-[650px] w-full flex-1">
      <Calendar
        numberOfMonths={isTablet ? 2 : 1}
        className="h-full w-full"
        locale={fr}
        classNames={{
          months:
            'flex w-full flex-col tablet:flex-row space-y-4 tablet:space-x-4 tablet:space-y-0 flex-1 max-tablet:flex-col sub-heading',
          month: 'space-y-4 w-full flex flex-col ',
          table: 'w-full h-fit border-collapse space-y-1',
          head_row: '',
          row: 'w-full mt-2'
        }}
        fromDate={new Date()}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        disabled={(date) => !flatStopDates.includes(date.toDateString())}
        onDayClick={handleDateClick}
      ></Calendar>

      {selectedDate && (
        <DateModal isOpen={isOpen} onOpenChange={onOpenChange} selectedDate={selectedDate} />
      )}
    </InviewWrapper>
  );
}
