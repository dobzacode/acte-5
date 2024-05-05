import { Image as ImageSanity, SpectacleQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../../../sanity/portable-text';
import EmblaCarousel from '../../../ui/image-carousel/carousel/embla-post-carousel';

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
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
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
    body
  } = spectacle;

  return (
    <>
      <section className="[&>div]:body flex w-fit   flex-wrap  gap-xl [&>div>*:first-child]:whitespace-nowrap [&>div>*:last-child]:font-medium">
        {duree && (
          <div className="sub-heading flex flex-col ">
            <p className="text-black/40">Durée</p>
            <p>{duree}</p>
          </div>
        )}
        {ecritureEtJeuEtMiseEnScene && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Ecriture et jeu et mise en scène</p>
            <p>{formatList(ecritureEtJeuEtMiseEnScene)}</p>
          </div>
        )}
        {ecritureEtJeu && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Ecriture et jeu</p>
            <p>{formatList(ecritureEtJeu)}</p>
          </div>
        )}
        {miseEnScene && !ecritureEtJeuEtMiseEnScene ? (
          <div className=" flex flex-col ">
            <p className="text-black/40">Mise en scène</p>
            <p>{miseEnScene}</p>
          </div>
        ) : null}
        {costumes && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Costumes</p>
            <p>{formatList(costumes)}</p>
          </div>
        )}
        {lumiereEtRegie && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Lumière et régie</p>
            <p>{formatList(lumiereEtRegie)}</p>
          </div>
        )}
        {musiqueEtSon && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Musique et son</p>
            <p>{formatList(musiqueEtSon)}</p>
          </div>
        )}
        {decors && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Décors</p>
            <p>{formatList(decors)}</p>
          </div>
        )}
        {photos && (
          <div className=" flex flex-col ">
            <p className="text-black/40">Photos</p>
            <p>{formatList(photos)}</p>
          </div>
        )}
      </section>
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
        {body ? <CustomPortableText value={body}></CustomPortableText> : null}
      </div>
      {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
