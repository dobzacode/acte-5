'use client';

import useBetterMediaQuery from '@/hooks/use-better-media-query';
import { cn } from '@/lib/utils';
import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AnimatedPart({ isSpectacle }: { isSpectacle?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const controlsButton = useAnimationControls();
  const controlsDiv = useAnimationControls();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useBetterMediaQuery('(max-width: 500px)');

  useEffect(() => {
    const video = videoRef.current;
    const div = divRef.current;
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
          if (entry.isIntersecting) {
            video.play();
            controlsDiv.start('enter');
          }
        });
      },
      {
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (observerRef.current && video && div) {
      observerRef.current.observe(video);
    }

    return () => {
      if (observerRef.current && video && div) {
        observerRef.current.unobserve(video);
      }
    };
  }, [controlsButton, controlsDiv]);

  console.log(isSpectacle, isMobile);

  return (
    <div className="-mr-2xl flex h-full w-fit items-center max-laptop:-mb-2xl max-tablet:-mb-4xl laptop:-mr-4xl laptop-large:-mr-8xl">
      <div className="-mr-4xl mt-5xl max-laptop:mt-sm max-tablet:-mt-2xl max-mobile-large:-mt-2xl laptop:-mr-0">
        <motion.div
          ref={divRef}
          key="wrapper-animated-div"
          animate={controlsDiv}
          initial="hidden"
          exit="exit"
          variants={{
            hidden: {
              x: -700,
              opacity: 0,
              maxHeight: 120
            },
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                opacity: {
                  duration: 0.2
                },
                x: {
                  type: 'spring',
                  stiffness: 20
                },
                maxHeight: {
                  delay: 1.7,
                  duration: 0.35
                }
              },
              maxHeight: 280
            },
            exit: {
              x: -700,
              opacity: 0,
              transition: {
                x: { duration: 0.8 },
                opacity: { duration: 0.8 }
              }
            }
          }}
          className={cn(
            'card relative z-20 flex h-fit min-h-fit w-fit shrink-0 flex-col items-center gap-md overflow-hidden opacity-0 laptop:gap-xl',
            isSpectacle && isMobile ? '!min-h-[180px]' : ''
          )}
        >
          {isSpectacle && (
            <p className="sub-heading w-full min-w-[14ch] max-w-[30ch] text-pretty text-center mobile-large:max-w-[30ch] laptop:leading-[1.75rem]">
              Avez-vous des questions sur nos événements ou souhaitez-vous réserver pour un groupe ?
            </p>
          )}
          {!isSpectacle && (
            <p className="sub-heading w-full min-w-[14ch] max-w-[30ch] text-pretty text-center laptop:leading-[1.75rem]">
              Besoin de communiquer ? <br />
              Des questions ?
            </p>
          )}
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
              <span className="w-full text-center">
                {isSpectacle ? 'Communiquons ensemble' : 'Contactez-nous'}
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        exit={{
          opacity: 0
        }}
        className="relative h-[700px] w-[100vw] shrink-0 origin-top overflow-hidden max-laptop:scale-85 max-tablet:h-[650px] max-[560px]:scale-100 max-mobile-large:mb-3xl max-mobile-large:h-[450px] max-mobile-large:pr-5xl tablet:w-[700px]"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          className="object-fit absolute top-0 -mt-lg h-[1080px] shrink-0 object-top"
        >
          <source src={'/assets/logo-animation.webm'} type="video/webm" />
          Votre navigateur ne supporte pas la balise video.
        </video>
      </motion.div>
    </div>
  );
}
