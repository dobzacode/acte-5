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
import { cn, decodeAssetId, notEmpty } from '@/lib/utils';
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
    | 'Edition';
  actualSlug?: string;
}) {
  const query =
    !actualSlug && !categorie
      ? groq`*[_type == "evenement" && defined(imageGallery) && "${categorie}" in categories && defined(slug.current)]`
      : groq`*[_type == "evenement" && defined(slug.current) && slug.current != "${actualSlug}"]`;

  const events = await sanityFetch<EventWithImgQueryRes[]>({
    query,
    perspective: 'published',
    stega: false
  });

  if (!events || !events.some((event) => event.imageGallery[0])) return null;

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
        className=""
        variant={ComingFromBottomVariant}
      >
        {imageArr && (
          <Carousel
            opts={{ loop: true }}
            className="section-px flex max-w-[100vw] items-center gap-md laptop:mx-auto [&>div]:rounded-sm"
          >
            <>
              <CarouselPrevious className="relative" />
            </>
            <CarouselContent className="laptop-large:-ml-sm">
              {imageArr.map((image, index) => (
                <CarouselItem
                  key={`${image.titre}-${index}`}
                  className="basis-full duration-medium hover:grayscale mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3 laptop-large:pr-sm"
                >
                  <Link
                    scroll={false}
                    href={`/agence-evenementielle-strasbourg/projets/${image.slug.current}`}
                    className={cn(
                      'card relative flex h-full flex-col items-center gap-md overflow-hidden rounded-sm border-0 p-0 shadow-xl laptop:gap-lg'
                    )}
                    key={index}
                  >
                    <ImagePulsing
                      width={400}
                      height={400}
                      className={cn(
                        'aspect-square h-full w-full grow cursor-pointer overflow-hidden rounded-t-sm object-cover object-center',
                        'name' in image ? null : 'rounded-t-none'
                      )}
                      sizes={'(max-width: 640px) 100vw, 50vw'}
                      src={image.src}
                      placeholder="blur"
                      blurDataURL={image.blurSrc}
                      alt={`Image ${image.titre}`}
                    ></ImagePulsing>

                    <div className="relative z-20 flex flex-col items-center gap-sm text-pretty rounded-b-sm bg-white px-md pb-md text-center">
                      <p className="sub-heading line-clamp-1">
                        <strong>{image.client}</strong>
                      </p>
                    </div>
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
