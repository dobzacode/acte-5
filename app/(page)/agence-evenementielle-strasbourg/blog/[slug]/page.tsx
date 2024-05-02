import { groq } from 'next-sanity';

import { POSTS_QUERY, POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';

import PostpageContent from '@/components/post/postpage-content';
import PostpageSkeleton from '@/components/skeleton/postpage-skeleton';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`${POSTS_QUERY}{"slug": slug.current}`,
    perspective: 'published',
    stega: false
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResponse>({
    query: POST_QUERY,
    params,
    stega: false
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.mainImage);

  return {
    title: post?.metatitre,
    description: post?.metadescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata;
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<PostpageSkeleton />}>
      <PostpageContent params={params}></PostpageContent>
    </Suspense>
  );
}
