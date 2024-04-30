'use client';

import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Hamburger from './hamburger';
import Logo from './logo';
import MobileNavLinks from './mobile-nav-links';
import NavLinks from './nav-links';
import SectionLinks from './section-links';

export default function Header({ className }: { className?: string }) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const pathname = usePathname();

  const isTablet = useBetterMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    }
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      setTimeout(() => {
        setShowMenu(false);
      }, 500);
    }
  }, [pathname]);

  return (
    <section
      className={cn(
        ` z-50 flex  w-full items-center justify-between border-b border-black border-opacity-10 bg-transparent bg-white bg-opacity-75 px-md py-md mobile-large:gap-3xl laptop:px-xl   laptop-large:px-2xl `,
        !showMenu && 'overflow-hidden'
      )}
    >
      <div className="flex  shrink-0 gap-md">
        <Logo className={cn('w-xl duration-medium ')}></Logo>
        <p className="heading n  font-bold max-laptop:hidden">ACTE 5</p>
      </div>
      {isTablet && (
        <>
          {pathname.includes('evenement') ? (
            <NavLinks pathname={pathname} isEvent={true} />
          ) : (
            <NavLinks pathname={pathname} isEvent={false} />
          )}
        </>
      )}
      <nav
        onClick={() => {
          setShowMenu(false);
        }}
        className="body  relative flex shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white laptop:p-sm"
      >
        <SectionLinks pathname={pathname}></SectionLinks>
      </nav>

      <div className="flex shrink-0 items-center tablet:hidden">
        <Hamburger
          className={cn('h-fit w-xl duration-fast hover:scale-105')}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        ></Hamburger>
        <motion.div
          key="menuBackground"
          exit={{ y: '-100%' }}
          transition={{ duration: 500 }}
          className={cn(
            'absolute left-0 top-0 -z-20 h-screen w-screen max-w-0 bg-transparent  bg-white bg-opacity-100   duration-medium ease-in-out',
            showMenu ? 'max-w-full ' : 'delay-300'
          )}
        ></motion.div>
        <AnimatePresence mode="wait">
          {showMenu && !isTablet ? (
            <motion.nav
              className={cn(' absolute left-0 top-4xl z-10 flex max-w-full flex-col px-sm')}
            >
              <ul
                className={cn(
                  ' flex flex-col gap-md opacity-0',
                  showMenu ? 'translate-y-0 opacity-100 duration-slow' : '  duration-300'
                )}
              >
                {pathname.includes('evenement') ? (
                  <MobileNavLinks pathname={pathname} isEvent={true} />
                ) : (
                  <MobileNavLinks pathname={pathname} isEvent={false} />
                )}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
