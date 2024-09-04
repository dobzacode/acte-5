import { notEmpty } from '@/lib/utils';
import { Image as ImageSanity, PostQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../../../sanity/portable-text';
import EmblaCarousel from '../../../ui/image-carousel/carousel/embla-post-carousel';

export default async function Post({ post }: { post: PostQueryResponse }) {
  if (!post) {
    return notFound();
  }

  const imagesWithUrl = post.imageGallery
    ? await Promise.all(
        post.imageGallery.map(async (image: ImageSanity) => {
          try {
            image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

            image.blurSrc = urlForImage(image).width(20).quality(20).url();
            return image;
          } catch (e) {
            return null;
          }
        })
      )
    : null;

  const imageArr = imagesWithUrl ? imagesWithUrl.filter(notEmpty) : null;

  let mainImage;
  try {
    mainImage = post.mainImage
      ? urlForImage(post.mainImage).width(800).height(400).dpr(2).quality(80).url()
      : null;
  } catch (error) {
    console.error('Error generating main image URL:', error);
    mainImage = null;
  }

  return (
    <>
      {mainImage ? (
        <Image
          className="shrink-0 rounded-sm"
          src={mainImage}
          alt={post.mainImage.alt ? post.mainImage.alt : ''}
          width={800}
          height={800}
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
        />
      ) : null}
      <div className="prose prose-base max-w-full">
        {post.body ? <CustomPortableText value={post.body}></CustomPortableText> : null}
      </div>
      {imageArr ? (
        <EmblaCarousel imageArr={imageArr} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
