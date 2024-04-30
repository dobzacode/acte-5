'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

interface Links {
  name: string;
  href: string;
}

const EVENTLINKS: Links[] = [
  { name: 'Services', href: 'services' },
  { name: 'Témoignages', href: 'temoignages' },
  { name: 'A propos', href: 'a-propos' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' }
];

const SPECTACLELINKS: Links[] = [
  { name: 'Revue scoute', href: 'revue-scoute' },
  { name: "A l'affiche", href: 'a-laffiche' },
  { name: 'Portofolio', href: 'portfolio' },
  { name: 'A propos', href: 'a-propos' },
  { name: 'Contact', href: 'contact' }
];

export default function NavLinks({ isEvent, pathname }: { isEvent: boolean; pathname: string }) {
  const links = isEvent ? EVENTLINKS : SPECTACLELINKS;

  return (
    <nav className="">
      <ul className="flex gap-xl">
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
            key={uuidv4()}
            className={cn(
              pathname.includes(link.href) && 'font-semibold',
              'body font-normal hover:font-semibold'
            )}
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
