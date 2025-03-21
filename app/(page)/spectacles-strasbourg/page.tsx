import HeroSection from '@/components/event/landing-event/hero-section';
import CalendrierSection from '@/components/spectacle/a-laffiche/calendrier-section';
import ContactSection from '@/components/spectacle/contact-section';
import ProductionSection from '@/components/spectacle/landing/production-section/production-section';
import ScouteSection from '@/components/spectacle/landing/scoute-section/scoute-section';
import SpectacleSection from '@/components/spectacle/landing/spectacle-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Spectacles d'humour ou pour entreprises à Strasbourg | Acte 5",
  description:
    "Pour créer l'animation lors de vos fêtes de Noël, de vos soirées comité d'entreprise ou encore pour votre association, pensez à nos spectacles d'humour !"
};

export default function Home() {
  return (
    <main className="main relative overflow-clip px-0 after:absolute after:-z-30 after:h-full after:w-full after:bg-primary-400">
      <HeroSection isSpectacle={true}></HeroSection>

      <ScouteSection></ScouteSection>
      <CalendrierSection isLanding={true}></CalendrierSection>
      <SpectacleSection></SpectacleSection>

      <ProductionSection></ProductionSection>
      <ContactSection isSpectacle={true}></ContactSection>
    </main>
  );
}
