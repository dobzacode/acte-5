import { POSTS_QUERY, POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';

import PostpageContent from '@/components/event/blog/post/postpage-content';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await sanityFetch<{ post: string }[]>({
    query: `${POSTS_QUERY}{"post": slug.current}`,
    perspective: 'published',
    stega: false
  });

  return posts;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResponse>({
    query: POST_QUERY,
    params: { slug: params.slug },
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
  return <PostpageContent params={params}></PostpageContent>;
}
