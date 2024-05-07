'use client';

import '@vidstack/react/player/styles/base.css';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';
import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent
} from '@vidstack/react';
import { VideoLayout } from './layouts/video-layout';

export function Player({
  src,
  className,
  poster,
  title
}: {
  src: string;
  className?: string;
  poster: string;
  title: string;
}) {
  let player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', state.paused);
      // console.log('is audio view?', '->', state.viewType === 'audio');
    });
  }, []);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    // ...
  }

  return (
    <MediaPlayer
      className={cn(
        'ring-media-focus group relative z-40 aspect-video w-full overflow-hidden rounded-md bg-slate-900 font-sans text-white data-[focus]:ring-4',
        className
      )}
      src={src}
      crossOrigin
      playsInline
      onProviderChange={onProviderChange}
      onCanPlay={onCanPlay}
      ref={player}
    >
      <MediaProvider className="">
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
          src={poster}
          alt={title}
        />
      </MediaProvider>

      <VideoLayout />
    </MediaPlayer>
  );
}
