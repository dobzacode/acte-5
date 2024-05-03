import { LuChevronRight } from 'react-icons/lu';
import { DateProps } from './date-table';

import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import { cn } from '@/lib/utils';

const isDateStrictlyBeforeToday = (dateString: string) => {
  const date = Date.parse(dateString);
  const today = Date.now();
  return date < today;
};

export default function DateRow({
  date,
  actualDate,
  setActualDate,

  index
}: {
  date: DateProps;
  actualDate: string | null;
  setActualDate: (date: string) => void;

  index: number;
}) {
  return (
    <InviewWrapper
      tag="li"
      variant={{
        hidden: {
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200
        },
        enter: {
          opacity: 1,
          x: 0,
          transition: {
            x: { delay: index * 0.1 },
            opacity: { duration: 0.2, delay: index * 0.1 }
          }
        },
        exit: {
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200
        }
      }}
      className={cn(
        'relative flex flex-col  gap-sm  rounded-md border px-md py-md duration-medium hover:z-30 hover:shadow-xl',
        actualDate === date.index ? ' shadow-xl ' : '',
        isDateStrictlyBeforeToday(date.date) && 'pointer-events-none [&>span]:opacity-50'
      )}
    >
      <span
        className={'relative z-20 flex w-full cursor-pointer justify-between'}
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
    </InviewWrapper>
  );
}
