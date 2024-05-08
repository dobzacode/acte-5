import { Player } from '@/components/ui/video/video-player';
import { EventWithVideoQueryRes } from '@/sanity/lib/queries';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface VideoProps extends EventWithVideoQueryRes {
  videoPath: string;
}

export default function VideoCarousel({ videoArr }: { videoArr: VideoProps[] }) {
  return (
    <Carousel className="section-px flex items-center gap-md [&>div]:rounded-sm">
      {videoArr.length > 1 && (
        <>
          <CarouselPrevious className="relative" />
        </>
      )}
      <CarouselContent>
        {videoArr.map((video, index) => (
          <CarouselItem className="basis-1/3 max-tablet:basis-full" key={index}>
            <div
              className={cn(
                'card   relative flex  h-full  flex-col items-center gap-sm overflow-clip  rounded-sm border-0 p-0 '
              )}
            >
              <Player
                className="grow cursor-pointer rounded-b-none rounded-t-sm"
                src={video.videoPath}
                poster={video.videoPath}
                title={video.titre}
              />
              <div className="relative z-30 block   max-w-[20ch] flex-col  items-center gap-sm text-ellipsis text-pretty p-md text-center text-black">
                <p className="sub-heading text-ellipsis  whitespace-nowrap">{video.titre}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {videoArr.length > 1 && (
        <>
          <CarouselNext className="relative" />
        </>
      )}
    </Carousel>
  );
}
