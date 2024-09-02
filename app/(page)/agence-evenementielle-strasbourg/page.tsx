import AproposSection from '@/components/event/landing-event/apropos-section/apropos-section';
import HeroSection from '@/components/event/landing-event/hero-section';
import ServiceSection from '@/components/event/landing-event/service-section';
import TrustSection from '@/components/event/landing-event/trust-section/trust-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agence événementielle à Strasbourg | Acte 5',
  description:
    "L'agence événementielle Acte 5 s'appuie depuis près de 30 ans sur les arts de la scène et la pratique théâtrale pour faire passer les messages."
};

export default function Home() {
  return (
    <main className="main main-gap relative overflow-clip px-0">
      <HeroSection isSpectacle={false}></HeroSection>
      <TrustSection></TrustSection>
      <ServiceSection></ServiceSection>
      <AproposSection></AproposSection>
    </main>
  );
}
