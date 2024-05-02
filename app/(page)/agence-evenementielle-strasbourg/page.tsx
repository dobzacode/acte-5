import AproposSection from '@/components/event/landing-event/apropos-section/apropos-section';
import HeroSection from '@/components/event/landing-event/hero-section';
import ServiceSection from '@/components/event/landing-event/service-section';
import TrustSection from '@/components/event/landing-event/trust-section/trust-section';

export default function Home() {
  return (
    <main className="main relative gap-xl px-0 mobile-small:gap-3xl mobile-medium:gap-2xl mobile-large:gap-4xl tablet:gap-5xl laptop:gap-6xl laptop-large:gap-8xl">
      <HeroSection></HeroSection>
      <TrustSection></TrustSection>
      <ServiceSection></ServiceSection>
      <AproposSection></AproposSection>
    </main>
  );
}
