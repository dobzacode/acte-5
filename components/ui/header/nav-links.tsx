'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Links {
  name: string;
  href: string;
}

export const EVENTLINKS: Links[] = [
  { name: 'Services', href: '/evenement/services' },
  { name: 'Témoignages', href: '/evenement/temoignages' },
  { name: 'A propos', href: '/evenement/a-propos' },
  { name: 'Blog', href: '/evenement/blog' },
  { name: 'Contact', href: '/evenement/contact' }
];

export const SPECTACLELINKS: Links[] = [
  { name: 'Revue scoute', href: '/spectacle/revue-scoute' },
  { name: "A l'affiche", href: '/spectacle/a-laffiche' },
  { name: 'Portofolio', href: '/spectacle/portfolio' },
  { name: 'A propos', href: '/spectacle/a-propos' },
  { name: 'Contact', href: '/spectacle/contact' }
];

export default function NavLinks({ isEvent, pathname }: { isEvent: boolean; pathname: string }) {
  const links = isEvent ? EVENTLINKS : SPECTACLELINKS;

  console.log('rerender');

  return (
    <nav className="">
      <ul className="flex justify-between gap-md tablet:gap-lg laptop:gap-xl ">
        {links.map((link, index) => (
          <motion.li
            initial={{ y: -200 }}
            animate={{
              y: 0,
              transition: { ease: 'easeInOut', delay: index * 0.15, duration: 0.9 }
            }}
            exit={{
              y: -200,
              transition: { ease: 'easeInOut', duration: 0.9, delay: index * 0.15 }
            }}
            key={link.name}
            className={cn(
              pathname.includes(link.href) && 'font-semibold',
              'body w-fit text-center font-normal hover:font-semibold',
              link.name.includes(' ') && 'shrink-0'
            )}
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
