import HeroSection from '@/components/event/landing-event/hero-section';
import ProductionSection from '@/components/spectacle/landing/production-section/production-section';
import ScouteSection from '@/components/spectacle/landing/scoute-section/scoute-section';
import SpectacleSection from '@/components/spectacle/landing/spectacle-section';

export default function Home() {
  return (
    <main className="main main-gap relative  overflow-clip px-0 after:absolute after:-z-30  after:h-full after:w-full after:bg-primary-400">
      <HeroSection></HeroSection>
      <SpectacleSection></SpectacleSection>
      <ScouteSection></ScouteSection>
      <ProductionSection></ProductionSection>
      <div className="relative z-20 h-[50rem] w-full bg-white"></div>
    </main>
  );
}
