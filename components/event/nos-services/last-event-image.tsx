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
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EventWithImgQueryRes } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import Image from 'next/image';

export interface EventWithImg extends EventWithImgQueryRes {
  src: string;
  blurSrc: string;
}

export default async function LastEvent({
  h2,
  categorie
}: {
  h2: string;
  categorie:
    | 'Convention'
    | 'Anniversaire'
    | 'Inauguration'
    | 'Cérémonie des médailles'
    | 'Cérémonie des voeux'
    | 'Portes ouvertes'
    | 'Soirée de gala'
    | "Spectacle d'entreprise"
    | 'Team Building'
    | 'Stratégie de communication'
    | 'Identité visuelle';
}) {
  const events = await sanityFetch<EventWithImgQueryRes[]>({
    query: groq`*[_type == "evenement" && defined(imageGallery) && categorie == "${categorie}"]`,
    perspective: 'published',
    stega: false
  });

  if (!events) return null;

  const eventsWithImg = await Promise.all(
    events.map(async (event) => {
      const src = await urlForImage(event.imageGallery[0])
        .width(1920)
        .height(1080)
        .dpr(2)
        .quality(80)
        .url();
      const blurSrc = urlForImage(event.imageGallery[0]).width(20).quality(20).url();
      return { src, blurSrc, ...event };
    })
  );

  return (
    <section className=" inner-section-gap mt-2xl flex w-full flex-col items-center overflow-hidden overflow-x-hidden bg-primary-400 py-2xl ">
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
        <Carousel className="section-px  flex max-w-[100vw] items-center  gap-md laptop:mx-auto [&>div]:rounded-sm">
          <>
            <CarouselPrevious className="relative" />
          </>
          <CarouselContent className="laptop-large:-ml-sm">
            {eventsWithImg.map((image, index) => (
              <CarouselItem className=" basis-full mobile-large:basis-1/2 tablet:basis-1/3 laptop:basis-1/3 laptop-large:basis-1/3 laptop-large:pr-sm ">
                <div
                  className={cn(
                    'card   relative flex  h-full flex-col items-center gap-md overflow-hidden rounded-sm border-0 p-0 shadow-xl'
                  )}
                  key={index}
                >
                  <Image
                    width={400}
                    height={400}
                    className={cn(
                      'aspect-square h-full w-full grow cursor-pointer overflow-hidden rounded-t-sm  object-cover',
                      'name' in image ? null : 'rounded-t-none'
                    )}
                    sizes={'(max-width: 640px) 100vw, 50vw'}
                    src={image.src}
                    placeholder="blur"
                    blurDataURL={image.blurSrc}
                    alt={`Image ${image.titre}`}
                  ></Image>

                  <div className="flex  flex-col items-center gap-sm  text-pretty px-md pb-md text-center">
                    <p className="sub-heading   text-ellipsis">
                      <strong>
                        {image.titre}
                        {image.titre}
                        {image.titre}
                      </strong>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <>
            <CarouselNext className="relative" />
          </>
        </Carousel>
      </InviewWrapper>
    </section>
  );
}
