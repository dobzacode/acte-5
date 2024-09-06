import EmblaCarousel from '@/components/ui/image-carousel/carousel/embla-post-carousel';
import { decodeAssetId, notEmpty } from '@/lib/utils';
import { Image as ImageSanity, SpectacleQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../../../sanity/portable-text';

const formatList = (list: string[]) => {
  if (!list || list.length === 0) return '';
  if (list.length === 1) return list[0];
  if (list.length === 2) return list.join(' et ');
  return list.slice(0, -1).join(', ') + ' et ' + list.slice(-1);
};

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
          try {
            const { width, height } = decodeAssetId(image.asset._ref);
            image.url = await urlForImage(image)
              .width(width)
              .height(height)
              .dpr(2)
              .quality(80)
              .url();
            image.blurSrc = urlForImage(image).width(width).height(height).quality(20).url();
            return image;
          } catch (e) {
            return null;
          }
        })
      )
    : null;

  const {
    ecritureEtJeu,
    miseEnScene,
    costumes,
    lumiereEtRegie,
    musiqueEtSon,
    photos,
    ecritureEtJeuEtMiseEnScene,
    duree,
    decors,
    body,
    informations,
    dates
  } = spectacle;

  const imageArr = imagesWithUrl ? imagesWithUrl.filter(notEmpty) : null;

  const { width, height } = decodeAssetId(spectacle.mainImage?.asset._ref);

  let mainImage;
  try {
    mainImage = spectacle.mainImage
      ? urlForImage(spectacle.mainImage).width(width).height(height).dpr(2).quality(80).url()
      : null;
  } catch (error) {
    console.error('Error generating main image URL:', error);
    mainImage = null;
  }

  return (
    <>
      <div className="flex h-full gap-md max-tablet:flex-col-reverse">
        {mainImage ? (
          <Image
            priority={true}
            className="h-full rounded-sm"
            src={mainImage}
            alt="My Image"
            width={800}
            height={800}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
          />
        ) : null}
        <div className="flex-grow bg-primary-400 pl-0.5"></div>
        <aside className="[&>div]:body flex w-fit flex-wrap gap-md tablet:flex-col [&>div>*:first-child]:laptop:whitespace-nowrap [&>div>*:last-child]:font-medium">
          {duree && (
            <div className="sub-heading flex flex-col">
              <p className="text-black/40">Durée</p>
              <p>{duree}</p>
            </div>
          )}
          {ecritureEtJeuEtMiseEnScene && (
            <div className="flex flex-col">
              <p className="text-black/40">Ecriture et jeu et mise en scène</p>
              <p>{formatList(ecritureEtJeuEtMiseEnScene)}</p>
            </div>
          )}
          {ecritureEtJeu && (
            <div className="flex flex-col">
              <p className="text-black/40">Ecriture et jeu</p>
              <p>{formatList(ecritureEtJeu)}</p>
            </div>
          )}
          {miseEnScene && !ecritureEtJeuEtMiseEnScene ? (
            <div className="flex flex-col">
              <p className="text-black/40">Mise en scène</p>
              <p>{miseEnScene}</p>
            </div>
          ) : null}
          {costumes && (
            <div className="flex flex-col">
              <p className="text-black/40">Costumes</p>
              <p>{formatList(costumes)}</p>
            </div>
          )}
          {lumiereEtRegie && (
            <div className="flex flex-col">
              <p className="text-black/40">Lumière et régie</p>
              <p>{formatList(lumiereEtRegie)}</p>
            </div>
          )}
          {musiqueEtSon && (
            <div className="flex flex-col">
              <p className="text-black/40">Musique et son</p>
              <p>{formatList(musiqueEtSon)}</p>
            </div>
          )}
          {decors && (
            <div className="flex flex-col">
              <p className="text-black/40">Décors</p>
              <p>{formatList(decors)}</p>
            </div>
          )}
          {photos && (
            <div className="flex flex-col">
              <p className="text-black/40">Photos</p>
              <p>{formatList(photos)}</p>
            </div>
          )}
        </aside>
      </div>

      <div className="prose prose-base max-w-full">
        {body ? <CustomPortableText value={body}></CustomPortableText> : null}
        {informations && (
          <>
            <br />
            <CustomPortableText value={informations}></CustomPortableText>
          </>
        )}
      </div>
      {imageArr ? (
        <EmblaCarousel imageArr={imageArr} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
