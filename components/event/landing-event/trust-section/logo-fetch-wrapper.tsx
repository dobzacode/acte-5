import { decodeAssetId, notEmpty, reorganizeArray } from '@/lib/utils';
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

  const withUrl = await Promise.all(
    logos.map(async (logo) => {
      try {
        const { width, height } = decodeAssetId(logo.logo.asset._ref);
        const url = await urlForImage(logo.logo)
          .width(width)
          .height(height)
          .dpr(2)
          .quality(80)
          .auto('format')
          .url();
        const blurSrc = urlForImage(logo.logo).width(width).height(height).quality(20).url();
        return { ...logo, blurSrc, url };
      } catch (e) {
        return null;
      }
    })
  );

  const imageArr = withUrl.filter(notEmpty);

  const organizedLogos = reorganizeArray(imageArr);

  return <LogoSection logos={organizedLogos} isTrustSection={isTrustSection}></LogoSection>;
}
