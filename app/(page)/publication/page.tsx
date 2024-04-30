// ./app/page.tsx

import {
  ComingFromLeftVariant,
  ComingFromRightVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import DivWrapper from '@/components/framer-motion/div-wrapper';
import InViewWrapper from '@/components/framer-motion/inview-wrapper';
import PostSnippet from '@/components/post/post-snippet';
import UiBreadcrumbs from '@/components/ui/ui-breadcrumbs';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY, Post, PostsQueryResponse } from '@/sanity/lib/queries';

export default async function Page() {
  const posts = await sanityFetch<PostsQueryResponse>({
    query: POSTS_QUERY,
    perspective: 'published',
    stega: false
  });

  return (
    <main className="relative">
      <section className="container mx-auto flex flex-col gap-lg laptop:max-w-[80rem]">
        <DivWrapper variant={ComingFromTopVariant} inverseOnExit={false}>
          <UiBreadcrumbs
            element={[
              { text: 'Accueil', href: '/' },
              { text: 'Publication', href: '/publication' }
            ]}
          ></UiBreadcrumbs>
        </DivWrapper>
        <ul className="flex flex-col gap-6xl ">
          {posts
            ? posts.map((post: Post, index: number) => {
                return (
                  <InViewWrapper
                    variant={index % 2 ? ComingFromLeftVariant : ComingFromRightVariant}
                    viewport={{ margin: '-20%' }}
                    inverseOnExit={true}
                    key={post._id}
                  >
                    <PostSnippet className={index % 2 ? 'flex-row-reverse' : ''} post={post} />
                  </InViewWrapper>
                );
              })
            : 'No posts found'}
          {posts
            ? posts.map((post: Post, index: number) => {
                return (
                  <InViewWrapper
                    variant={index % 2 ? ComingFromLeftVariant : ComingFromRightVariant}
                    viewport={{ margin: '-20%' }}
                    inverseOnExit={true}
                    key={post._id}
                  >
                    <PostSnippet className={index % 2 ? 'flex-row-reverse' : ''} post={post} />
                  </InViewWrapper>
                );
              })
            : 'No posts found'}
        </ul>
      </section>
    </main>
  );
}
