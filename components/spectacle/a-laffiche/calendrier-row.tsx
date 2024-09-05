'use client';

import UiButton from '@/components/ui/ui-button';
import { cn } from '@/lib/utils';
import { useDisclosure } from '@nextui-org/modal';
import { useMemo } from 'react';
import { DateItemCal } from './calendrier';
import DateModal from './date-modal';
import { DateItemCalWithoutPic } from './spectacle/spectacle-calendar';

const formatDateString = (isoDateString: string) => {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleDateString('fr-FR', options);
};

export default function CalendrierRow({ dateItem }: { dateItem?: DateItemCal }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isDateAncienne = useMemo(() => {
    if (dateItem && dateItem.dates && dateItem.dates.length > 0) {
      const dateLaPlusAncienne = new Date(dateItem.dates[0]);
      const dateActuelle = new Date();
      return dateLaPlusAncienne < dateActuelle;
    }
    return false;
  }, [dateItem]);

  return (
    <>
      <div
        className={cn(
          'sub-heading flex h-full cursor-pointer flex-col items-center justify-center gap-sm overflow-clip rounded-xs border border-black/10 bg-white shadow-sm duration-medium hover:z-30 hover:shadow-md',
          isDateAncienne ? 'pointer-events-none opacity-40' : '',
          !dateItem && 'pointer-events-none opacity-40 shadow-none'
        )}
      >
        {dateItem ? (
          <UiButton
            disableAnimation
            variant={'solid'}
            color="primary"
            onPress={onOpen}
            className="relative flex h-fit items-start gap-md self-start whitespace-normal rounded-[0.5px] border-none !bg-white px-md py-md text-left text-md text-black tap-highlight-transparent hover:!bg-white hover:!text-black focus:outline-none active:!bg-white"
          >
            <p className="flex shrink-0 gap-xs whitespace-nowrap">
              <span className="flex flex-col">
                {new Date(dateItem.dates[0]).toISOString().split('T')[0].split('-')[2]}
                <span className="body -mt-sm flex flex-col align-super">
                  {` ${new Date(dateItem.dates[0]).toLocaleDateString('fr-FR', { month: 'short' })}`}
                </span>
              </span>
              -
              <span className="flex flex-col">
                <span className="body align-super">
                  {`${
                    new Date(dateItem.dates[dateItem.dates.length - 1])
                      .toISOString()
                      .split('T')[0]
                      .split('-')[2]
                  }`}
                </span>
                <span className="body -mt-sm align-super">
                  {` ${new Date(dateItem.dates[dateItem.dates.length - 1]).toLocaleDateString(
                    'fr-FR',
                    { month: 'short' }
                  )}`}
                </span>
              </span>
            </p>
            <div className="flex flex-col gap-xs after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-90% after:to-white">
              <div className="flex">
                <p className="line-clamp-2">
                  {`${dateItem.titre}`} / {`${dateItem.ville}`} /{' '}
                  {`${dateItem.emplacement.split('/')[0]}`}
                </p>
              </div>
              <div className="body flex">{dateItem.type}</div>
            </div>
          </UiButton>
        ) : (
          <p className="sub-heading px-md py-md text-black/40">Aucun événement</p>
        )}
      </div>
      {dateItem && (
        <DateModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          selectedDate={{ ...(dateItem as DateItemCalWithoutPic) }}
        />
      )}
    </>
  );
}
