'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { PARAMETRES_QUERY, ParametresQueryResponse } from '@/sanity/lib/queries';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FadeInVariant } from '../../framer-motion/div-variants';
import DivWrapper from '../../framer-motion/div-wrapper';

function Popup() {
  const [showPopup, setShowPopup] = useState(true);
  const [parametres, setParametres] = useState<ParametresQueryResponse | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchParametres = async () => {
      try {
        const params = await client.fetch<ParametresQueryResponse>(PARAMETRES_QUERY);
        setParametres(params);
        console.log(params);
      } catch (error) {
        console.error('Error fetching parameters:', error);
      }
    };

    fetchParametres();
  }, []);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    if (hasSeenPopup === 'false' && pathname.includes('spectacles-strasbourg')) {
      setShowPopup(true);
      localStorage.setItem('hasSeenPopup', 'true');
    }

    if (!pathname.includes('spectacles-strasbourg')) {
      setShowPopup(false);
      localStorage.setItem('hasSeenPopup', 'false');
    }
  }, [pathname]);

  // Don't show popup if parameters or lienBilletterie is missing
  if (!parametres || !parametres[0]?.lienBilletterie) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {showPopup && (
        <DivWrapper
          key="popup-calendar"
          variant={FadeInVariant}
          className="card fixed bottom-lg right-lg z-50 flex h-[140px] flex-col gap-md overflow-hidden border border-black/[0.05] px-2xl py-xl"
        >
          <div className="absolute left-0 top-0 h-full w-[8px] bg-primary-400"></div>
          <X
            size={16}
            className="body absolute right-sm top-sm z-20 cursor-pointer"
            onClick={() => setShowPopup(false)}
          />

          <p className="sub-heading">Vous souhaitez réserver votre place ?</p>
          <a
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'body rounded-xs font-normal duration-medium hover:opacity-80'
            )}
            href={parametres[0].lienBilletterie}
          >
            Oui je me rends sur la billeterie
          </a>
        </DivWrapper>
      )}
    </AnimatePresence>
  );
}

export default Popup;
