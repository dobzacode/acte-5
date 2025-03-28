import {
  ComingFromBottomVariant,
  ComingFromTopVariant
} from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import ImagePulsing from '@/components/ui/image-pulsing';
import { decodeAssetId, notEmpty } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventWithImgQueryRes } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import Link from 'next/link';

export interface EventWithImg extends EventWithImgQueryRes {
  src: string;
  blurSrc: string;
}

export default async function LastEvent({
  h2,
  categorie,
  actualSlug
}: {
  h2: string;
  categorie?:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Spectacle clef en main'
    | 'Spectacle sur mesure'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building'
    | 'Identité visuelle'
    | "Vidéo d'entreprise"
    | 'Support de communication'
    | 'Lancement de produit'
    | 'Communication digitale'
    | 'Scénographie'
    | 'Edition';
  actualSlug?: string;
}) {
  const query =
    !actualSlug && categorie
      ? groq`*[_type == "evenement" && defined(imageGallery) && "${categorie}" in categories && defined(slug.current)]`
      : groq`*[_type == "evenement" && defined(slug.current) && slug.current != "${actualSlug}"]`;

  const events = await sanityFetch<EventWithImgQueryRes[]>({
    query,
    perspective: 'published',
    stega: false
  });

  if (!events || !events.some((event) => event.imageGallery[0])) return <div></div>;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      try {
        const { width, height } = decodeAssetId(event.imageGallery?.[0].asset._ref);
        const src = await urlForImage(event.imageGallery?.[0])
          .width(width)
          .height(height)
          .dpr(2)
          .quality(80)
          .url();
        const blurSrc = urlForImage(event.imageGallery?.[0])
          .width(width)
          .height(height)
          .quality(20)
          .url();
        return { src, blurSrc, ...event };
      } catch (e) {
        return null;
      }
    })
  );

  const imageArr = eventsWithImg ? eventsWithImg.filter(notEmpty) : null;

  return (
    <section className="inner-section-gap mt-2xl flex w-full flex-col items-center overflow-hidden overflow-x-hidden bg-primary-400 py-xl mobile-small:py-xl mobile-medium:py-2xl mobile-large:py-3xl tablet:py-4xl">
      <InviewWrapper
        className="section-px container mx-auto flex flex-col items-center gap-xl text-center"
        variant={ComingFromTopVariant}
      >
        <h2 className="heading--large text-white">{h2}</h2>
      </InviewWrapper>
      <InviewWrapper
        viewport={{ once: true, margin: '200px 0px 200px 0px' }}
        variant={ComingFromBottomVariant}
      >
        {imageArr && (
          <Carousel className="section-px flex w-full max-w-[100vw] items-center gap-md laptop:mx-auto [&>div]:rounded-sm">
            <>
              <CarouselPrevious className="relative" />
            </>
            <CarouselContent className="h-[160px] w-full mobile-large:h-[200px] tablet:h-[300px] laptop:h-[400px] laptop-large:-ml-sm">
              {imageArr.map((image, index) => (
                <CarouselItem
                  key={`${image.titre}-${index}`}
                  className={`group duration-medium hover:grayscale laptop-large:pr-sm ${
                    imageArr.length === 1
                      ? 'ml-2 basis-full'
                      : imageArr.length === 2
                        ? 'basis-full mobile-large:basis-1/2'
                        : 'basis-full mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3'
                  } `}
                >
                  <Link
                    href={`/agence-evenementielle-strasbourg/projets/${image.slug.current}`}
                    className="group relative z-40 flex aspect-square h-full w-full flex-col-reverse overflow-hidden rounded-sm duration-medium after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-t after:from-black/100 after:to-transparent after:to-30%"
                    key={index}
                  >
                    <ImagePulsing
                      fill
                      sizes={'(min-width: 1024px) 50vw, 100vw'}
                      className={`h-full w-full object-cover duration-medium group-hover:scale-[102%]`}
                      placeholder="blur"
                      src={image.src}
                      blurDataURL={image.blurSrc}
                      alt={`Image ${image.titre}`}
                    ></ImagePulsing>

                    <p
                      className={`sub-heading before-bg relative z-50 line-clamp-1 text-pretty px-md text-white duration-slow hover:duration-fast`}
                    >
                      {image.client}
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <>
              <CarouselNext className="relative" />
            </>
          </Carousel>
        )}
      </InviewWrapper>
    </section>
  );
}
