import Post from '@/components/post/post';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';
import { QueryParams } from 'next-sanity';

export default async function PostPreview({ params }: { params: QueryParams }) {
  const post = await sanityFetch<PostQueryResponse>({
    query: POST_QUERY,
    params,
    stega: true,
    perspective: 'previewDrafts'
  });

  return post ? <Post post={post} /> : <div className="bg-red-100">Post not found</div>;
}
