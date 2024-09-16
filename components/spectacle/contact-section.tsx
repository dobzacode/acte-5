import Link from 'next/link';
import DivHoverWrapper from '../framer-motion/hover-wrapper';
import LogoAnimation from './logo-animation';

export default function ContactSection() {
  return (
    <section className="section-inner-py max-w-screen inner-section-py relative z-20 h-[70vh] w-screen overflow-hidden bg-black mobile-large:rounded-tl-4xl tablet:rounded-tl-6xl laptop:rounded-tl-8xl">
      <div className="card absolute left-[12vw] top-[45%] z-20 flex w-fit flex-col gap-xl">
        <p className="sub-heading max-w-[30ch] text-center">
          Avez-vous des questions sur nos événements ou souhaitez-vous réserver pour un groupe ?{' '}
        </p>
        <DivHoverWrapper
          className="group flex w-full origin-center justify-center duration-medium hover:opacity-90"
          variant={{
            hover: {
              scale: 1.02,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }
          }}
        >
          <Link
            href="/spectacles-strasbourg/contact"
            className="sub-heading shadow-primary-sm 0 mx-auto flex grow items-center gap-xs rounded-sm border-b-2 border-r-2 border-primary-600 bg-primary px-md py-sm text-center text-white laptop:gap-sm laptop:px-lg laptop:py-md"
            scroll={false}
          >
            <span className="w-full text-center">Communiquons ensemble</span>
          </Link>
        </DivHoverWrapper>
      </div>
      <LogoAnimation />
    </section>
  );
}
