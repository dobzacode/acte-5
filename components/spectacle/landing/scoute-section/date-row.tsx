import { LuChevronRight } from 'react-icons/lu';
import { DateProps } from './date-table';

import { cn } from '@/lib/utils';

export default function DateRow({
  date,
  actualDate,
  setActualDate
}: {
  date: DateProps;
  actualDate: string | null;
  setActualDate: (date: string) => void;
}) {
  return (
    <li
      className={cn(
        'relative flex flex-col gap-sm px-md py-md duration-medium hover:z-30 hover:shadow-large',
        actualDate === date.index && ' shadow-large '
      )}
    >
      <span
        className="relative z-20 flex w-full cursor-pointer justify-between"
        onClick={() => setActualDate(date.index)}
      >
        <h3 className="heading--sub-large  font-bold">{date.ville}</h3>
        <LuChevronRight
          size={40}
          className={cn(
            'origin-center text-black duration-medium',
            actualDate === date.index && 'rotate-90'
          )}
        ></LuChevronRight>
      </span>
      <span
        className={cn(
          '  flex items-center overflow-hidden duration-slow',
          actualDate === date.index ? 'h-xl' : 'h-0'
        )}
      >
        <p className="body">{date.information}</p>
      </span>
    </li>
  );
}
