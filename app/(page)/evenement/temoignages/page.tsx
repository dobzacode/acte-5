import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TitleSection from '@/components/ui/title-section';

export default function Home() {
  return (
    <main className="main relative gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'NOS PROJETS'}
        element={[
          { href: '/evenement', text: 'Évenement' },
          { href: '/evenement/temoignages', text: 'Nos projets' }
        ]}
      ></TitleSection>
      <InviewWrapper
        variant={ComingFromRightVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="section-px container relative mx-auto flex gap-lg overflow-clip before:absolute before:right-0 before:z-20 before:h-full before:w-[10rem] before:bg-gradient-to-l before:from-white before:to-transparent after:absolute after:left-0 after:z-20 after:h-full after:w-[10rem] after:bg-gradient-to-r after:from-white after:to-transparent [&>*]:shrink-0">
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square  w-5xl rounded-sm bg-gray-200 laptop:w-7xl"></p>
          <p className="aspect-square w-5xl rounded-sm bg-gray-200 laptop:w-7xl"> </p>
        </div>
      </InviewWrapper>
    </main>
  );
}
