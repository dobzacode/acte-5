import { Image as ImageSanity, SpectacleQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../../../sanity/portable-text';
import EmblaCarousel from '../../../ui/image-carousel/carousel/embla-post-carousel';

export default async function SpectacleContent({
  spectacle
}: {
  spectacle: SpectacleQueryResponse;
}) {
  if (!spectacle) {
    return notFound();
  }

  const imagesWithUrl = spectacle.imageGallery
    ? await Promise.all(
        spectacle.imageGallery.map(async (image: ImageSanity) => {
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  const { ecritureEtJeu, miseEnScene, costumes, lumiereEtRegie, musiqueEtSon, photos } = spectacle;

  const spectacleDetails = {
    ecritureEtJeu,
    miseEnScene,
    costumes,
    lumiereEtRegie,
    musiqueEtSon,
    photos
  };

  return (
    <>
      {spectacle.mainImage ? (
        <Image
          className="shrink-0 rounded-sm"
          src={urlForImage(spectacle.mainImage).width(800).height(400).dpr(2).quality(80).url()}
          alt="My Image"
          width={800}
          height={800}
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
          placeholder="blur"
          blurDataURL={urlForImage(spectacle.mainImage).width(20).quality(20).url()}
        />
      ) : null}

      <div className="prose prose-base max-w-full">
        {spectacle.body ? <CustomPortableText value={spectacle.body}></CustomPortableText> : null}
      </div>
      {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
