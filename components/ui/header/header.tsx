'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Hamburger from './hamburger';
import Logo from './logo';
import NavLinks from './nav-links';
import SectionLinks from './section-links';

export default function Header({ className }: { className?: string }) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const pathname = usePathname();

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

  console.log(pathname.includes('evenement'));

  return (
    <section
      className={cn(
        ` z-50 flex  w-full items-center justify-between gap-3xl border-b border-black border-opacity-10 bg-transparent bg-white bg-opacity-75 px-2xl   py-md `
      )}
    >
      <div className="flex  shrink-0 gap-md">
        <Logo
          className={cn(
            'w-xl duration-medium ',
            showMenu ? 'fill-white  duration-medium ' : 'delay-300'
          )}
        ></Logo>
        <p className="heading n  font-bold">ACTE 5</p>
      </div>
      {pathname.includes('evenement') ? (
        <NavLinks pathname={pathname} isEvent={true} />
      ) : (
        <NavLinks pathname={pathname} isEvent={false} />
      )}
      <nav className="body relative flex shrink-0 self-center overflow-hidden rounded-sm border p-sm font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white">
        <SectionLinks pathname={pathname}></SectionLinks>
      </nav>

      <div className="mobile-large:hidden">
        <Hamburger
          className={cn(
            'w-xl duration-fast hover:scale-105 ',
            showMenu ? 'fill-white duration-medium ' : 'delay-300'
          )}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        ></Hamburger>
        <motion.div
          key="menuBackground"
          exit={{ y: '-100%' }}
          transition={{ duration: 500 }}
          className={cn(
            'absolute left-0 top-0 -z-20  h-screen w-screen max-w-0  bg-default-900  duration-medium ease-in-out',
            showMenu ? 'max-w-full ' : 'delay-300'
          )}
        ></motion.div>
        <motion.nav
          key="nav"
          exit={{ y: '-100%' }}
          transition={{ duration: 500 }}
          className={cn(
            ' absolute left-0 top-5xl z-10 flex w-screen max-w-full flex-col items-center ',
            showMenu ? 'max-h-full' : 'pointer-events-none max-h-0'
          )}
        >
          <ul
            className={cn(
              ' flex translate-y-10 flex-col gap-md opacity-0',
              showMenu ? 'translate-y-0 opacity-100 duration-slow' : ' -translate-y-10 duration-300'
            )}
          >
            <li
              className={cn(
                'menu-item hvr-grow-rotate px-sm  hover:bg-primary-500 hover:text-white',
                pathname === '/' && showMenu
                  ? '  bg-white text-black before:max-w-full'
                  : 'before:max-w-0',
                pathname === '/' && 'pointer-events-none'
              )}
            >
              <Link
                className={cn(!showMenu || (pathname === '/' && 'pointer-events-none'))}
                href="/"
              >
                ACCUEIL
              </Link>
            </li>
            <li
              className={cn(
                'menu-item hvr-grow-rotate-reverse px-sm  hover:bg-primary-500 hover:text-white',
                pathname === '/publication' && showMenu
                  ? '   -z-10 bg-white text-black before:max-w-full'
                  : 'before:max-w-0',
                pathname === '/publication' && 'pointer-events-none'
              )}
            >
              <Link
                className={cn(!showMenu || (pathname === '/publication' && 'pointer-events-none'))}
                href="/publication"
              >
                PUBLICATION
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
