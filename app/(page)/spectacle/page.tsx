import HeroSection from '@/components/event/landing-event/hero-section';
import ScouteSection from '@/components/spectacle/landing/scoute-section/scoute-section';
import SpectacleSection from '@/components/spectacle/landing/spectacle-section';

export default function Home() {
  return (
    <main className="main  relative gap-xl px-0 after:absolute after:-z-30 after:h-full  after:w-full after:bg-primary-400 mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl laptop:gap-6xl laptop-large:gap-8xl">
      <HeroSection></HeroSection>
      <SpectacleSection></SpectacleSection>
      <ScouteSection></ScouteSection>
    </main>
  );
}
