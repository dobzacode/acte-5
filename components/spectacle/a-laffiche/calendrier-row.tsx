'use client';
import { cn } from '@/lib/utils';
import { DateItemCal } from './calendrier';

import CustomPortableText from '@/components/sanity/portable-text';
import UiButton from '@/components/ui/ui-button';
import { urlForImage } from '@/sanity/lib/utils';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal';
import Image from 'next/image';
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
          ' sub-heading flex h-fit cursor-pointer flex-col items-center justify-center gap-sm overflow-clip rounded-xs border border-black/10 bg-white shadow-sm duration-medium hover:z-30 hover:shadow-md',
          isDateAncienne && 'pointer-events-none opacity-40'
        )}
      >
        {dateItem ? (
          <UiButton
            disableAnimation
            variant={'solid'}
            color="primary"
            onPress={onOpen}
            className="relative flex h-fit items-start gap-md self-start whitespace-normal rounded-[0.5px]   border-none !bg-white px-md py-md text-left text-md text-black tap-highlight-transparent hover:!bg-white hover:!text-black  focus:outline-none active:!bg-white"
          >
            <p className=" block shrink-0 ">
              {new Date(dateItem.dates[0]).toISOString().split('T')[0].split('-')[2]}

              <span className="body align-super">
                -
                {`${
                  new Date(dateItem.dates[dateItem.dates.length - 1])
                    .toISOString()
                    .split('T')[0]
                    .split('-')[2]
                }`}
              </span>
            </p>
            <div className="flex flex-col gap-xs after:absolute after:left-0  after:top-0 after:z-20 after:h-full after:w-full  after:bg-gradient-to-b after:from-transparent after:from-90% after:to-white">
              <p className=" flex">
                <div className="line-clamp-2">
                  {`${dateItem.titre}`} / {`${dateItem.ville}`} /{' '}
                  {`${dateItem.emplacement.split('/')[0]}`}
                </div>
              </p>
              <div className=" body flex">{dateItem.type}</div>
            </div>
          </UiButton>
        ) : (
          <p className="sub-heading px-md py-md text-black/40">Aucun événement</p>
        )}
      </div>
      {dateItem ? (
        <Modal className="" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="pointer-events-none relative  flex h-fit gap-md self-start rounded-[0.5px]  rounded-t-sm   !bg-primary-400 px-md py-md text-left text-md  text-white tap-highlight-transparent hover:!bg-white hover:!text-black  focus:outline-none active:!bg-white">
                  <p className=" block shrink-0 ">
                    {new Date(dateItem.dates[0]).toISOString().split('T')[0].split('-')[2]}

                    <span className="body align-super">
                      -
                      {`${
                        new Date(dateItem.dates[dateItem.dates.length - 1])
                          .toISOString()
                          .split('T')[0]
                          .split('-')[2]
                      }`}
                    </span>
                  </p>
                  <div className="flex flex-col gap-xs ">
                    <p className=" flex leading-md">
                      {`${dateItem.titre}`} / {`${dateItem.ville}`} /{' '}
                      {`${dateItem.emplacement.split('/')[0]}`}
                    </p>
                    <div className=" body flex ">{dateItem.type}</div>
                  </div>
                </ModalHeader>
                <ModalBody className="gap-0   px-0 pt-0 ">
                  <div className="relative h-[20rem] w-full max-tablet:hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt={`${dateItem.titre} affiche`}
                      src={urlForImage(dateItem.picture).width(400).height(600).url()}
                    ></Image>
                  </div>
                  <div className="grid grid-cols-2 gap-sm px-sm pt-sm">
                    <div className="flex  flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                      <p className="sub-heading font-semibold  text-black">HORAIRES</p>
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
                    <div className="flex  flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                      <p className="sub-heading font-semibold  text-black">EMPLACEMENT</p>
                      <p className="body ">{dateItem.emplacement}</p>
                    </div>
                    {dateItem.description && (
                      <div className="col-span-2  flex flex-col gap-md rounded-xs border border-black/10 p-md shadow-inner">
                        <p className="sub-heading font-semibold  text-black">DESCRIPTION</p>
                        <CustomPortableText value={dateItem.description} />
                      </div>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <UiButton color="danger" variant="light" onPress={onClose}>
                    Fermer
                  </UiButton>
                  <UiButton color="primary" onPress={onClose}>
                    En savoir plus
                  </UiButton>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
