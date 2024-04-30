'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { EVENTLINKS, SPECTACLELINKS } from './nav-links';

export default function MobileNavLinks({
  isEvent,
  pathname
}: {
  isEvent: boolean;
  pathname: string;
}) {
  const links = isEvent ? EVENTLINKS : SPECTACLELINKS;

  return (
    <>
      {links.map((link, index) => (
        <motion.li
          key={uuidv4()}
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
              'menu-item  w-fit  px-sm text-black hover:bg-primary-500 hover:text-white',
              `${pathname === link.href && 'pointer-events-none'}`,
              index % 2 === 0 ? 'hvr-grow-rotate' : 'hvr-grow-rotate-reverse',
              pathname === link.href ? '  bg-white text-black before:max-w-full' : 'before:max-w-0'
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
