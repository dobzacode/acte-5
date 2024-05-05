import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { ComingFromBottomVariant } from '../../../framer-motion/div-variants';
import DivWrapper from '../../../framer-motion/div-wrapper';
import TitleSection from '../../../ui/title-section';
import Post from './post';

export default async function PostpageContent({ params }: { params: { slug: string } }) {
  const post = await sanityFetch<PostQueryResponse>({
    query: POST_QUERY,
    params,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <main className="relative mx-auto flex flex-col items-center justify-center gap-2xl px-0 pt-5xl laptop:pt-7xl">
        <section className="max-laptop:section-px relative mx-auto flex flex-col items-center justify-center gap-2xl max-laptop:gap-3xl mobile-small:gap-3xl mobile-medium:gap-2xl  mobile-large:gap-4xl  laptop:max-w-[50rem]">
          <TitleSection
            className="px-0"
            title={post.titre.toUpperCase()}
            element={[
              { text: 'Evenement', href: '/agence-evenementielle-strasbourg' },
              { text: 'Blog', href: '/blog' },
              { text: post.titre, href: post.slug.current }
            ]}
          ></TitleSection>
          <DivWrapper
            className="flex flex-col gap-2xl  overflow-hidden laptop:container mobile-large:gap-3xl laptop:mx-auto"
            variant={ComingFromBottomVariant}
            inverseOnExit={false}
          >
            <Post post={post} />
          </DivWrapper>
        </section>
      </main>
    </>
  );
}
