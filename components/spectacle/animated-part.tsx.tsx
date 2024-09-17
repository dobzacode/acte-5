'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AnimatedPart({ isSpectacle }: { isSpectacle?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsButton = useAnimationControls();
  const controlsDiv = useAnimationControls();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 1.75) {
        controlsButton.start('enter');
      }
      if (video.currentTime >= 3) {
        video.pause();
      }
    });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === video) {
            video.play();
            controlsDiv.start('enter');
          }
        });
      },
      {
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (observerRef.current && video) {
      observerRef.current.observe(video);
    }

    return () => {
      if (observerRef.current && video) {
        observerRef.current.unobserve(video);
      }
    };
  }, [controlsButton]);

  return (
    <div className="-mr-2xl flex h-full w-fit items-center max-laptop:-mb-2xl max-tablet:-mb-4xl laptop:-mr-4xl laptop-large:-mr-8xl">
      <motion.div
        animate={controlsDiv}
        initial="hidden"
        variants={{
          hidden: {
            y: -700,
            maxHeight: '120px !important',
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              opacity: {
                duration: 0.2
              },
              y: {
                type: 'spring',
                stiffness: 20
              },
              maxHeight: {
                delay: 1.7,
                duration: 0.35
              }
            },
            maxHeight: '220px'
          },
          exit: {
            y: -700
          }
        }}
        className="card relative z-20 -mr-4xl flex h-fit w-fit shrink-0 flex-col items-center gap-md overflow-hidden max-laptop:-mt-2xl max-tablet:-mt-xl max-mobile-large:mt-md laptop:gap-xl"
      >
        <p className="sub-heading w-full max-w-[30ch] text-pretty text-center">
          Avez-vous des questions sur nos événements ou souhaitez-vous réserver pour un groupe ?
        </p>
        <motion.div
          animate={controlsButton}
          initial="hidden"
          variants={{
            hidden: {
              x: 200,
              y: 100
            },
            enter: {
              x: 0,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 50
              }
            },
            exit: {
              x: 200,
              y: 100
            }
          }}
          className="group flex w-full origin-center justify-center hover:opacity-90"
        >
          <Link
            href={
              isSpectacle
                ? '/spectacles-strasbourg/contact'
                : '/agence-evenementielle-strasbourg/contact'
            }
            className="sub-heading shadow-primary-sm 0 mx-auto flex grow items-center gap-xs rounded-sm border-b-2 border-r-2 border-primary-600 bg-primary px-md py-sm text-center text-white laptop:gap-sm laptop:px-lg laptop:py-md"
            scroll={false}
          >
            <span className="w-full text-center">Communiquons ensemble</span>
          </Link>
        </motion.div>
      </motion.div>
      <div className="relative h-[700px] w-[80vw] shrink-0 origin-top overflow-hidden max-laptop:scale-85 max-tablet:scale-80 max-mobile-large:pr-5xl tablet:w-[700px]">
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute top-0 h-full shrink-0 object-none object-center"
        >
          <source src={'/assets/logo-animation.webm'} type="video/webm" />
          Votre navigateur ne supporte pas la balise video.
        </video>
      </div>
    </div>
  );
}
