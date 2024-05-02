import { Image as ImageSanity, PostQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../sanity/portable-text';
import EmblaCarousel from '../ui/image-carousel/carousel/embla-post-carousel';

export default async function Post({ post }: { post: PostQueryResponse }) {
  if (!post) {
    return notFound();
  }

  const imagesWithUrl = post.imageGallery
    ? await Promise.all(
        post.imageGallery.map(async (image: ImageSanity) => {
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  return (
    <section className="flex w-full flex-col  gap-lg">
      {post.titre ? <h1 className="heading--extra-large text-primary-400">{post.titre}</h1> : null}
      {post.mainImage ? (
        <Image
          className=""
          src={urlForImage(post.mainImage).width(800).height(400).dpr(2).quality(80).url()}
          alt="My Image"
          width={800}
          height={400}
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
          placeholder="blur"
          blurDataURL={urlForImage(post.mainImage).width(20).quality(20).url()}
        />
      ) : null}
      <div className="prose prose-base max-w-full">
        {post.body ? <CustomPortableText value={post.body}></CustomPortableText> : null}
      </div>
      {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null}
    </section>
  );
}
