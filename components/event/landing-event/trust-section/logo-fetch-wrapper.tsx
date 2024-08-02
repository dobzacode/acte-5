import { sanityFetch } from '@/sanity/lib/fetch';
import { LOGOS_QUERY, LogosQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import LogoSection from './logo-section';

export default async function LogoFetchWrapper({
  isTrustSection = true
}: {
  isTrustSection?: boolean;
}) {
  const logos = await sanityFetch<LogosQueryResponse>({
    query: LOGOS_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!logos) {
    return notFound();
  }

  console.log(logos);

  const withUrl = await Promise.all(
    logos.map(async (logo) => {
      const url = await urlForImage(logo.logo).auto('format').dpr(2).quality(80).url();
      const blurSrc = urlForImage(logo.logo).width(20).quality(20).url();
      return { ...logo, blurSrc, url };
    })
  );

  return <LogoSection logos={withUrl} isTrustSection={isTrustSection}></LogoSection>;
}
