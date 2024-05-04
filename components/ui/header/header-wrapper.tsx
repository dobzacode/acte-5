'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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
      className=" shadow-sm backdrop-blur-md duration-700 ease-in-out"
      style={{
        position: 'fixed',
        top: visible ? 0 : -100,
        width: '100%',
        zIndex: 1000
        // You can add more styles here
      }}
    >
      {children}
    </header>
  );
}
