'use client';

import { ComingFromTopVariant, FadeInVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
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

  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  const isHome =
    !pathname.includes('agence-evenementielle-strasbourg') &&
    !pathname.includes('spectacles-strasbourg');

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
        `section-px z-[800] flex h-4xl w-full items-center justify-between border-b border-black border-opacity-10 bg-transparent bg-white bg-opacity-75 py-md max-mobile-large:h-3xl mobile-large:gap-3xl`,
        !showMenu && 'overflow-hidden',
        isHome && 'relative max-laptop:justify-between'
      )}
    >
      <div className="relative z-50 flex items-center gap-[12px]">
        <Logo
          className={cn(
            'relative z-50 h-[64px] w-[64px] duration-medium max-mobile-large:h-[50px] max-mobile-large:w-[50px] max-mobile-medium:h-[40px] max-mobile-medium:w-[40px]'
          )}
        ></Logo>
        <AnimatePresence mode="wait">
          {isLaptop && isHome ? (
            <motion.p
              initial={{ y: -100 }}
              animate={{
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.9 }
              }}
              exit={{
                y: 70,
                transition: { ease: 'easeInOut', duration: 0.4 }
              }}
              key={`ACTE5`}
              className={cn(
                'heading w-fit text-center font-["Quasimoda"] font-thin tracking-[0.08em] max-laptop:hidden'
              )}
            >
              ACTE 5
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isLaptop && !isHome ? (
          <DivWrapper variant={FadeInVariant} inverseOnExit={true}>
            <AnimatePresence mode="wait">
              {pathname.includes('agence-evenementielle-strasbourg') ? (
                <NavLinks key="menuEvent" pathname={pathname} isEvent={true} />
              ) : (
                <NavLinks key="menuSpectacle" pathname={pathname} isEvent={false} />
              )}
            </AnimatePresence>
          </DivWrapper>
        ) : null}
      </AnimatePresence>
      <nav
        onClick={() => {
          setShowMenu(false);
        }}
        className={cn(
          'body relative z-40 flex shrink-0 self-center overflow-hidden rounded-sm p-xs font-normal shadow-md duration-slow ease-in-out before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white max-laptop:absolute max-laptop:right-1/2 max-laptop:top-1/2 max-laptop:-translate-y-1/2 max-laptop:translate-x-1/2 max-laptop:self-center',
          isHome && 'max-laptop:right-md max-laptop:translate-x-0 max-laptop:self-auto'
        )}
      >
        <SectionLinks pathname={pathname}></SectionLinks>
      </nav>
      <AnimatePresence mode="wait">
        {!isLaptop ? (
          <DivWrapper
            variant={ComingFromTopVariant}
            inverseOnExit
            key="menu"
            className={cn('flex shrink-0 items-center laptop:hidden', isHome && 'hidden')}
          >
            <Hamburger
              className={cn('h-fit w-xl duration-fast hover:scale-105', isHome && 'hidden')}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            ></Hamburger>
            <motion.div
              key="menuBackground"
              exit={{ y: '-100%' }}
              transition={{ duration: 500 }}
              className={cn(
                'absolute left-0 top-0 -z-20 h-[120vh] w-screen max-w-0 bg-transparent bg-white bg-opacity-100 duration-medium ease-in-out',
                showMenu ? 'max-w-full' : 'delay-300'
              )}
            ></motion.div>

            <motion.nav
              className={cn(
                'absolute left-0 top-[5rem] z-10 flex max-w-full flex-col px-sm mobile-large:top-[7rem]'
              )}
            >
              <ul
                className={cn(
                  'flex flex-col gap-sm opacity-0',
                  showMenu ? 'translate-y-0 opacity-100 delay-200 duration-slow' : 'duration-300'
                )}
              >
                {pathname.includes('agence-evenementielle-strasbourg') ? (
                  <MobileNavLinks
                    key={'event-laptop-navigation'}
                    setShowMenu={setShowMenu}
                    pathname={pathname}
                    isEvent={true}
                  />
                ) : (
                  <MobileNavLinks
                    key={'spectacle-laptop-navigation'}
                    setShowMenu={setShowMenu}
                    pathname={pathname}
                    isEvent={false}
                  />
                )}
              </ul>
            </motion.nav>
          </DivWrapper>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
