'use client';
import { cn } from '@/lib/utils';
import { DateItemCal } from './calendrier';

import Map from '@/components/event/contact/map';
import CustomPortableText from '@/components/sanity/portable-text';
import UiButton from '@/components/ui/ui-button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal';
import { useMemo } from 'react';

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

export default function CalendrierRow({
  dateItem,
  isBig
}: {
  dateItem?: DateItemCal;
  isBig?: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isDateAncienne = useMemo(() => {
    if (dateItem && dateItem.dates && dateItem.dates.length > 0) {
      const dateLaPlusAncienne = new Date(dateItem.dates[0]);
      const dateActuelle = new Date();
      return dateLaPlusAncienne < dateActuelle;
    }
    return false;
  }, [dateItem]);

  console.log(document.getElementById('header-wrapper')?.style.top);

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
            onPress={() => {
              onOpen();
            }}
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
      {dateItem ? (
        <Modal
          scrollBehavior="inside"
          placement="center"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent
            className={cn(
              'mt-5xl tablet:min-w-[40rem] laptop:min-w-[50rem]',
              document.getElementById('header-wrapper')?.style.top === '-100px' && '!mt-0'
            )}
          >
            {(onClose) => (
              <>
                <ModalHeader className="pointer-events-none relative flex h-fit w-full gap-md self-start rounded-[0.5px] rounded-t-sm !bg-primary-400 px-md py-md text-left text-md text-white tap-highlight-transparent hover:!bg-white hover:!text-black focus:outline-none active:!bg-white">
                  <p className="flex shrink-0 gap-xs whitespace-nowrap">
                    <span className="flex flex-col font-[Avenir]">
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
                  <div className="flex flex-col gap-xs">
                    <p className="heading sub-heading flex">
                      {`${dateItem.titre}`} / {`${dateItem.ville}`} /{' '}
                      {`${dateItem.emplacement.split('/')[0]}`}
                    </p>
                    <div className="body flex">{dateItem.type}</div>
                  </div>
                </ModalHeader>
                <ModalBody className="gap-0 px-0 pt-0">
                  <div className="grid grid-cols-2 gap-sm px-sm pt-sm max-tablet:flex max-tablet:flex-col">
                    <div className="flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                      <p className="sub-heading font-semibold text-black">HORAIRES</p>
                      <div className="body">
                        {dateItem.dates.map((date) => {
                          return (
                            <p className="">
                              {formatDateString(date).charAt(0).toUpperCase() +
                                formatDateString(date).slice(1)}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                      <p className="sub-heading font-semibold text-black">EMPLACEMENT</p>
                      <div className="aspect-square h-full">
                        <Map placeId={dateItem.placeId}></Map>
                      </div>
                    </div>
                    {dateItem.description && (
                      <div className="col-span-2 flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                        <p className="sub-heading font-semibold text-black">DESCRIPTION</p>
                        <CustomPortableText value={dateItem.description} />
                      </div>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <UiButton color="danger" variant="light" onPress={onClose} className="body">
                    Fermer
                  </UiButton>
                  <a href={dateItem.lien}>
                    <UiButton color="primary" onPress={onClose} className="body">
                      En savoir plus
                    </UiButton>
                  </a>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
