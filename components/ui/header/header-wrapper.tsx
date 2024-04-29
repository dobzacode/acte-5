'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      ref={headerRef}
      className="ease-in-out"
      style={{
        position: 'fixed',
        top: visible ? '0' : '-100px',
        width: '100%',
        transition: 'top 0.8s',

        zIndex: 1000

        // You can add more styles here
      }}
    >
      {children}
    </header>
  );
}
