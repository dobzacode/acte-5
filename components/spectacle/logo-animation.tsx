'use client';

import { useEffect, useRef } from 'react';

export default function LogoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 4) {
        video.pause();
      }
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      loop
      className="absolute left-[15vw] top-0 shrink-0 origin-top scale-110 object-cover"
    >
      <source src={'assets/logo-animation.webm'} type="video/webm" />
      Votre navigateur ne supporte pas la balise video.
    </video>
  );
}
