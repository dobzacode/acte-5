import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, PostQueryResponse } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { ComingFromBottomVariant, ComingFromTopVariant } from '../framer-motion/div-variants';
import DivWrapper from '../framer-motion/div-wrapper';
import UiBreadcrumbs from '../ui/ui-breadcrumbs';
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
      <main>
        <section className="section-px container  mx-auto flex flex-col gap-lg  pb-lg laptop:max-w-[50rem]">
          <DivWrapper variant={ComingFromTopVariant} inverseOnExit={false}>
            <UiBreadcrumbs
              element={[
                { text: 'Evenement', href: '/agence-evenementielle-strasbourg' },
                { text: 'Blog', href: '/blog' },
                { text: post.titre, href: post.slug.current }
              ]}
            ></UiBreadcrumbs>
          </DivWrapper>

          <DivWrapper variant={ComingFromBottomVariant} inverseOnExit={false}>
            <Post post={post} />
          </DivWrapper>
        </section>
      </main>
    </>
  );
}
