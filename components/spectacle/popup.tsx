'use client';

import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FadeInVariant } from '../framer-motion/div-variants';
import InviewWrapper from '../framer-motion/inview-wrapper';
import { Button } from '../ui/button';

function MyPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
      setTimeout(() => localStorage.setItem('hasSeenPopup', 'true'), 1000);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showPopup && (
        <InviewWrapper
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
        </InviewWrapper>
      )}
    </AnimatePresence>
  );
}

export default MyPage;
