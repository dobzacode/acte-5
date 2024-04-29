import { cn } from '@/lib/utils';
import { PostQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import InViewWrapper from '../framer-motion/InView-wrapper';
import DivHoverWrapper from '../framer-motion/hover-wrapper';

export default function PostSnippet({
  post,
  className
}: {
  post: PostQueryResponse;
  className: string;
}) {
  if (!post) return null;

  return (
    <li className={cn('group flex w-full gap-lg', className)}>
      <Link className="  " href={`publication/${post.slug.current}`}>
        <DivHoverWrapper
          variant={{
            hover: {
              scale: 1.01,
              transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' }
            }
          }}
        >
          <Image
            className="duration-medium hover:shadow-large"
            src={urlForImage(post.mainImage).width(1000).height(800).dpr(2).quality(80).url()}
            alt="My Image"
            width={1000}
            height={800}
            sizes="(max-width: 600px) 90vw, (max-width: 1400px) 60vw, 1000px"
            placeholder="blur"
            blurDataURL={urlForImage(post.mainImage).width(20).quality(20).url()}
          />
        </DivHoverWrapper>
      </Link>

      <div className="flex w-3/4 flex-col gap-xl ">
        <p className="body whitespace-nowrap font-bold">
          {format(new Date(post._createdAt), 'dd MMMM yyyy', { locale: fr }).toUpperCase()}
        </p>
        <InViewWrapper
          className={'group-odd:origin-left group-even:origin-right'}
          variant={{ visible: { scale: 1.2 } }}
          viewport={{ margin: '-20%' }}
        >
          <h2 className="heading--large text-primary-500">
            <Link href={`publication/${post.slug.current}`}>{post.titre}</Link>
          </h2>
        </InViewWrapper>
        <p className="sub-heading ">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia quam non mi
          facilisis, et facilisis lectus tristique. Vestibulum quis venenatis eros. In fermentum
          aliquet lacus, nec iaculis lorem imperdiet sed.
        </p>

        {post.auteur && <p className="body font-semibold">Par {post.auteur._type}</p>}
      </div>
    </li>
  );
}
