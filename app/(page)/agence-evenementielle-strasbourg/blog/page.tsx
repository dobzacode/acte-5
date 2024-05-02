import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import PostSnippet from '@/components/post/post-snippet';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY, Post, PostsQueryResponse } from '@/sanity/lib/queries';

export default async function Home() {
  const posts = await sanityFetch<PostsQueryResponse>({
    query: POSTS_QUERY,
    perspective: 'published',
    stega: false
  });

  console.log(posts);

  return (
    <main className="main relative gap-xl px-0 pt-5xl  mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida tincidunt varius. Vivamus fermentum volutpat semper. Donec ultrices nisi ac lacus ornare, sit amet auctor erat congue. Cras rutrum sapien sit amet arcu elementum, sed ornare justo posuere. Donec egestas, justo eu porttitor vestibulum, velit dui tincidunt velit, non aliquam odio magna ac felis. Mauris ornare mauris id arcu viverra, aliquet pharetra erat cursus. Sed ultricies vestibulum posuere.'
        }
        title={'BLOG'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/blog', text: 'Blog' }
        ]}
      ></TitleSection>
      <ul className="section-px container flex flex-col gap-xl  pt-xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl laptop:gap-6xl laptop-large:gap-6xl">
        {posts
          ? posts.map((post: Post, index: number) => {
              return (
                <InviewWrapper
                  variant={index % 2 ? ComingFromLeftVariant : ComingFromRightVariant}
                  inverseOnExit={true}
                  key={post._id}
                >
                  <PostSnippet className={index % 2 ? 'flex-row-reverse' : ''} post={post} />
                </InviewWrapper>
              );
            })
          : 'No posts found'}
      </ul>
    </main>
  );
}
