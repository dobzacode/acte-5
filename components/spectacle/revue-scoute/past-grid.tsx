'use client';

import NextJsImage from '@/components/ui/image-carousel/carousel/nextjs-image';
import ImagePulsing from '@/components/ui/image-pulsing';
import { cn } from '@/lib/utils';
import { Image as ImageSanity } from '@/sanity/lib/queries';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

type CarouselProjectProps = {
  imageArr: Omit<ImageSanity, 'asset' | '_type'>[];
  className?: string;
  innerClassName?: string;
  outerClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
};

const PastGrid: React.FC<CarouselProjectProps> = ({
  imageArr,
  className,
  innerClassName,
  outerClassName,
  previousClassName,
  nextClassName
}) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const lightboxSlides = imageArr.map((item) => ({
    src: item.url,
    width: 3840,
    height: 2560,
    alt: item.alt ? item.alt : '',
    blurDataURL: item.blurSrc,
    srcSet: [
      { src: item.url, width: 320, height: 213 },
      { src: item.url, width: 640, height: 426 },
      { src: item.url, width: 1200, height: 800 },
      { src: item.url, width: 2048, height: 1365 },
      { src: item.url, width: 3840, height: 2560 }
    ]
  }));

  useEffect(() => {
    if (window) {
      setLoading(true);
    }
  });

  if (!loading) {
    return null;
  }

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 500: 3, 750: 4, 900: 5, 1100: 6, 1300: 8 }}
      >
        <Masonry>
          {imageArr.map((image, index) => (
            <ImagePulsing
              key={index}
              skeletoncss="h-full object-cover w-full"
              width={400}
              height={400}
              className={cn('cursor-pointer')}
              sizes={'(max-width: 640px) 100vw, 50vw'}
              src={image.url}
              placeholder="blur"
              blurDataURL={image.blurSrc}
              alt=""
              onClick={() => openLightbox(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={closeLightbox}
        plugins={[Zoom]}
        slides={lightboxSlides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default PastGrid;
