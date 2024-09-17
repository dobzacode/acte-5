'use client';

import { EventWithImgAndIndex } from '@/app/(page)/agence-evenementielle-strasbourg/projets/page';
import { FadeInVariant } from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import ImagePulsing from '@/components/ui/image-pulsing';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/shadcn/dropdown-menu';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectSection({ events }: { events: EventWithImgAndIndex[] }) {
  const [filteredEvents, setFilteredEvents] = useState<EventWithImgAndIndex[]>(events);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filterCategories = searchParams.getAll('categorie');
    const sortParam = searchParams.get('tri') || 'pertinence';
    const sortDirection = searchParams.get('ordre') || 'desc';

    let filteredEvents = [...events];

    if (filterCategories.length > 0) {
      filteredEvents = filteredEvents.filter((event) =>
        filterCategories.some((category) =>
          event.categories.includes(category as EventWithImgAndIndex['categories'][number])
        )
      );
    }

    if (sortParam) {
      if (sortParam === 'date') {
        filteredEvents = filteredEvents.sort((a, b) => {
          return sortDirection === 'asc'
            ? new Date(a.date).getTime() - new Date(b.date).getTime()
            : new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      } else if (sortParam === 'pertinence') {
        filteredEvents = filteredEvents.sort((a, b) => b.pertinence - a.pertinence);
      }
    }

    setFilteredEvents(filteredEvents);
  }, [events, searchParams]);

  const handleFilter = (categories: EventWithImgAndIndex['categories'][number][]) => {
    const params = new URLSearchParams(window.location.search);
    const currentCategories = new Set(params.getAll('categorie'));
    categories.forEach((category) => {
      if (currentCategories.has(category)) {
        currentCategories.delete(category);
      } else {
        currentCategories.add(category);
      }
    });

    params.delete('categorie');
    currentCategories.forEach((category) => {
      params.append('categorie', category);
    });

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    router.replace(window.location.pathname, { scroll: false });
  };

  const handleSort = (sortBy: 'date' | 'pertinence', order: 'asc' | 'desc' = 'desc') => {
    const params = new URLSearchParams(window.location.search);
    params.set('tri', sortBy);
    params.set('ordre', order);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const isCategorySelected = (category: string) =>
    searchParams.getAll('categorie').includes(category);
  const isSortSelected = (sort: string) => searchParams.get('tri') === sort;
  const getSortOrder = () => searchParams.get('ordre') || 'desc';

  return (
    <DivWrapper
      variant={FadeInVariant}
      tag="section"
      className="flex flex-col justify-between gap-xl laptop:container laptop:mx-auto"
    >
      <div className="section-px mx-auto flex w-fit flex-wrap justify-center gap-sm">
        <nav className="body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white">
          <ul className="[&>li>button]:body flex h-full [&>li]:px-md [&>li]:py-xs">
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap border-r',
                isSortSelected('pertinence') ? 'text-black' : 'text-default-400',
                'duration-medium'
              )}
            >
              <button
                onClick={() => {
                  handleSort('pertinence');
                }}
              >
                Trier par pertinence
              </button>
            </li>
            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap tablet:border-r',
                isSortSelected('date') ? 'text-black' : 'text-default-400',
                'duration-medium'
              )}
            >
              <button
                className="flex items-center justify-center gap-sm"
                onClick={() => {
                  const newOrder = getSortOrder() === 'asc' ? 'desc' : 'asc';
                  handleSort('date', newOrder);
                }}
              >
                Trier par date{' '}
                <span className="flex">
                  <ArrowUp
                    className={
                      getSortOrder() !== 'asc' || searchParams.get('tri') !== 'date'
                        ? 'opacity-40'
                        : ''
                    }
                    size={16}
                  />
                  <ArrowDown
                    className={
                      getSortOrder() === 'asc' || searchParams.get('tri') !== 'date'
                        ? 'opacity-40'
                        : ''
                    }
                    size={16}
                  />
                </span>
              </button>
            </li>

            <li
              className={cn(
                'relative flex origin-center items-center justify-center overflow-hidden whitespace-nowrap text-default-400 duration-medium max-tablet:hidden'
              )}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(searchParams?.get('categorie') && 'text-black')}>
                  Filtrer par catégorie
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-xs">
                  {Array.from(new Set(events.flatMap((event) => event.categories))).map(
                    (category) => (
                      <DropdownMenuCheckboxItem
                        className="body !text-black"
                        key={category}
                        onCheckedChange={(checked) => {
                          handleFilter([category]);
                        }}
                        checked={isCategorySelected(category)}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
        <li
          className={cn(
            'body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white tablet:hidden'
          )}
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'text-default-400',
                searchParams?.get('categorie') && 'text-black',
                'border-none px-md py-xs outline-none focus:outline-none'
              )}
            >
              Filtrer par catégorie
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-xs">
              {Array.from(new Set(events.flatMap((event) => event.categories))).map((category) => (
                <DropdownMenuCheckboxItem
                  className="body"
                  key={category}
                  onCheckedChange={(checked) => {
                    handleFilter([category]);
                  }}
                  checked={isCategorySelected(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <div
          className={cn(
            'body relative z-40 flex w-fit shrink-0 self-center overflow-hidden rounded-sm border p-xs font-normal shadow-md duration-medium before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white',
            !searchParams?.get('categorie') && !searchParams?.get('tri')
              ? 'pointer-events-none opacity-40'
              : null
          )}
        >
          <button className="px-md py-xs" color="primary" onClick={resetFilters}>
            Réinitialiser
          </button>
        </div>
      </div>

      <section className="relative flex h-full min-h-[60rem] justify-center overflow-x-clip duration-medium">
        <ul className="section-px grid w-full grid-cols-2 justify-center gap-sm self-start laptop:container mobile-large:grid-cols-3 laptop:mx-auto laptop-large:grid-cols-4">
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, index) => (
              <motion.li
                key={`${event.titre}-${index}-${event.slug.current}`}
                className="group relative flex aspect-square h-full w-full items-end overflow-hidden rounded-b-sm rounded-t-sm bg-black shadow-md duration-medium hover:scale-110 hover:rounded-t-sm hover:shadow-xl hover:grayscale hover:before:max-w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    opacity: { duration: 0.5, delay: index * 0.3 },
                    y: { duration: 0.3, delay: index * 0.3 }
                  }
                }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 800 - index }}
              >
                <Link
                  scroll={false}
                  className="group relative z-40 flex h-full w-full flex-col-reverse after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/100 after:to-transparent after:to-30%"
                  href={`/agence-evenementielle-strasbourg/projets/${event.slug.current}`}
                >
                  <motion.div
                    className={`sub-heading before-bg relative z-50 text-pretty px-md text-white duration-slow hover:duration-fast`}
                    initial={{
                      opacity: 0,
                      y: 300,
                      maxHeight: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      paddingTop: '1rem',
                      paddingBottom: '1rem',
                      maxHeight: 100,
                      transition: {
                        opacity: { duration: 0.1, delay: index * 0.3 },
                        maxHeight: { duration: 0.2, delay: index * 0.3 },
                        paddingTop: { duration: 0.2, delay: index * 0.3 },
                        paddingBottom: { duration: 0.2, delay: index * 0.3 },
                        y: { duration: 0.2, delay: index * 0.3 }
                      }
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="line-clamp-3">{event.titre}</h3>
                  </motion.div>
                  {event.src && (
                    <ImagePulsing
                      fill
                      sizes={'(min-width: 1024px) 50vw, 100vw'}
                      className={`object-cover duration-medium group-hover:scale-[102%]`}
                      src={event.src ?? ''}
                      alt={`${event}`}
                    ></ImagePulsing>
                  )}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>
    </DivWrapper>
  );
}
