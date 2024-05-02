import { ComingFromRightVariant } from '@/components/framer-motion/div-variants';
import InviewWrapper from '@/components/framer-motion/inview-wrapper';
import TitleSection from '@/components/ui/title-section';

export default function Home() {
  return (
    <main className="main relative gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={'NOS PROJETS'}
        element={[
          { href: '/agence-evenementielle-strasbourg', text: 'Évenement' },
          { href: '/agence-evenementielle-strasbourg/temoignages', text: 'Nos projets' }
        ]}
      ></TitleSection>
      <InviewWrapper
        variant={ComingFromRightVariant}
        viewport={{ once: true, margin: '-200px 0px -200px 0px' }}
      >
        <div className="section-px fade-x container relative mx-auto flex gap-lg  overflow-clip [&>*]:shrink-0">
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
