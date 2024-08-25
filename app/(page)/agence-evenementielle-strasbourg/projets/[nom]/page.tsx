import PostpageContent from '@/components/event/blog/post/postpage-content';

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  return <PostpageContent params={params}></PostpageContent>;
}
