'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { EVENTLINKS, SPECTACLELINKS } from './nav-links';

export default function MobileNavLinks({
  isEvent,
  pathname,
  setShowMenu
}: {
  isEvent: boolean;
  pathname: string;
  setShowMenu: (showMenu: boolean) => void;
}) {
  const links = isEvent ? EVENTLINKS : SPECTACLELINKS;

  return (
    <>
      {links.map((link, index) => (
        <motion.li
          key={uuidv4()}
          onClick={() => setShowMenu(false)}
          initial={{ x: -300 }}
          animate={{
            x: 0,
            transition: {
              ease: 'easeInOut',
              delay: index * 0.15,
              type: 'spring',
              stiffness: 100,
              damping: 20
            }
          }}
          exit={{ x: -300, transition: { ease: 'easeInOut', duration: 0.9 } }}
        >
          <Link
            className={cn(
              'sub-heading w-fit px-sm py-2 text-black hover:bg-primary-500 hover:text-white max-laptop:text-md max-laptop:leading-md',
              `${pathname.includes(link.href) && 'pointer-events-none'}`,
              index % 2 === 0 ? 'hvr-grow-rotate' : 'hvr-grow-rotate-reverse',
              pathname.includes(link.href)
                ? '  rounded-xs bg-primary-400 text-white before:max-w-full'
                : 'before:max-w-0'
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </>
  );
}
