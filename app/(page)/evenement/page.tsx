import AproposSection from '@/components/landing-event/apropos-section';
import HeroSection from '@/components/landing-event/hero-section';
import ServiceSection from '@/components/landing-event/service-section';
import TrustSection from '@/components/landing-event/trust-section';

export default function Home() {
  return (
    <main className="main relative gap-8xl overflow-x-hidden px-0">
      <HeroSection></HeroSection>
      <TrustSection></TrustSection>
      <ServiceSection></ServiceSection>
      <AproposSection></AproposSection>
    </main>
  );
}
