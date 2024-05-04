import { LuChevronRight } from 'react-icons/lu';

import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import CustomPortableText from '@/components/sanity/portable-text';
import { cn } from '@/lib/utils';
import { DateItem } from '@/sanity/lib/queries';

const isDateStrictlyBeforeToday = (dateString: string | null) => {
  if (!dateString) return false;
  const date = Date.parse(dateString);
  const today = Date.now();
  return date < today;
};

function findCloserDate(dates: string[]): string | null {
  if (dates.length === 0) return null;

  return dates.reduce((plusRecente: string, dateCourante: string) => {
    // Convertir les dates en objets Date
    const datePlusRecente = new Date(plusRecente);
    const dateCouranteObj = new Date(dateCourante);

    // Comparer les dates
    if (dateCouranteObj > datePlusRecente) {
      return dateCourante;
    } else {
      return plusRecente;
    }
  });
}

export default function DateRow({
  date,
  actualDate,
  setActualDate,
  index,
  key
}: {
  date: DateItem;
  actualDate: string | null;
  setActualDate: (date: string | null) => void;
  key: string;
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
        actualDate === date._key ? ' shadow-xl ' : '',
        isDateStrictlyBeforeToday(findCloserDate(date.dates)) &&
          'pointer-events-none [&>span]:opacity-50'
      )}
    >
      <span
        className={'relative z-20 flex w-full cursor-pointer justify-between'}
        onClick={() => (actualDate === date._key ? setActualDate(null) : setActualDate(date._key))}
      >
        <h3 className="heading--sub-large  font-bold">{date.ville}</h3>
        <LuChevronRight
          size={40}
          className={cn(
            'origin-center text-black duration-medium',
            actualDate === date._key && 'rotate-90'
          )}
        ></LuChevronRight>
      </span>
      <span
        className={cn(
          'flex  h-fit flex-col items-start gap-sm overflow-hidden duration-slow',
          actualDate === date._key ? 'max-h-[30rem]' : 'max-h-0'
        )}
      >
        <CustomPortableText value={date.description}></CustomPortableText>
      </span>
    </InviewWrapper>
  );
}
