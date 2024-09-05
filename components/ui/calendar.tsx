'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('card w-fit p-3', className)}
      classNames={{
        months:
          'flex  mobile-large:flex-row space-y-4 mobile-large:space-x-4 mobile-large:space-y-0 heading',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'body-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-xs'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-black-500 rounded-[1px] w-9 pb-2  font-normal body dark:text-gray-400',
        row: 'flex w-full mt-2',
        cell: 'h-12 aspect-square text-center body  relative [&:has([aria-selected].day-range-end)]:rounded-[1px] [&:has([aria-selected].day-outside)]:bg-gray-100/50 [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-[1px] last:[&:has([aria-selected])]:rounded-[1px] focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-gray-800/50 dark:[&:has([aria-selected])]:bg-gray-800',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-12 aspect-square body font-normal aria-selected:opacity-100 '
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-gray-900 text-gray-50 hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900',
        day_today: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
        day_outside:
          'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-100/50 aria-selected:text-gray-500 aria-selected:opacity-30 dark:text-gray-400 dark:aria-selected:bg-gray-800/50 dark:aria-selected:text-gray-400',
        day_disabled: 'text-gray-500 opacity-50 dark:text-gray-400',
        day_range_middle:
          'aria-selected:bg-gray-100 aria-selected:text-gray-900 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
