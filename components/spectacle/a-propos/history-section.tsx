import { ComingFromTopVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TimelapseSection from './timelapse-section';

export default function HistorySection() {
  return (
    <section className="inner-section-py flex w-full flex-col items-center gap-2xl bg-primary-400 text-white">
      <InviewWrapper variant={ComingFromTopVariant}>
        <h2 className="heading--extra-large section-px text-center text-white">Notre histoire</h2>
      </InviewWrapper>
      <TimelapseSection></TimelapseSection>
      <div
        style={{
          position: 'relative',
          paddingBottom: '30.25%',
          overflow: 'hidden'
        }}
        className="inner-section-gap section-px container relative z-10 -mt-3xl flex h-fit max-laptop:hidden laptop:mx-auto laptop:h-1/2 laptop:w-1/2"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/zlSvdH58XIU?si=8u-4Thqz-Sl6zkeR"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-sm"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 30 }}
        ></iframe>
      </div>

      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          overflow: 'hidden'
        }}
        className="inner-section-gap section-px container relative z-10 -mt-3xl flex h-fit w-full laptop:mx-auto laptop:hidden laptop:h-1/2 laptop:w-1/2"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/zlSvdH58XIU?si=8u-4Thqz-Sl6zkeR"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-sm"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 30 }}
        ></iframe>
      </div>
    </section>
  );
}
