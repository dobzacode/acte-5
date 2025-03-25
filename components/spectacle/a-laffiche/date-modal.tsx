'use client';

import Map from '@/components/event/contact/map';
import CustomPortableText from '@/components/sanity/portable-text';
import UiButton from '@/components/ui/ui-button';
import { cn } from '@/lib/utils';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DateItemCal } from './calendrier';

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

export default function DateModal({
  isOpen,
  onOpenChange,
  selectedDate
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: DateItemCal;
}) {
  const [headerOffset, setHeaderOffset] = useState<string | null>(null);

  useEffect(() => {
    const headerWrapper = document.getElementById('header-wrapper');
    if (headerWrapper) {
      setHeaderOffset(headerWrapper.style.top);
    }
  }, [isOpen]);

  console.log(selectedDate.placeId);

  return (
    <Modal scrollBehavior="inside" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent
        className={cn(
          'mx-sm mt-5xl max-mobile-large:mt-3xl tablet:min-w-[40rem] laptop:min-w-[40rem]',
          headerOffset === '-100px' && '!mt-0'
        )}
      >
        {(onClose) => (
          <>
            <ModalHeader className="pointer-events-none relative flex h-fit w-full gap-md self-start rounded-[0.5px] rounded-t-sm px-md py-md text-left text-md text-black tap-highlight-transparent hover:!bg-white hover:!text-black focus:outline-none active:!bg-white">
              <p className="flex shrink-0 gap-xs whitespace-nowrap">
                <span className="flex flex-col font-[Avenir]">
                  {new Date(selectedDate.dates[0]).toISOString().split('T')[0].split('-')[2]}
                  <span className="body -mt-sm flex flex-col align-super">
                    {` ${new Date(selectedDate.dates[0]).toLocaleDateString('fr-FR', {
                      month: 'short'
                    })}`}
                  </span>
                </span>
                -
                <span className="flex flex-col">
                  <span className="body align-super">
                    {`${
                      new Date(selectedDate.dates[selectedDate.dates.length - 1])
                        .toISOString()
                        .split('T')[0]
                        .split('-')[2]
                    }`}
                  </span>
                  <span className="body -mt-sm align-super">
                    {` ${new Date(
                      selectedDate.dates[selectedDate.dates.length - 1]
                    ).toLocaleDateString('fr-FR', { month: 'short' })}`}
                  </span>
                </span>
              </p>
              <div className="flex flex-col gap-xs">
                <p className="heading sub-heading flex">
                  {`${selectedDate?.titre}`} / {`${selectedDate.ville}`} /{' '}
                  {`${selectedDate.emplacement.split('/')[0]}`}
                </p>
                <div className="body flex">{selectedDate?.type}</div>
              </div>
            </ModalHeader>
            <ModalBody className="gap-0 px-0 pt-0">
              <Image
                src={selectedDate.picture.url}
                alt={`Affiche ${selectedDate.titre}`}
                width={400}
                priority={true}
                height={400}
                className="w-full rounded-xs object-cover px-sm"
              ></Image>

              <div className="grid grid-cols-2 gap-sm px-sm pt-sm max-tablet:flex max-tablet:flex-col">
                <div className="flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                  <p className="sub-heading font-semibold text-black">HORAIRES</p>
                  <div className="body">
                    {selectedDate.dates.map((date) => (
                      <p key={date}>{formatDateString(date)}</p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                  <p className="sub-heading font-semibold text-black">EMPLACEMENT</p>
                  <div className="aspect-square h-full">
                    <Map placeId={selectedDate.placeId}></Map>
                  </div>
                </div>
                {selectedDate.description && (
                  <div className="col-span-2 flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                    <p className="sub-heading font-semibold text-black">DESCRIPTION</p>
                    <CustomPortableText value={selectedDate.description} />
                  </div>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <UiButton color="danger" variant="light" onPress={onClose} className="body">
                Fermer
              </UiButton>
              {selectedDate.lien && (
                <a href={selectedDate.lien} target="_blank" rel="noopener noreferrer">
                  <UiButton color="primary" onPress={onClose} className="body">
                    Je prends mon billet
                  </UiButton>
                </a>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
