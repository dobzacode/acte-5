import { groq } from 'next-sanity';

import { POSTS_QUERY, POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';

import PostpageContent from '@/components/event/blog/post/postpage-content';
import { sanityFetch } from '@/sanity/lib/fetch';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};


export default function Page({ params }: Props) {
  return <PostpageContent params={params}></PostpageContent>;
}
