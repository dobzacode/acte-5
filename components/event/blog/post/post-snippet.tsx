import { cn } from '@/lib/utils';
import { PostQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import InViewWrapper from '../../../framer-motion/inview-wrapper';

export default function PostSnippet({
  post,
  className
}: {
  post: PostQueryResponse;
  className: string;
}) {
  if (!post) return null;

  return (
    <div className={cn('group flex w-full gap-lg', className)}>
      <Link
        className="relative aspect-square w-1/2 max-tablet:hidden"
        href={`blog/${post.slug.current}`}
      >
        <Image
          className="rounded-md object-cover duration-medium hover:shadow-large"
          src={urlForImage(post.mainImage).width(1000).height(800).dpr(2).quality(80).url()}
          alt={post.mainImage.alt ?? ''}
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1400px) 60vw, 1000px"
          placeholder="blur"
          blurDataURL={urlForImage(post.mainImage).width(20).quality(20).url()}
        />
      </Link>

      <div className="max-tablet:card flex w-full flex-col gap-md mobile-large:gap-lg tablet:gap-xl laptop:w-3/4">
        <p className="body  whitespace-nowrap font-bold">
          {format(new Date(post._createdAt), 'dd MMMM yyyy', { locale: fr }).toUpperCase()}
        </p>
        <InViewWrapper
          className={'group-odd:origin-left group-even:origin-right'}
          variant={{ visible: { scale: 1.2 } }}
          viewport={{ margin: '-20%' }}
        >
          <h2 className="heading--sub-extra-large text-pretty text-primary-400">
            <Link className="text-pretty" href={`blog/${post.slug.current}`}>
              {post.titre}
            </Link>
          </h2>
        </InViewWrapper>
        <p className="sub-heading line-clamp-4">
          {post.description
            ? post.description
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia quam non mi
          facilisis, et facilisis lectus tristique. Vestibulum quis venenatis eros. In fermentum
          aliquet lacus, nec iaculis lorem imperdiet sed`}
        </p>

        {post.auteur && <p className="body font-semibold">Par {post.auteur._type}</p>}
      </div>
    </div>
  );
}
