import PostSnippet from '@/components/event/blog/post/post-snippet';
import {
  ComingFromLeftVariant,
  ComingFromRightVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import ContactSection from '@/components/spectacle/contact-section';
import TitleSection from '@/components/ui/title-section';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY, Post, PostsQueryResponse } from '@/sanity/lib/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Acte 5 à Strasbourg',
  description:
    "Explorez notre blog événementiel pour trouver des conseils pratiques, des idées inspirantes et les dernières tendances dans l'organisation d'événements d'entreprise. Découvrez comment rendre vos événements inoubliables grâce à nos articles riches en conseils et en expertise. Que vous planifiiez une inauguration, une convention ou une soirée spéciale, notre blog est votre ressource ultime pour réussir chaque étape de votre événement."
};

export default async function Home() {
  const posts = await sanityFetch<PostsQueryResponse>({
    query: POSTS_QUERY,
    perspective: 'published',
    stega: false
  });

  return (
    <main className="relative flex flex-col items-center justify-center gap-xl overflow-hidden px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
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
      <section className="mx-auto w-fit">
        <ul className="section-px flex flex-col gap-xl pt-xl laptop:container mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl laptop:mx-auto laptop:gap-6xl laptop-large:gap-6xl">
          {posts
            ? posts.map((post: Post, index: number) => {
                return (
                  <InviewWrapper
                    tag="li"
                    className=""
                    variant={index % 2 ? ComingFromLeftVariant : ComingFromRightVariant}
                    key={post._id}
                  >
                    <PostSnippet className={index % 2 ? 'flex-row-reverse' : ''} post={post} />
                  </InviewWrapper>
                );
              })
            : 'No posts found'}
        </ul>
      </section>
      <ContactSection></ContactSection>
    </main>
  );
}
