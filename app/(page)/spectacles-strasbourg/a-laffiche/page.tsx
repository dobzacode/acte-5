import { FromTopStaggerVariant } from '@/components/framer-motion/div-variants';
import StaggeredText from '@/components/framer-motion/staggered-text';
import Affiches from '@/components/spectacle/a-laffiche/affiches';
import TitleSection from '@/components/ui/title-section';

export default function Home() {
  return (
    <main className="relative flex  flex-col items-center justify-center gap-xl px-0 pt-5xl mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl tablet:pt-7xl laptop:gap-6xl laptop-large:gap-6xl">
      <TitleSection
        title={"A L'AFFICHE"}
        element={[
          { href: '/spectacles-strasbourg', text: 'Évenement' },
          { href: '/spectacles-strasbourg/a-laffiche', text: "A l'affiche" }
        ]}
      ></TitleSection>

      <StaggeredText
        variant={FromTopStaggerVariant}
        staggerValue={0.05}
        delay={1}
        className="heading--sub-large section-px max-w-[35ch] text-pretty text-center laptop:mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut
        labore et dolore magna
      </StaggeredText>
      <Affiches></Affiches>
    </main>
  );
}
