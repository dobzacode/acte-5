import { sanityFetch } from '@/sanity/lib/fetch';
import { PARAMETRES_QUERY, ParametresQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default async function TourButton() {
  const parametres = await sanityFetch<ParametresQueryResponse>({
    query: PARAMETRES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  return (
    <Link
      href="/spectacles-strasbourg/revue-scoute"
      className="sub-heading group relative flex w-fit items-center gap-xs rounded-sm before:absolute before:-bottom-2 before:z-10 before:h-[1px] before:w-full before:max-w-0 before:bg-black before:duration-medium after:absolute after:-bottom-2 after:z-10 after:h-[1px] after:w-full after:bg-black/20 hover:before:max-w-full laptop:gap-sm"
      scroll={false}
    >
      <span>{parametres?.[0]?.tourneeBoutton ?? 'Découvrir la tournée 2024'}</span>
      <LuArrowUpRight className="rotate-0 duration-medium group-hover:rotate-45 group-hover:delay-300" />
    </Link>
  );
}
