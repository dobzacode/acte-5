import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { PARAMETRES_QUERY, ParametresQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';

export default async function LinkButton() {
  const parametres = await sanityFetch<ParametresQueryResponse>({
    query: PARAMETRES_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!parametres?.[0]?.lienBilletterie) return null;

  return (
    <a
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'body rounded-xs font-normal duration-medium hover:opacity-80'
      )}
      href={parametres?.[0]?.lienBilletterie ?? ''}
    >
      Oui je me rends sur la billeterie
    </a>
  );
}
