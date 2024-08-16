'use client';

import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FadeInVariant } from '../framer-motion/div-variants';
import DivWrapper from '../framer-motion/div-wrapper';
import { Button } from '../ui/button';

function MyPage() {
  const [showPopup, setShowPopup] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    console.log(hasSeenPopup);

    if (hasSeenPopup === 'false' && pathname.includes('spectacles-strasbourg')) {
      setShowPopup(true);
      localStorage.setItem('hasSeenPopup', 'true');
    }

    if (!pathname.includes('spectacles-strasbourg')) {
      setShowPopup(false);
      localStorage.setItem('hasSeenPopup', 'false');
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {showPopup && (
        <DivWrapper
          key="popup-calendar"
          variant={FadeInVariant}
          className="card fixed  bottom-lg right-lg z-50 flex flex-col gap-md border border-black/[0.05] p-xl"
        >
          <X
            size={16}
            className="body absolute right-sm top-sm z-20 cursor-pointer"
            onClick={() => setShowPopup(false)}
          />

          <p className="sub-heading">Vous souhaitez réserver votre place ?</p>
          <Button
            variant={'outline'}
            className="body rounded-xs font-normal duration-medium hover:opacity-80"
          >
            Oui je me rends sur la billeterie
          </Button>
        </DivWrapper>
      )}
    </AnimatePresence>
  );
}

export default MyPage;
