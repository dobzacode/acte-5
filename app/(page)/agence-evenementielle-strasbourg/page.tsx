import AproposSection from '@/components/event/landing-event/apropos-section/apropos-section';
import HeroSection from '@/components/event/landing-event/hero-section';
import ServiceSection from '@/components/event/landing-event/service-section';
import TrustSection from '@/components/event/landing-event/trust-section/trust-section';

export default function Home() {
  return (
    <main className="main main-gap  relative overflow-clip px-0">
      <HeroSection></HeroSection>
      <TrustSection></TrustSection>
      <ServiceSection></ServiceSection>
      <AproposSection></AproposSection>
    </main>
  );
}
