'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Links {
  name: string;
  href: string;
}

export const EVENTLINKS: Links[] = [
  { name: 'Services', href: '/agence-evenementielle-strasbourg/services' },
  { name: 'Témoignages', href: '/agence-evenementielle-strasbourg/temoignages' },
  { name: 'A propos', href: '/agence-evenementielle-strasbourg/a-propos' },
  { name: 'Blog', href: '/agence-evenementielle-strasbourg/blog' },
  { name: 'Contact', href: '/agence-evenementielle-strasbourg/contact' }
];

export const SPECTACLELINKS: Links[] = [
  { name: 'Revue scoute', href: '/spectacles-strasbourg/revue-scoute' },
  { name: "A l'affiche", href: '/spectacles-strasbourg/a-laffiche' },
  { name: 'A propos', href: '/spectacles-strasbourg/a-propos' },
  { name: 'Contact', href: '/spectacles-strasbourg/contact' }
];

export default function NavLinks({ isEvent, pathname }: { isEvent: boolean; pathname: string }) {
  const links = isEvent ? EVENTLINKS : SPECTACLELINKS;

  console.log(pathname, links);

  return (
    <nav className="">
      <ul className="flex justify-between gap-md tablet:gap-lg laptop:gap-xl ">
        {links.map((link, index) => (
          <motion.li
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: { ease: 'easeInOut', delay: index * 0.15, duration: 0.9 }
            }}
            exit={{
              y: 50,
              transition: { ease: 'easeInOut', duration: 0.4, delay: index * 0.15 }
            }}
            key={`${link.href}`}
            className={cn(
              'body w-fit text-center font-normal hover:font-semibold',
              pathname.includes(link.href) && 'font-semibold',
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
